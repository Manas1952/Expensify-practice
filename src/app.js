import moment from 'moment'
import React from 'react'
import ReactDOM from 'react-dom'
import { v4 as uuid } from 'uuid'
import { Provider } from 'react-redux'
import { addExpense, editExpense, removeExpense } from './actions/expenses'
import { setStartDate, setTextFilter, sortByAmount, sortByDate, setEndDate } from './actions/filters'
import AppRouter from './router/AppRouter'
import configureStore from './store/configureStore'
import 'react-dates/initialize'
import 'normalize.css/normalize.css'
import './styles/styles.scss'
import 'react-dates/lib/css/_datepicker.css'
import 'react-dates/lib/theme/DefaultTheme';

const store = configureStore()
const expense1 = store.dispatch(addExpense({ id:uuid(), description: 'Rent', amount: 225, createdAt: moment(), note: 'note' }))
const expense2 = store.dispatch(addExpense({ id: uuid(), description: 'Bill', amount: 100, createdAt: moment() }))
// console.log(moment("2016-10-11").valueOf())

const jsx = (
  <Provider store={store} >
    <AppRouter />
  </Provider>
)

ReactDOM.render(jsx, document.getElementById('app'))