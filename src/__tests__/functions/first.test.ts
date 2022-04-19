import f from '../../index'

it('should take the first element', () => {
  expect(f.first([5, 6, 7])).toEqual(5)
  expect(f.first([])).toEqual(undefined)
})
