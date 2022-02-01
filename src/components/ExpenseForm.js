import moment from 'moment'
import React from 'react'
// import 'react-dates/lib/css/_datepicker.css'
// import 'react-dates/lib/theme/DefaultTheme';
// import 'react-dates/initialize'
import { SingleDatePicker } from 'react-dates'

export default class ExpenseForm extends React.Component {
  constructor(props) {
    super(props)
    // console.log(props.expense)
    this.state = {
      description: props.expense ? props.expense.description : '',
      amount: props.expense ? (props.expense.amount / 100).toString() : '',
      note: props.expense ? props.expense.note : '',
      createdAt: props.expense ? moment(props.expense.createdAt) : moment(),
      calendarFocused: false,
      error: ''
    }
  }
  onDescriptionChange = (e) => {
    const description = e.target.value
    this.setState(() => ({ description }))
  }
  onAmountChange = (e) => {
    const amount = e.target.value
    if (!amount || amount.match(/^\d{1,}(\.\d{0,2})?$/)) {
      this.setState(() => ({ amount }))
    }
  }
  onNoteChange = (e) => {
    const note = e.target.value
    this.setState(() => ({ note }))
  }
  onDateChange = (createdAt) => {
    if (createdAt) {
      this.setState(() => ({ createdAt }))
    }
  }
  onFocusChange = ({ focused }) => {
    this.setState(() => ({ calendarFocused: focused }))
  }
  onSubmit = (e) => {
    e.preventDefault()
    if (!this.state.amount || !this.state.description) {
      this.setState(() => ({ error: 'Please provide description and amount' }))
    }
    else {
      this.props.onSubmit({
        description: this.state.description,
        amount: parseFloat(this.state.amount, 10) * 100,
        createdAt: this.state.createdAt,
        note: this.state.note
      })
    }
  }
  render() {
    return (
      <form onSubmit={this.onSubmit} >

        { !!this.state.error && <p>{ this.state.error }</p> }

        <input type="text" placeholder='Description' value={this.state.description} onChange={this.onDescriptionChange} />

        <input type="number" placeholder='Amount' value={this.state.amount} onChange={this.onAmountChange} />

        <SingleDatePicker
          date={this.state.createdAt}
          onDateChange={this.onDateChange}
          focused={this.state.calendarFocused}
          onFocusChange={this.onFocusChange}
          numberOfMonths={1}
          isOutsideRange={() => { false }}
          readOnly={true}
        />
        <textarea placeholder='Add a note for your expense (optional)*' value={this.state.note} onChange={this.onNoteChange} ></textarea>

        <button>Save Expense</button>
      </form>
    )
  }
}