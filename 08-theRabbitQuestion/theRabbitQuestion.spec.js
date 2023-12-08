const theRabbitQuestion = require('./theRabbitQuestion')

test('Returns correct number of combinations for 1 step', () => {
  expect(theRabbitQuestion(1)).toBe(1)
})

test('Returns correct number of combinations for 2 steps', () => {
  expect(theRabbitQuestion(2)).toBe(2)
})

test('Returns correct number of combinations for 3 steps', () => {
  expect(theRabbitQuestion(3)).toBe(3)
})

test('Returns correct number of combinations for 4 steps', () => {
  expect(theRabbitQuestion(4)).toBe(5)
})

test('Returns correct number of combinations for 5 steps', () => {
  expect(theRabbitQuestion(5)).toBe(8)
})

test('Returns correct number of combinations for 6 steps', () => {
  expect(theRabbitQuestion(6)).toBe(13)
})
