import f from '../../index'

it('should sort values by single parameter', () => {
  const ten = 10
  const symbol = Symbol('test')
  const list = [
    { v: 1 },
    { v: 4.5 },
    { v: 0 },
    { v: BigInt(3) },
    { v: -15 },
    { v: 1600000000001 },
    { v: new Date(1600000000000) },
    { v: symbol },
    { v: true },
    { v: false },
    { v: 'z' },
    { v: 'a' },
    { v: 'Z' },
    { v: '' },
    { v: null },
    { v: undefined },
    { empty: null },
    { v: ten, id: 2 },
    { v: ten, id: 1 },
  ]
  expect(f.sortBy(list, o => o.v)).toEqual([
    { v: undefined },
    { empty: null },
    { v: null },
    { v: false },
    { v: true },
    { v: -15 },
    { v: 0 },
    { v: 1 },
    { v: BigInt(3) },
    { v: 4.5 },
    { v: ten, id: 2 },
    { v: ten, id: 1 },
    { v: new Date(1600000000000) },
    { v: 1600000000001 },
    { v: '' },
    { v: 'Z' },
    { v: 'a' },
    { v: 'z' },
    { v: symbol },
  ])
  expect(f.sortBy([], o => o)).toEqual([])
  expect(f([5, 4])(f.sortBy(o => o))).toEqual([4, 5])
})

it('should sort values by multiple parameters', () => {
  const list = [
    { id: 2, v: 3 },
    { id: 1, v: 3 },
    { id: 3, v: 1 },
  ]
  const expectedList = [
    { id: 3, v: 1 },
    { id: 1, v: 3 },
    { id: 2, v: 3 },
  ]
  expect(f.sortBy(list, [o => o.v, o => o.id])).toEqual(expectedList)
  expect(f(list)(f.sortBy([o => o.v, o => o.id]))).toEqual(expectedList)
})

it('should sort values in descending order', () => {
  expect(
    f([
      { id: 3, v: 1 },
      { id: 2, v: 3 },
      { id: 1, v: 3 },
    ])(f.sortBy({ desc: o => o.v })),
  ).toEqual([
    { id: 2, v: 3 },
    { id: 1, v: 3 },
    { id: 3, v: 1 },
  ])
  expect(
    f([
      { id: 3, v: 1 },
      { id: 2, v: 3 },
      { id: 1, v: 3 },
    ])(f.sortBy([{ desc: o => o.v }, { asc: o => o.id }])),
  ).toEqual([
    { id: 1, v: 3 },
    { id: 2, v: 3 },
    { id: 3, v: 1 },
  ])
})
