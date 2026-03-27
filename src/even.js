import gameLoop from './gameLoop.js'
import { getRandomInt } from './utils.js'

const generateRound = () => {
  const number = getRandomInt(1, 100)
  return {
    question: number,
    correctAnswer: number % 2 === 0 ? 'yes' : 'no',
  }
}

const evenOrOdd = () => gameLoop(
  'Answer "yes" if the number is even, otherwise answer "no".',
  generateRound,
)
export default evenOrOdd
