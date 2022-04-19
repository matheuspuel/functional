export function takeRight<T>(values: T[], quantity: number): T[]
export function takeRight<T>(quantity: number): (values: T[]) => T[]
export function takeRight<T>(
  valuesOrQuantity: T[] | number,
  quantity?: number,
): T[] | ((values: T[]) => T[]) {
  if (quantity === undefined) {
    const quantity = valuesOrQuantity as number
    return values => (quantity ? values.slice(-quantity as number) : [])
  } else {
    return quantity ? (valuesOrQuantity as T[]).slice(-quantity) : []
  }
}
