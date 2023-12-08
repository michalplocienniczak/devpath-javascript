const isPrime = (num) => {
  //we are only checking for numbers greater than 1
  if (num <= 1) return false
  //2 is the only even prime number
  if (num === 2) return true

  //we only need to check up to the square root of the number
  const limit = Math.sqrt(num)

  //we check numbers from 2 to the limit
  for (let i = 2; i < limit; i++) {
    if (num % i === 0) {
      return false
    }
  }

  return true
}

const crossBasePrime = (n, newBase) => {
  const convertedNum = parseInt(n, newBase)
  if (isPrime(n) && isPrime(convertedNum)) return true
  return false
}

module.exports = crossBasePrime
