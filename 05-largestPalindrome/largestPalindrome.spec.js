const largestPalindrome = require('./largestPalindrome')

test("Returns correct largest palindrome for 'abracadabra'", () => {
  expect(largestPalindrome('abracadabra')).toBe('aca')
})

test("Returns correct largest palindrome for 'HYTBCABADEFGHABCDEDCBAGHTFYW12345678987654321ZWETYGDE'", () => {
  expect(
    largestPalindrome('HYTBCABADEFGHABCDEDCBAGHTFYW12345678987654321ZWETYGDE')
  ).toBe('12345678987654321')
})

test("Returns correct largest palindrome for 'I am a red racecar driver'", () => {
  expect(largestPalindrome('I am a red racecar driver')).toBe('d racecar d')
})
