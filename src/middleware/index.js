import { CREATE_COMMENT } from '../action-types'

export const logger = (store) => (next) => (action) => {
  console.log('before', store.getState())
  console.log('dispatch', action)
  next(action)
  console.log('after', store.getState())
}

// генератор id любой длинны
const makeId = (length) => {
  let result = ''
  let possible =
    'ABCDEFGHIJKLMNOPQRSTUVWXYZabcdefghijklmnopqrstuvwxyz0123456789'
  for (let i = 0; i < length; i++) {
    result += possible.charAt(Math.floor(Math.random() * possible.length))
  }
  return result
}

// созаем рандомный id пока не попадется такой, которого нет. вероятность даже 2х вызовов близка к 0
const genedateId = (targetObject, length) => {
  let id
  while (true) {
    id = makeId(length)
    if (!targetObject[id]) {
      return id
    }
  }
}

// можно было сделать без произвольной длинны и проверок так: Math.random().toString(36).slice(2)
export const createComment = (store) => (next) => (action) => {
  if (action.type === CREATE_COMMENT) {
    console.log('before id generation', store.getState())
    console.log('dispatch id generation', action)

    const actionWithId = {
      ...action,
      id: genedateId(store.getState().comments, 10),
      username: store.getState().username
    }
    next(actionWithId)
    console.log('after id generation', store.getState())
    return
  }

  return
}
