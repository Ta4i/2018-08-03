import { CREATE_COMMENT } from '../action-types'

export const logger = (store) => (next) => (action) => {
  console.log('before', store.getState())
  console.log('dispatch', action)
  next(action)
  console.log('after', store.getState())
}

// const makeId = count => {
//   let result = ""
//   let possible = "ABCDEFGHIJKLMNOPQRSTUVWXYZabcdefghijklmnopqrstuvwxyz0123456789"
//   for (let i = 0; i < count; i++) {
//     result += possible.charAt(Math.floor(Math.random() * possible.length))
//   }
//   return result;
// }

export const generateId = (store) => (next) => (action) => {
  if (action.type === CREATE_COMMENT) {
    console.log('before id generation', store.getState())
    console.log('dispatch id generation', action)

    const actionWithId = {
      ...action,
      id: Math.random()
        .toString(36)
        .slice(2)
    }
    next(actionWithId)
    console.log('after id generation', store.getState())
    return
  }

  return
}
