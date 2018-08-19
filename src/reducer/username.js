import { CHANGE_USERNAME } from '../action-types'

export default (username = '', action) => {
  switch (action.type) {
    case CHANGE_USERNAME:
      return action.payload.username
    default:
      return username
  }
}
