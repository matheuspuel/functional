import { compare } from '../helpers/compare'

function baseFunction<T>(values: T[], fns: Fn<T>[]): T[] {
  return values.sort((a, b) =>
    fns.reduce((acc, fnObj) => {
      if (acc !== 0) return acc
      if ('desc' in fnObj) {
        const fn = fnObj.desc
        return -1 * compare(fn(a), fn(b))
      } else {
        const fn = typeof fnObj === 'function' ? fnObj : fnObj.asc
        return compare(fn(a), fn(b))
      }
    }, 0),
  )
}

type SimpleFn<T> = (item: T) => unknown
type Fn<T> = SimpleFn<T> | { asc: SimpleFn<T> } | { desc: SimpleFn<T> }

export function sortBy<T>(values: T[], fn: Fn<T>): T[]
export function sortBy<T>(fn: Fn<T>): (values: T[]) => T[]
export function sortBy<T>(values: T[], fns: Fn<T>[]): T[]
export function sortBy<T>(fns: Fn<T>[]): (values: T[]) => T[]
export function sortBy<T>(
  valuesOrFnOrFns: T[] | Fn<T> | Fn<T>[],
  fnOrFns?: Fn<T> | Fn<T>[],
): T[] | ((values: T[]) => T[]) {
  if (!fnOrFns) {
    const actualFnOrFns = valuesOrFnOrFns as Fn<T> | Fn<T>[]
    const fns = Array.isArray(actualFnOrFns) ? actualFnOrFns : [actualFnOrFns]
    return values => baseFunction(values, fns)
  } else {
    const actualValues = valuesOrFnOrFns as T[]
    const fns = Array.isArray(fnOrFns) ? fnOrFns : [fnOrFns]
    return baseFunction(actualValues, fns)
  }
}
