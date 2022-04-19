import f from '../../index'

it('should find value', () => {
  const list = [
    { id: 1, active: true, value: 10 },
    { id: 2, active: false, value: 20 },
  ]
  expect(f.find(list, o => o.active)).toBe(list[0])
  expect(f.find(list, o => o.value > 15)).toBe(list[1])
  expect(f.find(list, o => o.value > 90)).toBe(undefined)
  expect(f.find(list, o => o.value < 90)).toBe(list[0])
  expect(f(list)(f.find(o => o.active))).toBe(list[0])
})

it('should output the type based on the type guard', () => {
  type Active = { active: true; value: number }
  type Inactive = { active: false }
  const list: (Active | Inactive)[] = [
    { active: true, value: 10 },
    { active: false },
  ]
  const active: Active | undefined = f.find(list, (o): o is Active => o.active)
  const act2: Active | undefined = f(list)(f.find((o): o is Active => o.active))
})
