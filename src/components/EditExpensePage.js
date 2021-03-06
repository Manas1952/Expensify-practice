import React from 'react'
import { connect } from 'react-redux'
import { editExpense, removeExpense, startEditExpense, startRemoveExpense } from '../actions/expenses'
import ExpenseForm from './ExpenseForm'

export class EditExpensePage extends React.Component {
  onRemove = () => {
    this.props.startRemoveExpense({ id: this.props.expense.id })
    this.props.history.push('/')
  }
  onSubmit = (expense) => {
    this.props.history.push('/')
    this.props.startEditExpense(this.props.expense.id, expense)
  }
  render() {
    return (
      <div>
        <ExpenseForm expense={this.props.expense} onSubmit={this.onSubmit} />
        <button onClick={this.onRemove} >Remove Expense</button>
      </div>
    )
  }
}

const mapStateToProps = (state, props) => {
  return {
    expense: state.expenses.find((expense) => {
      return expense.id === props.match.params.id
    })
  }
}

const mapDispatchToProps = (dispatch) => {
  return {
    startEditExpense: (id, expense) => dispatch(startEditExpense(id, expense)),
    startRemoveExpense: (id) => dispatch(startRemoveExpense(id))
  }
}

export default connect(mapStateToProps, mapDispatchToProps)(EditExpensePage)
  // react-router-dom@6.2.1 not passes {match, params, history} as props, so we use v5