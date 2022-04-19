import f from '../../index'

it('should pick values by keys', () => {
  const dict = {
    1: { id: 1 },
    2: { id: 2 },
  }
  expect(f.pick(dict, [1])).toEqual({ 1: dict[1] })
  expect(f.pick(dict, [2])).toEqual({ 2: dict[2] })
  expect(f.pick(dict, [3])).toEqual({})
  expect(f.pick(dict, [])).toEqual({})
  expect(f.pick(dict, [1, 2])).toEqual(dict)
  expect(f.pick(dict, [1, 4, 5])).toEqual({ 1: dict[1] })
  expect(f(dict)(f.pick([1]))).toEqual({ 1: dict[1] })
})
