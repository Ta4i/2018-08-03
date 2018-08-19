import { normalizedComments } from '../fixtures'
import { CREATE_COMMENT } from '../action-types'

const defaultComments = normalizedComments.reduce(
  (res, comment) => ({
    ...res,
    [comment.id]: comment
  }),
  {}
)

export default (comments = defaultComments, action) => {
  switch (action.type) {
    case CREATE_COMMENT:
      return {
        ...comments,
        [action.id]: {
          id: action.id,
          user: action.username,
          text: action.payload.comment
        }
      }
    default:
      return comments
  }
}
