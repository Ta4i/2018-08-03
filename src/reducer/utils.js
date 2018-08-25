import { OrderedMap, Map, Record } from 'immutable'

export const loadingModel = {
  loading: null,
  loaded: null,
  error: null,
  entities: null
}

export function arrToOrderedMap(arr, Record) {
  return arr.reduce(
    (acc, item) => acc.set(item.id, (Record && new Record(item)) || item),
    new OrderedMap({})
  )
}

export function arrToMap(arr, Record) {
  return arr.reduce(
    (acc, item) => acc.set(item.id, (Record && new Record(item)) || item),
    new Map({})
  )
}

export function ReducerRecord(model) {
  return Record({
    ...loadingModel,
    entities: arrToOrderedMap([], model)
  })
}
