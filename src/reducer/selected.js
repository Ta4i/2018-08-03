import { SELECT_ARTICLES } from '../action-types'

export default (state = [], action) => {
  switch (action.type) {
    case SELECT_ARTICLES: {
      return action.payload
    }
    default:
      return state
  }
}
