import f from '../../index'

it('should return the length of the array or object properties', () => {
  expect(f.size([4, 5, -15])).toEqual(3)
  expect(f.size([])).toEqual(0)
  expect(f.size({ 1: null, 9: null })).toEqual(2)
  expect(f.size({})).toEqual(0)
})
