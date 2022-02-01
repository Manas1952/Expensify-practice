// import 'react-dates/initialize'
import React from 'react'
import { DateRangePicker } from 'react-dates'
import { connect } from 'react-redux'
import { setStartDate, setEndDate, setTextFilter, sortByAmount, sortByDate } from '../actions/filters'

export class ExpenseListFilters extends React.Component {
  state = {
    calendarFocused: null
  }
  onTextChange = (e) => {
    const text = e.target.value
    this.props.setTextFilter(text)
  }
  onSortChange = (e) => {
    if (e.target.value == 'date') {
      this.props.sortByDate()
    }
    else {
      this.props.sortByAmount()
    }
  }
  onFocusChange = (calendarFocused) => {
    this.setState(() => ({ calendarFocused }))
  }
  onDatesChange = ({ startDate, endDate }) => {
    this.props.setStartDate(startDate)
    this.props.setEndDate(endDate)
  }
  render() {
    return (
      <div>
        <input type="text" placeholder='Search Expenses' value={this.props.filters.text} onChange={this.onTextChange} />
        <select name="" id="" value={this.props.filters.sortBy} onChange={this.onSortChange} >
          <option value="date">Date</option>
          <option value="amount">Amount</option>
        </select>
        <DateRangePicker
          startDateId='startDateId'
          endDateId='endDateId'
          startDate={this.props.filters.startDate}
          endDate={this.props.filters.endDate}
          focusedInput={this.state.calendarFocused}
          onFocusChange={this.onFocusChange}
          onDatesChange={this.onDatesChange}
          showClearDates={true}
          numberOfMonths={1}
          isOutsideRange={() => false}
          readOnly={true}
        />
      </div>
    )
  }
}

const mapStateToProps = (state) => {
  return {
    filters: state.filters
  }
}
const mapDispatchToProps = (dispatch) => {
  return {
    setStartDate: (startDate) => dispatch(setStartDate(startDate)),
    setEndDate: (endDate) => dispatch(setEndDate(endDate)),
    setTextFilter: (text) => dispatch(setTextFilter(text)),
    sortByDate: () => dispatch(sortByDate()),
    sortByAmount: () => dispatch(sortByAmount())
  }
}

export default connect(mapStateToProps, mapDispatchToProps)(ExpenseListFilters)