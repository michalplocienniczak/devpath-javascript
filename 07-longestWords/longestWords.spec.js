const longestWords = require('./longestWords')

test('Returns correct array of longest words', () => {
  expect(longestWords('You are just an old antidisestablishmentarian')).toEqual(
    ['antidisestablishmentarian']
  )
})

test('Returns correct array of longest words', () => {
  expect(longestWords('I gave a present to my parents')).toEqual([
    'present',
    'parents',
  ])
})

test('Returns correct array of longest words', () => {
  expect(
    longestWords(
      'Buffalo buffalo Buffalo buffalo buffalo buffalo Buffalo buffalo'
    )
  ).toEqual(['buffalo'])
})
