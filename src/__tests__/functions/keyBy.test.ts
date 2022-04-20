import f from '../../index'

it('should make dictionary indexed by the provided key', () => {
  const list = [
    { id: 1, active: true, value: 10 },
    { id: 2, active: false, value: 10 },
  ]
  expect(f.keyBy(list, o => o.id)).toEqual({ 1: list[0], 2: list[1] })
  expect(f.keyBy(list, o => o.value)).toEqual({ 10: list[1] })
  expect(f.keyBy(list, o => o.active + '')).toEqual({
    true: list[0],
    false: list[1],
  })
  expect(f(list)(f.keyBy(o => o.id))).toEqual({ 1: list[0], 2: list[1] })
})
