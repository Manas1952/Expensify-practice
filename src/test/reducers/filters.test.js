import filtersReducer from '../../reducers/filters'
import moment from 'moment'

test('should test default state', () => {
  const action = {
    type: '@@INIT'
  }
  const state = filtersReducer(undefined, action)
  expect(state).toEqual({
    text: '',
    sortBy: 'date',
    startDate: moment().startOf('month'),
    endDate: moment().endOf('month')
  })
})

test('should sort by amount', () => {
  const action = {
    type: 'SORT_BY_AMOUNT'
  }
  const state = filtersReducer(undefined, action)
  expect(state.sortBy).toEqual('amount')
})

test('should sort by date', () => {
  const currentState = {
    text: '',
    sortBy: 'amount',
    startDate: undefined,
    endDate: undefined
  }
  const action = {
    type: 'SORT_BY_DATE'
  }
  const state = filtersReducer(currentState, action)
  expect(state.sortBy).toEqual('date')
})

test('should set text filter', () => {
  const text = 'Testing_1'
  const action = {
    type: 'SET_TEXT_FILTER',
    text: text
  }
  const state = filtersReducer(undefined, action)
  expect(state.text).toEqual(text)
})

test('should set start date', () => {
  const startDate = 1
  const action = {
    type: 'SET_START_DATE',
    startDate
  }
  const state = filtersReducer(undefined, action)
  expect(state.startDate).toEqual(startDate)
})

test('should set end date', () => {
  const endDate = 1
  const action = {
    type: 'SET_END_DATE',
    endDate
  }
  const state = filtersReducer(undefined, action)
  expect(state.endDate).toEqual(endDate)
})