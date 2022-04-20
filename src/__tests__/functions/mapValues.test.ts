import f from '../../index'

it('should map values', () => {
  const dict = {
    1: { id: 1, active: true, value: 10 },
    2: { id: 2, active: false, value: 20 },
  }
  expect(f.mapValues(dict, o => o.active)).toEqual({ 1: true, 2: false })
  expect(f.mapValues(dict, o => o.value > 15)).toEqual({ 1: false, 2: true })
  expect(f.mapValues(dict, o => o.value)).toEqual({ 1: 10, 2: 20 })
  expect(f.mapValues(dict, (o, k) => k)).toEqual({ 1: '1', 2: '2' })
  expect(f(dict)(f.mapValues(o => o.id))).toEqual({ 1: 1, 2: 2 })
  expect(f(dict)(f.mapValues((o, k) => k))).toEqual({ 1: '1', 2: '2' })
})
