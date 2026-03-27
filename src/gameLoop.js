import readlineSync from 'readline-sync'
import getName from './cli.js'

const gameLoop = (description, generateRound, validate = null) => {
  const name = getName()
  console.log(description)

  let correctCount = 0
  while (correctCount < 3) {
    const { question, correctAnswer } = generateRound()
    console.log(`Question: ${question}`)

    let answer = readlineSync.question('Your answer: ').toLowerCase()

    if (validate) {
      while (!validate(answer)) {
        console.log('Please answer "yes" or "no".')
        answer = readlineSync.question('Your answer: ').toLowerCase()
      }
    }

    if (String(answer) === String(correctAnswer)) {
      console.log('Correct!')
      correctCount += 1
    }
    else {
      console.log(`'${answer}' is wrong answer ;(. Correct answer was '${correctAnswer}'.`)
      console.log(`Let's try again, ${name}!`)
      return
    }
  }
  console.log(`Congratulations, ${name}!`)
}

export default gameLoop
