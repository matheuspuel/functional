function baseFunction<T>(values: T[], others: T[]): T[] {
  return [...values, ...others]
}

export function concat<T>(values: T[], others: T[]): T[]
export function concat<T>(others: T[]): (values: T[]) => T[]
export function concat<T>(
  valuesOrOthers: T[],
  othersOrNull?: T[],
): T[] | ((values: T[]) => T[]) {
  if (!othersOrNull) {
    const others = valuesOrOthers as Extract<typeof valuesOrOthers, unknown>
    return values => baseFunction(values, others)
  } else {
    const values = valuesOrOthers as Exclude<typeof valuesOrOthers, never>
    return baseFunction(values, othersOrNull)
  }
}
