import moment from 'moment'
import { setEndDate, setStartDate, setTextFilter, sortByAmount, sortByDate } from '../../actions/filters'

test('should set text filter', () => {
  const action = setTextFilter('Testing_1')
  expect(action).toEqual({
    type: 'SET_TEXT_FILTER',
    text: 'Testing_1'
  })
})

test('should set start date', () => {
  const action = setStartDate(moment(0))
  expect(action).toEqual({
    type: 'SET_START_DATE',
    startDate: moment(0)
  })
})

test('should set end date', () => {
  const action = setEndDate(moment(0))
  expect(action).toEqual({
    type: 'SET_END_DATE',
    endDate: moment(0)
  })
})

test('should set sort by date filter', () => {
  const action = sortByDate()
  expect(action).toEqual({
    type: 'SORT_BY_DATE'
  })
})

test('should set sort by amount filter', () => {
  const action = sortByAmount()
  expect(action).toEqual({
    type: 'SORT_BY_AMOUNT'
  })
})