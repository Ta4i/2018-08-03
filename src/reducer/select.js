import { CHANGE_FILTER_SELECT } from '../action-types'

export default (state = [], action) => {
  switch (action.type) {
    case CHANGE_FILTER_SELECT:
      return action.payload.new_values
    default:
      return state
  }
}
