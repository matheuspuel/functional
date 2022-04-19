import f from '../../index'

it('should take the specified number of elements from the start', () => {
  const list = [5, 6, 7]
  expect(f.take(list, 0)).toEqual([])
  expect(f.take(list, 1)).toEqual([5])
  expect(f.take(list, 2)).toEqual([5, 6])
  expect(f.take(list, 3)).toEqual([5, 6, 7])
  expect(f.take(list, 4)).toEqual([5, 6, 7])
  expect(f.take([], 4)).toEqual([])
  expect(f.take(2)(list)).toEqual([5, 6])
})
