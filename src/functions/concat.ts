function baseFunction<T, O>(values: T[], others: O[]): (T | O)[] {
  return [...values, ...others]
}

export function concat<T, O>(values: T[], others: O[]): (T | O)[]
export function concat<T, O extends T>(others: O[]): (values: T[]) => T[]
export function concat<T, O>(
  valuesOrOthers: T[] | O[],
  othersOrNull?: O[],
): (T | O)[] | (<T>(values: T[]) => (T | O)[]) {
  if (!othersOrNull) {
    const others = valuesOrOthers as O[]
    return values => baseFunction(values, others)
  } else {
    const values = valuesOrOthers as T[]
    return baseFunction(values, othersOrNull)
  }
}
