import { INCREASE, DELETE_ARTICLE, CHANGE_FILTER_DATE } from '../action-types'

export const count = () => ({
  type: INCREASE
})

export const deleteArticle = (id) => ({
  type: DELETE_ARTICLE,
  payload: {
    id
  }
})

export const changeDateRange = (dates) => ({
  type: CHANGE_FILTER_DATE,
  payload: {
    new_date: dates
  }
})
