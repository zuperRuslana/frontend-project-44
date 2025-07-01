import readlineSync from 'readline-sync';
import getName from './cli.js';
import { getRandomInt } from './even.js';



export function sequence(){
    let start= getRandomInt(0,100);
    let step=getRandomInt(1,5);
    let length=10;
    let array=[];
    
    for(let i = 0; i < length;i++){
        array[i]= start + i * step;
    }
    const hiddenIndex= getRandomInt(0,9);
    const correctAnswer= array[hiddenIndex];
    array[hiddenIndex]='..';

    return {
        array: array.join(' '),
        correctAnswer
    }
};
export default function progression(){
    const name = getName();
    console.log ("What number is missing in the progression?");
    let correctCount=0;
    while(correctCount < 3){
        let {array, correctAnswer} =sequence();
        console.log (`Question: ${array} `);
        let answer = Number(readlineSync.question('Your answer: '));
        if(answer === correctAnswer){
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


