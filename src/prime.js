import readlineSync from 'readline-sync';
import getName from './cli.js';
import { getRandomInt } from './even.js';

export default function primeGuess(){
const name = getName();
let correctCount=0;
console.log('Answer "yes" if given number is prime. Otherwise answer "no".');

    while(correctCount < 3){
    const number= getRandomInt(1,100);
    const correctAnswer= primeOrNot(number);
    console.log(`Question: ${number}`);
    
    let answer = readlineSync.question('Your answer: ').toLowerCase();

    while (answer !== 'yes' && answer !== 'no') {
     console.log('Please answer "yes" or "no".');
    answer = readlineSync.question('Your answer: ').toLowerCase();
}
        if (answer === correctAnswer){
            console.log(`Your answer: "${answer}"`)
            console.log("Correct!");
            correctCount+=1;
        }else{
            console.log(`Your answer: "${answer}"`);
              console.log(`'${answer}' is wrong answer ;(. Correct answer was '${correctAnswer}'.`);
               console.log( `Let's try again, ${name}!`);
               correctCount = 0;
        }
    }
    console.log(`Congratulations, ${name}`);
};

export  function primeOrNot (number){
    if (number <=1){
        return 'no';
}
for(let i =2; i<=Math.sqrt(number);i++)
{
    if(number % i ===0){
     return 'no';
}
}
    return 'yes';
};