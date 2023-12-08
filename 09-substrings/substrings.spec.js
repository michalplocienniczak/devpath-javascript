const substrings = require('./substrings')

test("Returns correct array of substrings for 'abc'", () => {
  expect(substrings('abc')).toEqual(['a', 'ab', 'abc', 'b', 'bc', 'c'])
})

test("Returns correct array of substrings for 'abcdefg'", () => {
  expect(substrings('abcdefg')).toEqual([
    'a',
    'ab',
    'abc',
    'abcd',
    'abcde',
    'abcdef',
    'abcdefg',
    'b',
    'bc',
    'bcd',
    'bcde',
    'bcdef',
    'bcdefg',
    'c',
    'cd',
    'cde',
    'cdef',
    'cdefg',
    'd',
    'de',
    'def',
    'defg',
    'e',
    'ef',
    'efg',
    'f',
    'fg',
    'g',
  ])
})

test('Returns correct array of substrings for empty string', () => {
  expect(substrings('')).toEqual([])
})

test("Returns correct array of substrings for 'hello'", () => {
  expect(substrings('hello')).toEqual([
    'h',
    'he',
    'hel',
    'hell',
    'hello',
    'e',
    'el',
    'ell',
    'ello',
    'l',
    'll',
    'llo',
    'l',
    'lo',
    'o',
  ])
})
