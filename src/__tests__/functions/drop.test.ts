import f from '../../index'

it('should remove the specified number of elements from the start', () => {
  const list = [5, 6, 7]
  expect(f.drop(list, 0)).toEqual([5, 6, 7])
  expect(f.drop(list, 1)).toEqual([6, 7])
  expect(f.drop(list, 2)).toEqual([7])
  expect(f.drop(list, 3)).toEqual([])
  expect(f.drop(list, 4)).toEqual([])
  expect(f.drop([], 4)).toEqual([])
  expect(f.drop(2)(list)).toEqual([7])
})
