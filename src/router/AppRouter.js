import React from 'react'
import { Route, Router, Switch } from 'react-router-dom'
import createHistory from 'history/createBrowserHistory'
// import { createBrowserHistory } from 'history'
import AddExpensePage from '../components/AddExpensePage'
import EditExpensePage from '../components/EditExpensePage'
import ExpenseDashboardPage from '../components/ExpenseDashboardPage'
import NotFoundPage from '../components/NotFoundPage'

const history = createHistory()

const AppRouter = () => (
  <Router history={history} >
    <div>
      <Switch>
        <Route path="/" component={ExpenseDashboardPage} exact={true} />
        <Route ch path="/create" component={AddExpensePage} />
        <Route path="/edit/:id" component={EditExpensePage} />
        <Route component={NotFoundPage} />
      </Switch>
    </div>
  </Router>
)

export default AppRouter