import {
  ADD_COMMENT,
  LOAD_COMMENTS,
  START,
  SUCCES,
  FAIL
} from '../action-types'

import { loadingModel } from './utils'
import { Record, Map } from 'immutable'

const CommentModel = new Record({
  ...loadingModel,
  entities: {
    id: null,
    user: null,
    text: null
  }
})

export default (comments = new Map(), action) => {
  const { type, payload, randomId, responce, error } = action
  switch (type) {
    case LOAD_COMMENTS + START:
      return payload.comments.reduce(
        (result, id) =>
          result.set(
            id,
            new CommentModel({
              loading: true
            })
          ),
        comments
      )
    case LOAD_COMMENTS + SUCCES:
      return responce.reduce((result, comment) => {
        const { id, user, text } = comment
        return result.set(
          id,
          new CommentModel({
            loading: false,
            loaded: true,
            entities: {
              id,
              user,
              text
            }
          })
        )
      }, comments)
    case LOAD_COMMENTS + FAIL:
      return payload.comments.reduce(
        (result, id) =>
          result.set(
            id,
            new CommentModel({
              loading: false,
              loaded: false,
              error
            })
          ),
        comments
      )
    case ADD_COMMENT:
      console.log('REDUCER COMMENT', payload)
      return comments.set(randomId, {
        loading: false,
        loaded: true,
        error: null,
        entities: {
          ...payload.comment
        }
      })
    default:
      return comments
  }
}
