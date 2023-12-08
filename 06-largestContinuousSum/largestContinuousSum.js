const largestContinuousSum = (arr) => {
  if (arr.length === 0) return null

  let maxSum = arr[0]
  let currentSum = arr[0]

  for (const number of arr.slice(1)) {
    currentSum = Math.max(currentSum + number, number)
    maxSum = Math.max(currentSum, maxSum)
  }

  return maxSum
}

module.exports = largestContinuousSum
