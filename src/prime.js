import gameLoop from './gameLoop.js'
import { getRandomInt } from './utils.js'

export const primeOrNot = (number) => {
  if (number <= 1) {
    return 'no'
  }
  for (let i = 2; i <= Math.sqrt(number); i++) {
    if (number % i === 0) {
      return 'no'
    }
  }
  return 'yes'
}

const generateRound = () => {
  const number = getRandomInt(1, 100)
  return {
    question: number,
    correctAnswer: primeOrNot(number),
  }
}

const primeGuess = () => gameLoop(
  'Answer "yes" if given number is prime. Otherwise answer "no".',
  generateRound,
  answer => answer.toLowerCase() === 'yes' || answer.toLowerCase() === 'no',
)

export default primeGuess
