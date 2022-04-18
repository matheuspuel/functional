export function take<T>(values: T[], quantity: number): T[]
export function take<T>(quantity: number): (values: T[]) => T[]
export function take<T>(
  valuesOrQuantity: T[] | number,
  quantity?: number,
): T[] | ((values: T[]) => T[]) {
  if (quantity === undefined) {
    return values => values.slice(0, valuesOrQuantity as number)
  } else {
    return (valuesOrQuantity as T[]).slice(0, quantity)
  }
}
