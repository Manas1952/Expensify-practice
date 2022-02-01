import moment from 'moment'
import numeral from 'numeral'
import React from 'react'
import { NavLink } from 'react-router-dom'

const ExpenseListItem = ({ id, description, createdAt, amount, note }) => (
  <div>
      <NavLink to={`/edit/${id}`} key={id}>{description} {numeral(amount / 100).format('$0,0.00')} {moment(createdAt).format('MMMM Do, YYYY')} {note} </NavLink>
  </div>
)

export default ExpenseListItem