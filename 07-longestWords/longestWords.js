const longestWords = (sentence) => {
  const words = sentence.split(' ')

  let longestWords = []
  let longestLength = 0

  words.forEach((word) => {
    const wordLowerCase = word.toLowerCase()
    const wordLength = wordLowerCase.length

    if (wordLength > longestLength) {
      longestWords = [wordLowerCase]
      longestLength = wordLength
    } else if (
      wordLength === longestLength &&
      !longestWords.includes(wordLowerCase)
    ) {
      longestWords.push(wordLowerCase)
    }
  })

  return longestWords
}

module.exports = longestWords
