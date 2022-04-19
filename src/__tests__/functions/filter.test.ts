import f from '../../index'

it('should filter values', () => {
  const list = [
    { id: 1, active: true, value: 10 },
    { id: 2, active: false, value: 20 },
  ]
  expect(f.filter(list, o => o.active)).toEqual([list[0]])
  expect(f.filter(list, o => o.value > 15)).toEqual([list[1]])
  expect(f.filter(list, o => o.value > 90)).toEqual([])
  expect(f.filter(list, o => o.value < 90)).toEqual(list)
  expect(f(list)(f.filter(o => o.active))).toEqual([list[0]])
})

it('should output the type based on the type guard', () => {
  type Active = { active: true; value: number }
  type Inactive = { active: false }
  const list: (Active | Inactive)[] = [
    { active: true, value: 10 },
    { active: false },
  ]
  const activeList: Active[] = f.filter(list, (o): o is Active => o.active)
  const activeList2: Active[] = f(list)(f.filter((o): o is Active => o.active))
})
