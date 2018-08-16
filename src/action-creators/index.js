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

export const changeDateRange = (new_date) => {
  const result = {
    type: CHANGE_FILTER_DATE,
    payload: {
      new_date: new_date
    }
  }
  console.dir(result)
  return result
}
