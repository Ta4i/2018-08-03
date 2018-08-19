import { CHANGE_USERNAME } from '../action-types'

export default (username = '', action) => {
  console.log('2')
  const { type, payload } = action
  switch (type) {
    case CHANGE_USERNAME:
      return payload.username
    default:
      return username
  }
}
