// React Router DOM
import { BrowserRouter as Router, Route, Switch } from 'react-router-dom'

// Pages
import { Dashboard, Login, Error, PrivateRoute, AuthWrapper } from './pages'

function App() {
  return (
    <AuthWrapper>
      <Router>
        <Switch>
          <PrivateRoute path='/' exact>
            <Dashboard />
          </PrivateRoute>
          <Route path='/login'>
            <Login />
          </Route>
          <Route path='*'>
            <Error />
          </Route>
        </Switch>
      </Router>
    </AuthWrapper>
  )
}

export default App
