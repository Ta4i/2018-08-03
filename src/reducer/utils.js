import { OrderedMap, Record } from 'immutable'
import { START, SUCCES, FAIL } from '../action-types'

export function arrToMap(arr, Record) {
  return arr.reduce(
    (acc, item) => acc.set(item.id, (Record && new Record(item)) || item),
    new OrderedMap({})
  )
}

export function ReducerRecord(model) {
  return Record({
    entities: arrToMap([], model),
    loading: false,
    loaded: false,
    error: null
  })
}

export function createReducerRecord(model, status, data) {
  const ModelRecord = ReducerRecord(model)
  const record = new ModelRecord()

  if (!status) {
    return record
  }

  switch (status) {
    case SUCCES:
      return record
        .set('loading', false)
        .set('loaded', true)
        .set('entities', new model(data))
    case FAIL:
      return record.set('loading', false).set('loaded', false)
    case START:
      return record.set('loading', true).set('loaded', false)
    default:
      return record
  }
}

export function updateReducerRecord(record, status, model, data) {
  if (!status) {
    return record
  }

  switch (status) {
    case SUCCES:
      return record
        .set('loading', false)
        .set('loaded', true)
        .set('entities', new model(data))
    case FAIL:
      return record.set('loading', false).set('loaded', false)
    case START:
      return record.set('loading', true).set('loaded', false)
    default:
      return record
  }
}
