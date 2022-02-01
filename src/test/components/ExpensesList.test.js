import { shallow } from 'enzyme'
import React from 'react'
import { ExpensesList } from '../../components/ExpensesList'
import expenses from '../fixtures/expenses'

test('should render ExpensesList', () => {
  const wrapper = shallow(<ExpensesList expenses={expenses} />)
  expect(wrapper).toMatchSnapshot()
})

test('should render ExpensesList with empty expenses', () => {
  const wrapper = shallow(<ExpensesList expenses={[]} />)
  expect(wrapper).toMatchSnapshot()
})