import f from '../../index'

it('should return the same value', () => {
  expect(f.identity(5)).toEqual(5)
  expect(f.identity(undefined)).toEqual(undefined)
  expect(f.identity({})).toEqual({})
  expect(f.map([5, 6], f.identity)).toEqual([5, 6])
})
