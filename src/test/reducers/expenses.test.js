import expensesReducer from '../../reducers/expenses'
import expenses from '../fixtures/expenses'

test('should test default state', () => {
  const action = {
    type: '@@INIT'
  }
  const state = expensesReducer(undefined, action)
  expect(state).toEqual([])
})

test('should add expense', () => {
  const expense = {
    id: '4',
    description: 'Testing_4',
    note: 'note',
    amount: 789,
    createdAt: 4
  }
  const action = {
    type: 'ADD_EXPENSE',
    expense
  }
  const state = expensesReducer(expenses, action)
  expect(state).toEqual([...expenses, expense])
})

test('should remove expense', () => {
  const action = {
    type: 'REMOVE_EXPENSE',
    id: expenses[0].id
  }
  const state = expensesReducer(expenses, action)
  expect(state).toEqual([expenses[1], expenses[2]])
})

test('should not remove expense with wrong id', () => {
  const action = {
    type: 'REMOVE_EXPENSE',
    id: '-1'
  }
  const state = expensesReducer(expenses, action)
  expect(state).toEqual(expenses)
})

test('should edit expense', () => {
  const amount = 1952
  const action = {
    type: 'EDIT_EXPENSE',
    id: expenses[0].id,
    updates: {
      amount
    }
  }
  const state = expensesReducer(expenses, action)
  expect(state[0].amount).toEqual(amount)
})

test('should not edit if expense not found', () => {
  const amount = 1952
  const action = {
    type: 'EDIT_EXPENSE',
    id: -1,
    updates: {
      amount
    }
  }
  const state = expensesReducer(expenses, action)
  expect(state).toEqual(expenses)
})