import f from '../../index'

it('should take the last element', () => {
  expect(f.last([5, 6, 7])).toEqual(7)
  expect(f.last([])).toEqual(undefined)
})
