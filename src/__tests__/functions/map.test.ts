import f from '../../index'

it('should map values', () => {
  const list = [
    { id: 1, active: true, value: 10 },
    { id: 2, active: false, value: 20 },
  ]
  expect(f.map(list, o => o.active)).toEqual([true, false])
  expect(f.map(list, o => o.value > 15)).toEqual([false, true])
  expect(f.map(list, o => o.value)).toEqual([10, 20])
  expect(f.map(list, (o, i) => i)).toEqual([0, 1])
  expect(f(list)(f.map(o => o.id))).toEqual([1, 2])
  expect(f(list)(f.map((o, i) => i))).toEqual([0, 1])
})
