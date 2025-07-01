import readlineSync from 'readline-sync';
import getName from './cli.js';
import { getRandomInt} from './even.js';


function generateOperator(){
const operators=['+','-','*'];
let index= getRandomInt(0,3);
return operators[index]; 
};

export default function calculate(){
const name = getName();
let correctCount = 0;


console.log('What is the result of the expression?');

while (correctCount < 3) {
let num1= getRandomInt(0,100);
let num2= getRandomInt(0,100);
let operator= generateOperator();
console.log(`Question: ${num1} ${operator} ${num2}`);
let correctAnswer;

switch(operator){
case '+':
correctAnswer= num1 + num2;
break;
case '-':
correctAnswer= num1-num2;
break;
case '*':
correctAnswer= num1*num2;
break;
}
let answer;
do{
	 answer = Number(readlineSync.question('Your answer: '));
}while(Number.isNaN(answer));


if (answer === correctAnswer){
console.log('Correct!');
correctCount++;
}
else{
console.log(`'${answer}' is wrong answer ;(. Correct answer was '${correctAnswer}'.\nLet's try again, ${name}!`);
return;
		}
	}
console.log(`Congratulations, ${name}!`);

};

