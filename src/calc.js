import gameLoop from './gameLoop.js'
import { getRandomInt } from './utils.js'

const generateOperator = () => {
  const operators = ['+', '-', '*']
  return operators[getRandomInt(0, 2)]
}

const calcAnswer = (num1, operator, num2) => {
  switch (operator) {
    case '+': return num1 + num2
    case '-': return num1 - num2
    case '*': return num1 * num2
  }
}

const generateRound = () => {
  const num1 = getRandomInt(0, 100)
  const num2 = getRandomInt(0, 100)
  const operator = generateOperator()
  return {
    question: `${num1} ${operator} ${num2}`,
    correctAnswer: calcAnswer(num1, operator, num2),
  }
}

const calculate = () => gameLoop(
  'What is the result of the expression?',
  generateRound,
)

export default calculate
