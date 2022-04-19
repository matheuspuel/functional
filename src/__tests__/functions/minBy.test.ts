import f from '../../index'

it('should return the lowest value', () => {
  expect(f.minBy([{ v: 4 }, { v: 5 }, { v: -1 }], o => o.v)).toEqual({ v: -1 })
  expect(f.minBy([], o => o)).toEqual(undefined)
  expect(f([{ v: 5 }, { v: -15 }])(f.minBy(o => o.v))).toEqual({ v: -15 })
})
