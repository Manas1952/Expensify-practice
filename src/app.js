import moment from 'moment'
import React from 'react'
import ReactDOM from 'react-dom'
import { v4 as uuid } from 'uuid'
import { Provider } from 'react-redux'
import 'react-dates/initialize'
import 'normalize.css/normalize.css'
import 'react-dates/lib/css/_datepicker.css'
import { addExpense, editExpense, removeExpense, startSetExpenses } from './actions/expenses'
import { setStartDate, setTextFilter, sortByAmount, sortByDate, setEndDate } from './actions/filters'
import AppRouter, { history } from './router/AppRouter'
import configureStore from './store/configureStore'
import './styles/styles.scss'
import { firebase } from './firebase/firebase'
import { login, logout, startLogin, startLogout } from './actions/auth'
import LoadingPage from './components/LoadingPage'

const store = configureStore()

const jsx = (
  <Provider store={store} >
    <AppRouter />
  </Provider>
)
let hasRendered = false
const renderApp = () => {
  if (!hasRendered) {
    ReactDOM.render(jsx, document.getElementById('app'))
    hasRendered = true
  }
}
ReactDOM.render(<LoadingPage />, document.getElementById('app'))

firebase.auth().onAuthStateChanged((user) => {
  if (user) {
    store.dispatch(login(user.uid))
    store.dispatch(startSetExpenses()).then(() => {
      renderApp()
      if(history.location.pathname === '/') {
        history.push('/dashboard')
      }
    })
  }
  else {
    store.dispatch(logout())
    renderApp()
    history.push('/')
  }
})