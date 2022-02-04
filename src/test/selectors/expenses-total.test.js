import expensesTotal from '../../selectors/expenses-total'
import expenses from '../fixtures/expenses'

test('should give total expenses (having 0 expenses)', () => {
  const total = expensesTotal([])
  expect(total).toBe(0)
})

test('should give total expenses (having 1 expense)', () => {
  const total = expensesTotal([expenses[0]])
  expect(total).toBe(123)
})

test('should give total expenses (having mutiple expenses)', () => {
  const total = expensesTotal(expenses)
  expect(total).toBe(27035)
})