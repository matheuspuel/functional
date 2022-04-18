import { compare } from '../helpers/compare'

export function max<T>(values: T[]) {
  return values.reduce((a, b) => {
    if (a === undefined) return b
    return compare(a, b) === -1 ? b : a
  }, undefined as T | undefined)
}
