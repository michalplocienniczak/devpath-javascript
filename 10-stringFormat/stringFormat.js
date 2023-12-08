const stringFormat = (string, ...args) => {
  let result = string
  const regex = /{(\d+)}/g
  //find all {index} elements
  let matches = string.match(regex)

  //turn those matches into Array of indexes
  matches = matches
    .map((match) => Number(match.replace(/{|}/g, '')))
    .filter((match) => !isNaN(match) && match < args.length) //filter out NaNs and numbers that are too large

  matches.forEach((match) => {
    result = result.replace(`{${match}}`, args[match])
  })

  return result
}

module.exports = stringFormat
