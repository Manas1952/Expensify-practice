import { shallow } from 'enzyme'
import React from 'react'
import { ExpensesSummary } from '../../components/ExpensesSummary'

test('should render ExpensesSummary with only one expense', () => {
  const wrapper = shallow(<ExpensesSummary expenseCount={1} expensesTotal={10} />)
  expect(wrapper).toMatchSnapshot()
})

test('should render ExpensesSummary with more than one expense', () => {
  const wrapper = shallow(<ExpensesSummary expenseCount={2} expensesTotal={100} />)
  expect(wrapper).toMatchSnapshot()
})