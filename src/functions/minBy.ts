import { compare } from '../helpers/compare'

function baseFunction<T>(values: T[], fn: Fn<T>): T | undefined {
  return values.reduce((aObj, bObj) => {
    if (aObj === undefined) return bObj
    const a = fn(aObj)
    const b = fn(bObj)
    return compare(a, b) === 1 ? bObj : aObj
  }, undefined as T | undefined)
}

type Fn<T> = (item: T) => unknown

export function minBy<T>(values: T[], fn: Fn<T>): T
export function minBy<T>(fn: Fn<T>): (values: T[]) => T
export function minBy<T>(
  valuesOrFn: T[] | Fn<T>,
  fnOrNull?: Fn<T>,
): T | undefined | ((values: T[]) => T | undefined) {
  if (!fnOrNull) {
    const fn = valuesOrFn as Extract<typeof valuesOrFn, Function>
    return values => baseFunction(values, fn)
  } else {
    const values = valuesOrFn as Exclude<typeof valuesOrFn, Function>
    const fn = fnOrNull
    return baseFunction(values, fn)
  }
}
