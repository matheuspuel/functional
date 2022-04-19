import f from '../../index'

it('should concat arrays', () => {
  expect(f.concat([5, 9], [3, '8'])).toEqual([5, 9, 3, '8'])
  expect(f.concat([8, 7], [])).toEqual([8, 7])
  expect(f.concat([], [{}])).toEqual([{}])
  expect(f.concat([], [])).toEqual([])
  expect(f.concat([2], [[4]])).toEqual([2, [4]])
  expect(f.concat([2, 4, '5'])([1])).toEqual([1, 2, 4, '5'])
})

it('should allow only values of the same type of the piped value', () => {
  const list = [1, '9']
  expect(f(list)(f.concat([8]))).toEqual([1, '9', 8])
  expect(f(list)(f.concat([]))).toEqual([1, '9'])
  // @ts-expect-error
  f(list)(f.concat([true]))
  // @ts-expect-error
  f(list)(f.concat([undefined]))
})
