import f from '../../index'

it('should reverse the array', () => {
  expect(f.reverse([5, 6, 7])).toEqual([7, 6, 5])
  expect(f.reverse([7, 6])).toEqual([6, 7])
  expect(f.reverse([])).toEqual([])
})
