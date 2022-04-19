import f from '../../index'

it('should return the highest value', () => {
  expect(f.max([4, 5, -15])).toEqual(5)
  expect(f.max([])).toEqual(undefined)
  expect(f.max([4, true, 'text'])).toEqual('text')
  expect(f.max([null, false])).toEqual(false)
  expect(f.max([null, undefined])).toEqual(null)
})
