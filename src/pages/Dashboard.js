import { useContext } from 'react'
// Components
import { Info, Repos, User, Search, Navbar } from '../components'
import { GithubContext } from '../context/context'

import loadingImg from '../images/preloader.gif'

export default function Dashboard() {
  // Github context
  const { loading } = useContext(GithubContext)

  if (loading)
    return (
      <main>
        <Navbar />
        <Search />
        <img src={loadingImg} className='loading-img' alt='loading spinner' />
      </main>
    )

  return (
    <main>
      <Navbar />
      <Search />
      <Info />
      <User />
      <Repos />
    </main>
  )
}
