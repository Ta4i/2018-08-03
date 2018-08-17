import { CHANGE_FILTER_DATE, CHANGE_FILTER_SELECT } from '../action-types'

const stateMock = {
  date: {
    from: null,
    to: null
  },
  select: []
}

export default (state = stateMock, action) => {
  switch (action.type) {
    case CHANGE_FILTER_DATE:
      return Object.assign({}, state, { date: action.payload.new_date })
    case CHANGE_FILTER_SELECT:
      return Object.assign({}, state, { select: action.payload.new_values })
    default:
      return state
  }
}
