import { INCREASE, DELETE_ARTICLE, SET_DATES, SET_SELECTED } from '../action-types'

export const count = () => ({
  type: INCREASE
})

export const deleteArticle = (id) => ({
  type: DELETE_ARTICLE,
  payload: {
    id
  }
})

export const setDates = (dates) => ({
  type: SET_DATES,
  dates
})

export const setSelected = (selected) => ({
  type: SET_SELECTED,
  selected
})