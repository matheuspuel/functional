import f from '../../index'

it('should reduce', () => {
  expect(
    f.reduce([{ v: 4 }, { v: 5 }, { v: -15 }], 0, (t, c) => t + c.v),
  ).toEqual(-6)
  expect(f.reduce([], 5, (t, c) => t + c)).toEqual(5)
  expect(
    f([{ v: 4 }, { v: 5 }, { v: -15 }])(
      f.reduce({ v: 0 }, (t, c) => ({ v: t.v + c.v })),
    ),
  ).toEqual({ v: -6 })
})
