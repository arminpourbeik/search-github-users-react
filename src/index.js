import React from 'react'
import ReactDOM from 'react-dom'
import './index.css'
import App from './App'
import reportWebVitals from './reportWebVitals'
import { Auth0Provider } from '@auth0/auth0-react'

// Context
import { GithubProvier } from './context/context'

ReactDOM.render(
  <React.StrictMode>
    <Auth0Provider
      domain='dev-94e404vd.us.auth0.com'
      clientId='MjZDAhtjxFAhm8J6O5GG8hxtxAPDALWN'
      redirectUri={window.location.origin}
      cacheLocation='localstorage'
    >
      <GithubProvier>
        <App />
      </GithubProvier>
    </Auth0Provider>
  </React.StrictMode>,
  document.getElementById('root')
)

// If you want to start measuring performance in your app, pass a function
// to log results (for example: reportWebVitals(console.log))
// or send to an analytics endpoint. Learn more: https://bit.ly/CRA-vitals
reportWebVitals()
