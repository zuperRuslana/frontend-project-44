import readlineSync from 'readline-sync';
import getName from './cli.js';

function getRandomInt(min, max) {
  return Math.floor(Math.random() * (max - min + 1)) + min;
}

const evenCheck = (number) => number % 2 === 0;

export default () => {
   const name = getName();
console.log('Answer "yes" if the number is even, otherwise answer "no".');  
let correctAnswer = 0;

  for (let i = 0; i < 3; i += 1) {
    const number = getRandomInt(1, 100);
    console.log(`Question: ${number}`);
    const answer = readlineSync.question('Your answer: ');
    const realAnswer = evenCheck(number) ? 'yes' : 'no';

    if (realAnswer === answer) {
      console.log('Correct!');
      correctAnswer += 1;
    } else {
      console.log(`'${answer}' is wrong answer ;(. Correct answer was '${realAnswer}'.`);
      console.log(`Let's try again, ${name}!`);
      return;
    }
  }

  if (correctAnswer === 3) {
    console.log(`Congratulations, ${name}!`);
  }
};

