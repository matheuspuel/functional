function baseFunction<T, R>(values: T[], initial: R, fn: Fn<T, R>): R {
  return values.reduce(fn, initial)
}

type Fn<T, R> = (accumulated: R, current: T) => R

export function reduce<T, R>(values: T[], initial: R, fn: Fn<T, R>): R
export function reduce<T, R>(initial: R, fn: Fn<T, R>): (values: T[]) => R
export function reduce<T, R>(
  valuesOrInitial: T[] | R,
  initialOrFn: R | Fn<T, R>,
  fnOrNull?: Fn<T, R>,
): R | ((values: T[]) => R) {
  if (!fnOrNull) {
    const initial = valuesOrInitial as R
    const fn = initialOrFn as Fn<T, R>
    return values => baseFunction(values, initial, fn)
  } else {
    const values = valuesOrInitial as T[]
    const initial = initialOrFn as R
    const fn = fnOrNull
    return baseFunction(values, initial, fn)
  }
}
