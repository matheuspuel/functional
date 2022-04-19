export function dropRight<T>(values: T[], quantity: number): T[]
export function dropRight<T>(quantity: number): (values: T[]) => T[]
export function dropRight<T>(
  valuesOrQuantity: T[] | number,
  quantity?: number,
): T[] | ((values: T[]) => T[]) {
  if (quantity === undefined) {
    const quantity = valuesOrQuantity as number
    return values => values.slice(0, quantity ? -quantity : undefined)
  } else {
    return (valuesOrQuantity as T[]).slice(0, quantity ? -quantity : undefined)
  }
}
