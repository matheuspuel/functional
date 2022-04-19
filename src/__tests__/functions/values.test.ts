import f from '../../index'

it('should return the values', () => {
  expect(f.values({ 9: null, x: 10, 2: 'text' })).toEqual(['text', null, 10])
  expect(f.values({})).toEqual([])
})
