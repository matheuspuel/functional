import f from '../../index'

it('should omit values by keys', () => {
  const dict = {
    1: { id: 1 },
    2: { id: 2 },
  }
  expect(f.omit(dict, [1])).toEqual({ 2: dict[2] })
  expect(f.omit(dict, [2])).toEqual({ 1: dict[1] })
  expect(f.omit(dict, [3])).toEqual(dict)
  expect(f.omit(dict, [])).toEqual(dict)
  expect(f.omit(dict, [1, 2])).toEqual({})
  expect(f.omit(dict, [1, 4, 5])).toEqual({ 2: dict[2] })
  expect(f(dict)(f.omit([1]))).toEqual({ 2: dict[2] })
})
