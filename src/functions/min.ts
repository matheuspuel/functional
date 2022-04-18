import { compare } from '../helpers/compare'

export function min<T>(values: T[]) {
  return values.reduce((a, b) => {
    if (a === undefined) return b
    return compare(a, b) === 1 ? b : a
  }, undefined as T | undefined)
}
