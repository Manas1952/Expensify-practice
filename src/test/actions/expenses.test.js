import { addExpense, removeExpense, editExpense } from '../../actions/expenses'
import expenses from '../fixtures/expenses'

test('should add expense', () => {
  const action = addExpense(expenses[2])
  expect(action).toEqual({
    type: 'ADD_EXPENSE',
    expense: expenses[2]
  })
})

test('should remove expense', () => {
  const action = removeExpense({ id: '123abc' })
  expect(action).toEqual({
    type: 'REMOVE_EXPENSE',
    id: '123abc'
  })
})

test('should edit expense', () => {
  const action = editExpense( '123abc', { note: 'edited note' })
  expect(action).toEqual({
    type: 'EDIT_EXPENSE',
    id: '123abc',
    updates: {
      note: 'edited note'
    }
  })
})