const stringFormat = require('./stringFormat')

test("Returns correct string format for 'Hello {0} {1}', 'Mr.', 'X'", () => {
  expect(stringFormat('Hello {0} {1}', 'Mr.', 'X')).toBe('Hello Mr. X')
})

test("Returns correct string format for 'Hello {0} {test} {1}', 'Mr.', 'X'", () => {
  expect(stringFormat('Hello {0} {test} {1}', 'Mr.', 'X')).toBe(
    'Hello Mr. {test} X'
  )
})

test("Returns correct string format for 'Hello {2} {0} {1}', 'Mr.', 'X', 'XYZ'", () => {
  expect(stringFormat('Hello {2} {0} {1}', 'Mr.', 'X', 'XYZ')).toBe(
    'Hello XYZ Mr. X'
  )
})

test("Returns correct string format for 'Hello {2} {0} {1}', 'Mr.', 'X', 'XYZ'", () => {
  expect(stringFormat('Hello {2} {0} {1} {3}', 'Mr.', 'X', 'XYZ')).toBe(
    'Hello XYZ Mr. X {3}'
  )
})
