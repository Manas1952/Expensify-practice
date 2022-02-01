import moment from "moment";

export default [
  {
    id: '1',
    description: 'Testing_1',
    note: '',
    amount: 123,
    createdAt: 0
  },
  {
    id: '2',
    description: 'Testing_2',
    note: '',
    amount: 23456,
    createdAt: moment(0).subtract(4, 'days').valueOf()
  },
  {
    id: '1',
    description: 'Testing_3',
    note: '',
    amount: 3456,
    createdAt: moment(0).add(4, 'days').valueOf()
  },
]