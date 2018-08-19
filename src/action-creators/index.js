import {
  INCREASE,
  DELETE_ARTICLE,
  CHANGE_DATE_RANGE,
  CHANGE_SELECTION,
  CREATE_COMMENT,
  CHANGE_USERNAME
} from '../action-types'

export const count = () => ({
  type: INCREASE
})

export const deleteArticle = (id) => ({
  type: DELETE_ARTICLE,
  payload: {
    id
  }
})

export function changeDateRange(dateRange) {
  return {
    type: CHANGE_DATE_RANGE,
    payload: { dateRange }
  }
}
export function changeSelection(selected) {
  return {
    type: CHANGE_SELECTION,
    payload: { selected }
  }
}

export function createComment(comment, articleId) {
  return {
    type: CREATE_COMMENT,
    payload: {
      comment,
      articleId
    }
  }
}

export function changeUsername(username) {
  console.dir(username)
  return {
    type: CHANGE_USERNAME,
    payload: {
      username
    }
  }
}
