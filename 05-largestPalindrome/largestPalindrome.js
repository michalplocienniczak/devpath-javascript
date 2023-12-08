const isPalindrome = (string) => {
  const reversed = string.split('').reverse().join('')
  return string === reversed
}

const largestPalindrome = (string) => {
  let largest = ''
  for (let i = 0; i < string.length; i++) {
    for (let j = i + 1; j < string.length + 1; j++) {
      const substring = string.slice(i, j)
      if (isPalindrome(substring) && substring.length > largest.length) {
        largest = substring
      }
    }
  }
  return largest
}

module.exports = largestPalindrome
