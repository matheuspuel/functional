import f from '../../index'

it('should return the lowest value', () => {
  expect(f.min([4, 5, -15])).toEqual(-15)
  expect(f.min([])).toEqual(undefined)
  expect(f.min([4, true, 'text'])).toEqual(true)
  expect(f.min([4, null, false])).toEqual(null)
  expect(f.min([4, null, undefined])).toEqual(undefined)
})
