import readlineSync from 'readline-sync';
import getName from './cli.js';
import { getRandomInt } from './even.js';

function biggestDevisor(){
    const name = getName();
    console.log("Find the greatest common divisor of given numbers.");
    
    let correctCount=0;
    while(correctCount < 3){

    let num1= getRandomInt(1,100);
    let num2= getRandomInt(1,100);

    console.log(`Question: ${num1} ${num2}`);

    let biggestNum = Math.max(num1, num2);
    let smallerNum = Math.min(num1, num2);
    let remainder = biggestNum % smallerNum;
    
    while(remainder !==0){
        biggestNum = smallerNum;
        smallerNum = remainder;
        remainder= biggestNum % smallerNum;
    }
    const correctAnswer = smallerNum;
    let answer = Number(readlineSync.question('Your answer: '));
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
console.log(`Congratulations, ${name}!`);
    
};
export default biggestDevisor;
