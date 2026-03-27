import gameLoop from './gameLoop.js'
import { getRandomInt } from './utils.js'

const calcGcd = (num1, num2) => {
  let biggestNum = Math.max(num1, num2)
  let smallerNum = Math.min(num1, num2)
  let remainder = biggestNum % smallerNum

  while (remainder !== 0) {
    biggestNum = smallerNum
    smallerNum = remainder
    remainder = biggestNum % smallerNum
  }
  return smallerNum
}

const generateRound = () => {
  const num1 = getRandomInt(1, 100)
  const num2 = getRandomInt(1, 100)
  return {
    question: `${num1} ${num2}`,
    correctAnswer: calcGcd(num1, num2),
  }
}

const biggestDevisor = () => gameLoop(
  'Find the greatest common divisor of given numbers.',
  generateRound,
)

export default biggestDevisor
