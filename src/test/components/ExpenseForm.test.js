import React from 'react'
import moment from 'moment'
import { shallow } from 'enzyme'
import ExpenseForm from '../../components/ExpenseForm'
import expenses from '../fixtures/expenses'

test('should render ExpenseForm (when we add expense)', () => {
  const wrapper = shallow(<ExpenseForm />)
  expect(wrapper).toMatchSnapshot()
})

test('should render ExpenseForm (when we edit expense)', () => {
  const wrapper = shallow(<ExpenseForm expense={expenses[1]} />)
  expect(wrapper).toMatchSnapshot()
})

test('should render error when form is not submitted properly', () => {
  const wrapper = shallow(<ExpenseForm />)
  expect(wrapper).toMatchSnapshot()
  wrapper.find('form').simulate('submit', {
    preventDefault: () => {}
  })
  expect(wrapper.state('error').length).toBeGreaterThan(0)
  expect(wrapper).toMatchSnapshot()
})

test('should set onDescriptionChange', () => {
  const value = 'New description'
  const wrapper = shallow(<ExpenseForm />)
  wrapper.find('input').at(0).simulate('change', {
    target: { value }
  })
  expect(wrapper.state('description')).toBe(value)
})

test('should set onNoteChange', () => {
  const value = 'New Note'
  const wrapper = shallow(<ExpenseForm />)
  wrapper.find('textarea').simulate('change', {
    target: { value }
  })
  expect(wrapper.state('note')).toBe(value)
})

test('should set onAmountChange', () => {
  const value = '1234.56'
  const wrapper = shallow(<ExpenseForm />)
  wrapper.find('input').at(1).simulate('change', {
    target: { value }
  })
  expect(wrapper.state('amount')).toBe(value)
})

test('should not set onAmountChange for invalid input', () => {
  const value = '1234.567'
  const wrapper = shallow(<ExpenseForm />)
  wrapper.find('input').at(1).simulate('change', {
    target: { value }
  })
  expect(wrapper.state('amount')).toBe('')
})

test('should call onSubmit prop for valid submission', () => {
  const onSubmit = jest.fn()
  const wrapper = shallow(<ExpenseForm expense={expenses[0]} onSubmit={onSubmit} />)
  wrapper.find('form').simulate('submit', {
    preventDefault: () => {}
  })
  expect(wrapper.state('error')).toBe('')
  expect(onSubmit).toHaveBeenLastCalledWith({
    description: expenses[0].description,
    note: expenses[0].note,
    amount: expenses[0].amount,
    createdAt: moment(expenses[0].createdAt)
  })
})

test('should set onDatechange', () => {
  const now = moment()
  const wrapper = shallow(<ExpenseForm />)
  // console.log(wrapper.find('form').childAt(1).type())
  wrapper.find('withStyles(SingleDatePicker)').prop('onDateChange')(now)  // display name is changed to 'withStyles(SingleDatePicker)'
})

test('should set onFocusChange', () => {
  const wrapper = shallow(<ExpenseForm />)
  wrapper.find('withStyles(SingleDatePicker)').prop('onFocusChange')({ focused: true })
  expect(wrapper.state('calendarFocused')).toBe(true)
})