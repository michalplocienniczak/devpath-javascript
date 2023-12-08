const csvParsing = (csv) => {
  // this regex handles two cases:
  // 1. quoted strings
  // 2. numbers (integers and floats as well as negative numbers)
  const quotesRegex = /("[^"]+")|([\d.-]+)/g
  const values = csv.match(quotesRegex)

  results = values.map((value) => {
    //if the value is NaN then it is a string
    return Number(value) || value.replace(/"/g, '')
  })

  return results
}

module.exports = csvParsing
