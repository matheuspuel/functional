import f from '../../index'

it('should add two numbers', () => {
  expect(f.add(5, 3)).toBe(8)
  expect(f.add(0.1, 0.2)).toBeCloseTo(0.3)
  expect(f.add(-11, 4)).toBe(-7)
  expect(f.add(0, 0)).toBe(0)
  expect(f.add(7)(8)).toBe(15)
})
