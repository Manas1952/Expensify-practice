import { shallow } from 'enzyme'
import moment from 'moment'
import React from 'react'
import { ExpenseListFilters } from '../../components/ExpenseListFilters'
import { altFilters, filters } from '../fixtures/filters'

let setTextFilter, setStartDate, setEndDate, sortByAmount, sortByDate, wrapper

beforeEach(() => {
  setTextFilter = jest.fn()
  setStartDate = jest.fn()
  setEndDate = jest.fn()
  sortByDate = jest.fn()
  sortByAmount = jest.fn()
  wrapper = shallow(<ExpenseListFilters
    setTextFilter= {setTextFilter}
    setStartDate= {setStartDate}
    setEndDate= {setEndDate}
    sortByDate= {sortByDate}
    sortByAmount= {sortByAmount}
    filters={filters}
  />)
})

test('should render ExpenseListFiletrs', () => {
  expect(wrapper).toMatchSnapshot()
})

test('should render ExpenseListFiletrs with altered filters', () => {
  wrapper.setProps(({
    filters: altFilters
  }))
  expect(wrapper).toMatchSnapshot()
})

test('should handle onTextChange', () => {
  const value = 'bill'
  wrapper.find('input').simulate('change', {
    target: { value }
  })
  expect(setTextFilter).toHaveBeenLastCalledWith(value)
})

test('should handle onSortChange for date', () => {
  const value = 'date'
  wrapper.setProps({
    filters: altFilters
  })
  wrapper.find('select').simulate('change', {
    target: { value }
  })
  expect(sortByDate).toHaveBeenCalled()
})

test('should handle onSortChange for amount', () => {
  const value = 'amount'
  wrapper.find('select').simulate('change', {
    target: { value }
  })
  expect(sortByAmount).toHaveBeenCalled()
})

test('should handle onDatesChange', () => {
  const startDate = moment(0).add(4, 'years')
  const endDate = moment(0).add(8, 'years')
  wrapper.find('withStyles(DateRangePicker)').prop('onDatesChange')({ startDate, endDate})
  expect(setStartDate).toHaveBeenLastCalledWith(startDate)
  expect(setEndDate).toHaveBeenLastCalledWith(endDate)
})

test('should handle onFocusChange', () => {
  const calendarFocused = 'endDate'
  wrapper.find('withStyles(DateRangePicker)').prop('onFocusChange')(calendarFocused)
  expect(wrapper.state('calendarFocused')).toBe(calendarFocused)
})