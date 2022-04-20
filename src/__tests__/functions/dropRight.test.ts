import f from '../../index'

it('should remove the specified number of elements from the end', () => {
  const list = [5, 6, 7]
  expect(f.dropRight(list, 0)).toEqual([5, 6, 7])
  expect(f.dropRight(list, 1)).toEqual([5, 6])
  expect(f.dropRight(list, 2)).toEqual([5])
  expect(f.dropRight(list, 3)).toEqual([])
  expect(f.dropRight(list, 4)).toEqual([])
  expect(f.dropRight([], 4)).toEqual([])
  expect(f.dropRight(2)(list)).toEqual([5])
  expect(f.dropRight(0)(list)).toEqual([5, 6, 7])
})
