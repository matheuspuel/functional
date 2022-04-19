import f from '../../index'

it('should return the keys', () => {
  expect(f.keys({ 9: null, x: null, 2: null })).toEqual(['2', '9', 'x'])
  expect(f.keys({})).toEqual([])
})
