export function add(value1: number): (value: number) => number
export function add(value1: number, value2: number): number
export function add(
  value1: number,
  value2?: number,
): number | ((value: number) => number) {
  if (value2 === undefined) {
    return value => value1 + value
  }
  return value1 + value2
}
