const flattenArray = require('./flattenArray')

test('Returns flattened array', () => {
  expect(flattenArray([1, 2, [3, 4, [5, 6, [7, 8, [9, 10]]]]])).toEqual([
    1, 2, 3, 4, 5, 6, 7, 8, 9, 10,
  ])
})

test('Returns flattened array', () => {
  expect(
    flattenArray([1, 2, 3, [4, 5], [6, 7, 8], 9, [10, 11, [12, 13]]])
  ).toEqual([1, 2, 3, 4, 5, 6, 7, 8, 9, 10, 11, 12, 13])
})

test('Returns null if argument is not an array', () => {
  expect(flattenArray('string')).toEqual(null)
})

test('Returns null if argument is not an array', () => {
  expect(flattenArray(24)).toEqual(null)
})
