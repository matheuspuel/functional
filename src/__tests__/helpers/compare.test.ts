import { compare } from '../../helpers/compare'

it('should return -1 if a is lower, 1 if a is higher and 0 otherwise', () => {
  expect(compare(Symbol('test'), '1')).toBe(1)
  expect(compare('2', '1')).toBe(1)
  expect(compare(new String('1'), new String('1'))).toBe(0)
  expect(compare(new Boolean(true), new Boolean(true))).toBe(0)
  expect(compare(true, false)).toBe(1)
  expect(compare(1, BigInt(1))).toBe(0)
  expect(compare(Symbol('test'), Symbol('test2'))).toBe(0)
})
