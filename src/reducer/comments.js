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
  const { type, id, username, comment } = action

  switch (type) {
    case CREATE_COMMENT:
      return {
        ...comments,
        [id]: {
          id: id,
          user: username,
          text: comment
        }
      }
    default:
      return comments
  }
}
