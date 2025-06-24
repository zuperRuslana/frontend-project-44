import readlineSync from 'readline-sync';
import getName from './cli.js';
import { getRandomInt} from './even.js';

function generateOperator(){
const operators=['+','-','*'];
let index= getRandomInt(0,2);
let operator = operators[index];
return operator;
};

function calculate(){
const name = getName();
let num1= getRandomInt(0,100);
let num2= getRandomInt(0,100);
let operator= generateOperator();
console.log('What is the result of the expression?');
console.log(`Question: ${num1} ${operator} ${num2}`);
let answer;
do{
	 answer = Number(readlineSync.question('Your answer: '));
}while(isNaN(answer) || !answer);

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
}
if (answer === correctAnswer){
console.log(`Correct!\nCongratulations, ${name}`);
}
else{
console.log(`'${answer}' is wrong answer ;(. Correct answer was '${correctAnswer}'.\nLet's try again, ${name}!`);
}
};
export default calculate;
