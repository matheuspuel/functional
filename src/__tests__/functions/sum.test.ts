import f from '../../index'

it('should sum the values', () => {
  expect(f.sum([4, 5, -15])).toEqual(-6)
  expect(f.sum([])).toEqual(0)
})
