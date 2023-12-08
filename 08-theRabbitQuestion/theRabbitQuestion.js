const theRabbitQuestion = (numberOfSteps) => {
  if (numberOfSteps <= 0) {
    return 0
  }

  // Initialize an array to store the number of combinations for each step
  const steps = Array(numberOfSteps + 1).fill(0)

  // Base cases
  steps[0] = 1
  steps[1] = 1

  // Calculate the number of combinations for each step
  for (let i = 2; i <= numberOfSteps; i++) {
    steps[i] = steps[i - 1] + steps[i - 2]
  }

  return steps[numberOfSteps]
}

module.exports = theRabbitQuestion
