const flattenArray = (arr) => {
  if (!Array.isArray(arr)) {
    return null
  }

  return arr.reduce(
    (acc, val) =>
      Array.isArray(val) ? acc.concat(flattenArray(val)) : acc.concat(val),
    []
  )
}

module.exports = flattenArray
