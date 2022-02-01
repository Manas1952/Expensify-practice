export const addExpense = (expense) => ({
  type: 'ADD_EXPENSE',
  expense
})

export const editExpense = (id, updates) => ({
  type: 'EDIT_EXPENSE',
  id,
  updates
})

export const removeExpense = ({ id }) => ({
  type: 'REMOVE_EXPENSE',
  id
})