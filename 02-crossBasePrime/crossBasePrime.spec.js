const crossBasePrime = require('./crossbaseprime')

test('Returns true for prime numbers in base 2', () => {
  expect(crossBasePrime(101, 2)).toBe(true)
})

test('Returns false for non-prime numbers in base 2', () => {
  expect(crossBasePrime(110, 2)).toBe(false)
})

test('Returns true for prime numbers in base 8', () => {
  expect(crossBasePrime(13, 8)).toBe(true)
})

test('Returns false for non-prime numbers in base 8', () => {
  expect(crossBasePrime(16, 8)).toBe(false)
})

test('Returns true for prime numbers in base 16', () => {
  expect(crossBasePrime(256, 16)).toBe(false)
})

test('Returns false for non-prime numbers in base 16', () => {
  expect(crossBasePrime(489, 16)).toBe(false)
})

test('Returns false for non-prime numbers in base 10', () => {
  expect(crossBasePrime(513, 10)).toBe(false)
})

test('Returns false for non-prime numbers in base 5', () => {
  expect(crossBasePrime(12, 5)).toBe(false)
})

test('Returns true for prime numbers in base 3', () => {
  expect(crossBasePrime(10, 3)).toBe(false)
})

test('Returns false for non-prime numbers in base 11', () => {
  expect(crossBasePrime(67, 11)).toBe(true)
})
