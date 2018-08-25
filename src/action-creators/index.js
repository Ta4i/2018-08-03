import {
  INCREASE,
  DELETE_ARTICLE,
  CHANGE_DATE_RANGE,
  CHANGE_SELECTION,
  ADD_COMMENT,
  LOAD_ALL_ARTICLES,
  LOAD_ARTICLE_TEXT,
  LOAD_COMMENTS
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

export function addComment(comment, articleId) {
  return {
    type: ADD_COMMENT,
    payload: { comment, articleId },
    generateId: true
  }
}

export function loadAllArticles() {
  return {
    type: LOAD_ALL_ARTICLES,
    callAPI: '/api/article'
  }
}

export function loadArticleText(articleId) {
  return {
    type: LOAD_ARTICLE_TEXT,
    payload: {
      articleId
    },
    callAPI: `/api/article/${articleId}`
  }
}

export function loadComments(articleId, comments) {
  return {
    type: LOAD_COMMENTS,
    callAPI: `/api/comment?article=${articleId}`,
    payload: {
      articleId,
      comments
    }
  }
}
