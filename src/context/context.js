import { useState, useEffect, createContext } from 'react'
import axios from '../api/base'
import mockUser from './mock/mockUser'
import mockRepos from './mock/mockRepos'
import mockFollowers from './mock/mockFollowers'

export const GithubContext = createContext()

export function GithubProvier({ children }) {
  // States
  const [githubUser, setGithubUser] = useState(mockUser)
  const [repos, setRepos] = useState(mockRepos)
  const [followers, setFollowers] = useState(mockFollowers)
  const [requests, setRequests] = useState(0)
  const [loading, setLoading] = useState(false)
  const [error, setError] = useState({ show: false, msg: '' })

  async function searchGithubUser(user) {
    toggleError()

    setLoading(true)
    const response = await axios
      .get(`/users/${user}`)
      .catch((e) => console.log(e))

    if (response) {
      setGithubUser(response.data)

      const { login, followers_url } = response.data

      await Promise.allSettled([
        // Request for repos
        axios.get(`/users/${login}/repos?per_page=100`),

        // Request for followers
        axios({
          method: 'GET',
          baseURL: `${followers_url}`,
        }),
      ])
        .then((result) => {
          const [repos, followers] = result
          const status = 'fulfilled'
          if (repos.status === status) setRepos(repos.value.data)
          if (followers.status === status) setFollowers(followers.value.data)
        })
        .catch((error) => console.log(error))
    } else toggleError(true, 'there is no user with that username')

    checkRequests()
    setLoading(false)
  }

  function toggleError(show = false, msg = '') {
    setError({ show, msg })
  }

  async function checkRequests() {
    try {
      const response = await axios.get('/rate_limit')
      let {
        rate: { remaining },
      } = response.data
      setRequests(remaining)
      if (remaining === 0)
        toggleError(true, 'sorry, you have exceeded your hourly rate limit!')
    } catch (e) {
      console.error(e)
    }
  }

  useEffect(() => {
    // Check rate
    checkRequests()
    // eslint-disable-next-line react-hooks/exhaustive-deps
  }, [])

  return (
    <GithubContext.Provider
      value={{
        githubUser,
        repos,
        followers,
        requests,
        error,
        loading,
        searchGithubUser,
      }}
    >
      {children}
    </GithubContext.Provider>
  )
}
