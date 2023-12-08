const cashUnits = (price) => {
  const cash = [
    500.0, 200.0, 100.0, 50.0, 20.0, 10.0, 5.0, 2.0, 1.0, 0.5, 0.2, 0.1, 0.05,
    0.02, 0.01,
  ]
  const result = {}
  let rest = price

  cash.forEach((unit) => {
    let count = 0

    // for as long as the rest is greater than the current unit
    // we are going to subtract the unit from the rest
    while (rest >= unit) {
      rest = Number((rest - unit).toFixed(2))
      count++
    }
    if (count) {
      result[unit] = count
    }
  })

  return result
}

module.exports = cashUnits
