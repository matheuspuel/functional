type Fn<T, R> = (item: T, index: number) => R

export function map<T, R>(values: T[], fn: Fn<T, R>): R[]
export function map<T, R>(fn: Fn<T, R>): (values: T[]) => R[]
export function map<T, R>(
  valuesOrFn: T[] | Fn<T, R>,
  fn?: Fn<T, R>,
): R[] | ((values: T[]) => R[]) {
  if (!fn) {
    return values => values.map(valuesOrFn as Fn<T, R>)
  } else {
    return (valuesOrFn as T[]).map(fn)
  }
}
