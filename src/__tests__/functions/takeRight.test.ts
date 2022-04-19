import f from '../../index'

it('should take the specified number of elements from the end', () => {
  const list = [5, 6, 7]
  expect(f.takeRight(list, 0)).toEqual([])
  expect(f.takeRight(list, 1)).toEqual([7])
  expect(f.takeRight(list, 2)).toEqual([6, 7])
  expect(f.takeRight(list, 3)).toEqual([5, 6, 7])
  expect(f.takeRight(list, 4)).toEqual([5, 6, 7])
  expect(f.takeRight([], 4)).toEqual([])
  expect(f.takeRight(2)(list)).toEqual([6, 7])
})
