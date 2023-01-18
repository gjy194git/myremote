
var prompt = require('prompt-sync')({});

//1
let myName = 'J';
let age = 25;
let favColor = 'grey';

console.log(`Hi, my name is ${myName} and I am ${age} years old. My favorite color is ${favColor}.`)

//2
let pi = 3.14;

let radius = prompt('Input radius: ');
console.log('Area is: ' + (pi * radius**2));

//3
let total = 0;
while (true){
    const input = prompt('Give us a number or q to quit:')

    if (input == 'q'){
        break;
    }

    else {
    let addition = +input; 
    total = total+addition;
    console.log(total);
    }


}

//4
let num1 = prompt('first number?')
let num2 = prompt('second number?')

if (num1 === num2){
    console.log('equal')
}
else {
    console.log('not equal')
}

//6
age = prompt('age?');
citizen = prompt('0 for noncitizens, 1 for US citizens');

if (age > 18 && citizen == 1){
    console.log ('you are eligible to vote');
}
else {
    console.log('you cannot vote')
}

//7
let color = prompt('enter a color: ');

if (color == 'red' || color == 'yellow' || color == 'orange'){
    console.log('Those are warm colors');
}
else {console.log('Those are cool colors')}


//8
let percGrade = prompt('enter a percent grade');

if (percGrade > 90 && percGrade <= 100){
    console.log('A')
}
else if (percGrade > 80 && percGrade <= 89){
    console.log('B')
}
else if (percGrade > 70 && percGrade <= 79){
    console.log('C')
}
else if (percGrade > 60 && percGrade <= 69){
    console.log('D')
}
else if (percGrade < 60 && percGrade >= 0){
    console.log('F')
}
else {
    console.log('Error!!!')
}

//9
let factorial = prompt('Calculate the factorial of your number:')

function factorialize(num) {
    if (num == 0) 
        return 1;
      
    else {
          return (num * factorialize(num - 1));
      }
    }

if (factorial < 0){
    console.log('no negatives!')
}
else{
 console.log(factorialize(factorial));
}


//10
let water = prompt('water temperature in Celsius?')

if (water <= 0){
    console.log('freezing');
}
else if (water >= 100){
    console.log('boiling');
}
else{
    console.log('neither freezing nor boiling');
}


//11
for (let index = 1; index <= 10; index++) {
    console.log(index);
    
}


//12
let maxNum = prompt ('enter max number: ')
let summed = 0;

for (let index = 0; index < maxNum; index++) {
    summed += index;
    
}

console.log(+maxNum + summed);


//13
factorial = prompt ('enter number to factorialize: ')
let runningTotal = 1;
for (let index = 1; index <= factorial; index++) {
    runningTotal = runningTotal * index;
    
}
console.log(runningTotal);

//14
for (let i1 = 1; i1 <= 10; i1++) {
    let row = `${i1}: `;

    for (let i2 = 1; i2 <= 10; i2++) {
        let newCell = `  ${i1} X ${i2} = ${i1 * i2} `
        row = row + newCell;
        
    }
    console.log(row)
}


//15
for (let index = 1; index <= 100; index++) {

    if (index % 3 === 0){
        console.log('Fizz')
    }
    else if (index % 5 === 0){
        console.log('Buzz')
    }
    else {
        console.log(index)
    }
    
  }


//16
let randomNum = Math.floor(Math.random() * 100);
let guess = 0;
let victory = false;

while (victory == false){
    guess = prompt('Guess the number from 1 to 100')
    if (guess < randomNum){
        console.log('too low!')
    }
    else if (guess > randomNum){
        console.log('too high!')
    }
    else{
        console.log('you win!')
        victory = true;
    }
}


//17

let posInt = prompt('check if the positive integer is prime: ')
let prime = true;

for (let index = 2; index < posInt; index++) {
    if (posInt % index === 0){
        prime = false;
        break;
    }
    
}

if (prime == true){
    console.log('yes it\'s prime');
}
else{
    console.log('not prime')
}

//18

let text = prompt('give us a string: ')
let newString = '';

for (let index = (text.length - 1); index >= 0; index--) {
    newString += text.charAt(index);
    
}

console.log(newString);