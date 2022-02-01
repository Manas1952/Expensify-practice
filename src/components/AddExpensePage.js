import React from 'react'
import { v4 as uuid } from 'uuid'
import Header from './Header'
import ExpenseForm from './ExpenseForm'
import { addExpense } from '../actions/expenses'
import { connect } from 'react-redux'

export class AddExpensePage extends React.Component {
  onSubmit = (expense) => {
    const id = uuid()
    // this.props.dispatch(addExpense({ id, ...expense }))
    this.props.addExpense({ id, ...expense })
    this.props.history.push('/')
  }
  render() {
    return (
      <div>
        <Header />
        <ExpenseForm onSubmit={this.onSubmit} />
      </div>
    )
  }
}

const mapDispatchToProps = (dispatch) => {
  return {
    addExpense: (expense) => dispatch(addExpense(expense))  // we do this because previously we were accessing addExpense through props(i.e. this.props.dispatch(addExpense({ id, ...expense }))), and during testing test case doesn't know what the addExpense is. So a ccess it as dispatch
  }
}

export default connect(undefined, mapDispatchToProps)(AddExpensePage)