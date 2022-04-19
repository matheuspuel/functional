export function drop<T>(values: T[], quantity: number): T[]
export function drop<T>(quantity: number): (values: T[]) => T[]
export function drop<T>(
  valuesOrQuantity: T[] | number,
  quantity?: number,
): T[] | ((values: T[]) => T[]) {
  if (quantity === undefined) {
    return values => values.slice(valuesOrQuantity as number)
  } else {
    return (valuesOrQuantity as T[]).slice(quantity)
  }
}
