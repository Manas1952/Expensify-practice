import React from 'react'
import ExpenseListFilters from './ExpenseListFilters'
import ExpensesList from './ExpensesList'
import ExpensesSummary from './ExpensesSummary'
import Header from './Header'

const ExpenseDashBoardPage = () => (
  <div>
    <ExpensesSummary />
    <ExpenseListFilters />
    <ExpensesList />
  </div>
)

export default ExpenseDashBoardPage