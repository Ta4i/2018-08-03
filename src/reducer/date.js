import { CHANGE_FILTER_DATE } from '../action-types'

export default (state = { from: null, to: null }, action) => {
  switch (action.type) {
    case CHANGE_FILTER_DATE:
      return Object.assign({}, action.payload.new_date)
    default:
      return state
  }
}
