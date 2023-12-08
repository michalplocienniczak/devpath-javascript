const largestContinuousSum = require('./largestContinuousSum')

test("Returns correct largest continuous sum for '[1, 2, -1, 3, 4, -1]'", () => {
  expect(largestContinuousSum([1, 2, -1, 3, 4, -1])).toBe(9)
})

test("Returns correct largest continuous sum for '[1, 2, -1, 3, 4, 10, 10, -10, -1]'", () => {
  expect(largestContinuousSum([1, 2, -1, 3, 4, 10, 10, -10, -1])).toBe(29)
})

test("Returns correct largest continuous sum for '[-1, 1]'", () => {
  expect(largestContinuousSum([-1, 1])).toBe(1)
})

test("Returns correct largest continuous sum for '[]'", () => {
  expect(largestContinuousSum([])).toBe(null)
})
