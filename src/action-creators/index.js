import {
  INCREASE,
  DELETE_ARTICLE,
  CHANGE_DATE_RANGE,
  CHANGE_SELECTION,
  CREATE_COMMENT,
  CHANGE_USERNAME,
  CHANGE_OWN_COMMENT
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

export function createComment(articleId) {
  return {
    type: CREATE_COMMENT,
    payload: {
      articleId
    }
  }
}

export function changeOwnComment(comment, articleId) {
  return {
    type: CHANGE_OWN_COMMENT,
    payload: {
      comment,
      articleId
    }
  }
}

export function changeUsername(username) {
  return {
    type: CHANGE_USERNAME,
    payload: {
      username
    }
  }
}
