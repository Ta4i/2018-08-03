import { OrderedMap, Record } from 'immutable'

export const loadingModel = {
  loading: null,
  loaded: null,
  error: null
}

export const loadingWithContentModel = {
  ...loadingModel,
  entities: null
}

export function arrToMap(arr, Record) {
  return arr.reduce(
    (acc, item) => acc.set(item.id, (Record && new Record(item)) || item),
    new OrderedMap({})
  )
}

export function ReducerRecord(model) {
  return Record({
    ...loadingModel,
    entities: arrToMap([], model)
  })
}
