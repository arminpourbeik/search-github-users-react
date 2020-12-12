// React Router DOM
import { BrowserRouter as Router, Route, Switch } from 'react-router-dom'

// Pages
import { Dashboard, Login, Error } from './pages'

function App() {
  return (
    <Router>
      <Switch>
        <Route path='/' exact>
          <Dashboard />
        </Route>
        <Route path='/login'>
          <Login />
        </Route>
        <Route path='*'>
          <Error />
        </Route>
      </Switch>
    </Router>
  )
}

export default App
