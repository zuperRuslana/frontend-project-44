import gameLoop from './gameLoop.js'
import { getRandomInt } from './utils.js'

export const sequence = () => {
  const start = getRandomInt(0, 100)
  const step = getRandomInt(1, 5)
  const length = 10
  const array = []

  for (let i = 0; i < length; i++) {
    array[i] = start + i * step
  }
  const hiddenIndex = getRandomInt(0, 9)
  const correctAnswer = array[hiddenIndex]
  array[hiddenIndex] = '..'

  return {
    array: array.join(' '),
    correctAnswer,
  }
}

const generateRound = () => {
  const { array, correctAnswer } = sequence()
  return {
    question: array,
    correctAnswer,
  }
}

const progression = () => gameLoop(
  'What number is missing in the progression?',
  generateRound,
)

export default progression
