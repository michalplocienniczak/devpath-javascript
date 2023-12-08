const substrings = (string) => {
  const results = []

  for (let i = 0; i < string.length; i++) {
    for (let j = i; j < string.length + 1; j++) {
      const substring = string.slice(i, j)
      substring && results.push(string.slice(i, j))
    }
  }

  return results
}

module.exports = substrings
