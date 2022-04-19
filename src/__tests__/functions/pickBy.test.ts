import f from '../../index'

it('should filter values', () => {
  const dict = {
    1: { id: 1, active: true, value: 10 },
    2: { id: 2, active: false, value: 20 },
  }
  expect(f.pickBy(dict, o => o.active)).toEqual({ 1: dict[1] })
  expect(f.pickBy(dict, o => o.value > 15)).toEqual({ 2: dict[2] })
  expect(f.pickBy(dict, o => o.value > 90)).toEqual({})
  expect(f.pickBy(dict, o => o.value < 90)).toEqual(dict)
  expect(f(dict)(f.pickBy(o => o.active))).toEqual({ 1: dict[1] })
})

it('should output the type based on the type guard', () => {
  type Active = { active: true; value: number }
  type Inactive = { active: false }
  const dict: Record<string, Active | Inactive> = {
    1: { active: true, value: 10 },
    2: { active: false },
  }
  const a: Record<string, Active> = f.pickBy(dict, (o): o is Active => o.active)
  const a2: Record<string, Active> = f(dict)(
    f.pickBy((o): o is Active => o.active),
  )
})
