import f from '../../index'

it('should return the highest value', () => {
  expect(f.maxBy([{ v: 4 }, { v: 5 }, { v: -15 }], o => o.v)).toEqual({ v: 5 })
  expect(f.maxBy([], o => o)).toEqual(undefined)
  expect(f([{ v: 5 }, { v: -15 }])(f.maxBy(o => o.v))).toEqual({ v: 5 })
})
