/**
 * Adds two numbers.
 *
 * @param value1 The first number to add.
 * @param value2 The second number to add.
 * @return Returns the sum.
 */
export function add(value1: number, value2: number): number
/**
 * (Curried function)
 * Adds two numbers.
 *
 * @param value1 The first number to add.
 * @return A function that takes the second number to add and then returns the sum.
 */
export function add(value1: number): //
/**
 * (Curried function)
 * Adds two numbers.
 *
 * @param value The second number to add.
 * @return Returns the sum.
 */
(value: number) => number
export function add(
  value1: number,
  value2?: number,
): number | ((value: number) => number) {
  if (value2 === undefined) {
    return value => value1 + value
  }
  return value1 + value2
}
