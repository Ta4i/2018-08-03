import {
  DELETE_ARTICLE,
  ADD_COMMENT,
  LOAD_ALL_ARTICLES,
  LOAD_COMMENTS,
  START,
  SUCCES,
  FAIL,
  LOAD_ARTICLE_TEXT
} from '../action-types'

import {
  arrToMap,
  loadingModel,
  loadingWithContentModel,
  ReducerRecord
} from './utils'

import { Record } from 'immutable'

const ArticleTextModel = new Record(loadingWithContentModel)
const ArticleCommentsLoadingModel = new Record(loadingModel)

const ArticleModel = new Record({
  id: null,
  title: null,
  date: null,
  comments: [],
  commentsLoadingStatus: new ArticleCommentsLoadingModel(),
  text: new ArticleTextModel()
})

const ArticleListReducer = ReducerRecord(ArticleModel)

export default (articles = new ArticleListReducer(), action) => {
  const { type, payload, randomId, responce, error } = action

  switch (type) {
    case DELETE_ARTICLE:
      return articles.deleteIn(['entities', payload.id])
    case ADD_COMMENT:
      console.log('ADD_COMMENT', payload)
      return articles.updateIn(
        ['entities', payload.articleId, 'comments'],
        (comments) => comments.concat(randomId)
      )
    case LOAD_ALL_ARTICLES + START:
      return articles.set('loading', true)
    case LOAD_ALL_ARTICLES + SUCCES:
      return articles
        .set('entities', arrToMap(responce, ArticleModel))
        .set('loading', false)
        .set('loaded', true)
    case LOAD_ALL_ARTICLES + FAIL:
      return articles
        .set('error', error)
        .set('loading', false)
        .set('loaded', false)
    case LOAD_ARTICLE_TEXT + START:
      return articles.setIn(
        ['entities', payload.articleId, 'text', 'loading'],
        true
      )
    case LOAD_ARTICLE_TEXT + SUCCES:
      return articles
        .setIn(['entities', payload.articleId, 'text', 'loading'], false)
        .setIn(['entities', payload.articleId, 'text', 'loaded'], true)
        .setIn(
          ['entities', payload.articleId, 'text', 'entities'],
          responce.text
        )
    case LOAD_ARTICLE_TEXT + FAIL:
      return articles.setIn(
        ['entities', payload.articleId, 'text', 'error'],
        error
      )
    case LOAD_COMMENTS + START:
      return articles.setIn(
        ['entities', payload.articleId, 'commentsLoadingStatus', 'loading'],
        true
      )
    case LOAD_COMMENTS + SUCCES:
      return articles
        .setIn(
          ['entities', payload.articleId, 'commentsLoadingStatus', 'loading'],
          false
        )
        .setIn(
          ['entities', payload.articleId, 'commentsLoadingStatus', 'loaded'],
          true
        )
    case LOAD_COMMENTS + FAIL:
      return articles
        .setIn(
          ['entities', payload.articleId, 'commentsLoadingStatus', 'loading'],
          false
        )
        .setIn(
          ['entities', payload.articleId, 'commentsLoadingStatus', 'loaded'],
          false
        )
    default:
      return articles
  }
}
