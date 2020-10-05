"use strict";


// Переменные и строгий режим use "strict"

/*let number = 5;
const leftBorderWidth = 1;

number = 10;
console.log(number);
document.write(number);*/

let number = 4.6;

console.log(-4/0);

console.log("Hohel" * 5);

const person = 'lorem god';

let bool = true;

let und;
console.log(und);

const obj = {
	name: 'John',
	age: 25,
	isMarried: false
};

console.log(obj.name);
console.log(obj.age);

let arr = ['plum.png', 'orange,jpg', 'apple.bmp'];
console.log(arr[1]);

//Общение с пользователем alert, confirm, prompt
// alert('Hello!');
// confirm('Hello!');
// prompt('Hi baby');

// let user;

// if(confirm("Are you sure?")){
// 	if(user = prompt("Hi, what your name? ")){
// 		alert("Hello, " + user);
// 	} else
// 		alert("Error");
// } else
// 	alert("bad");

// let bang;

// if(bang = prompt('Bang you')) {
// 	alert('Nice, ' + bang);
// } else alert('Bad');

/*let ride;

if(ride = prompt('Write your name')) {
	if(confirm(ride + ', are you sure')) {
	alert('Hi, ' + ride);
	} else alert('Try again');
} else alert('Maybe you repeat this event');

const rain = confirm('Are you here?');
console.log(rain);

let rita;

if(rita = +prompt('Where do you live', 'Maybe London?')) {
	if(rita >= 15) {
	alert(rita + 1);
	} else alert('rita is empty!');
	console.log(rita);
} else alert('next stage');*/

/*let answer = [];

answer[0] = prompt('How old are you?.', '');
answer[1] = prompt('What your name?', '');
answer[2] = prompt('What your second name?', '');

document.write(answer + ', ');
console.log(typeof(answer));*/

//Интерполяция (ES6)

/*const category = 'toys';

// console.log('https://somesite.org/' + category);

console.log(`https://url.com/${category}/5`);

const user = 'Ivan';

alert(`Привет, ${user}`);*/

//Операторы в JS

// console.log('arr' + ' - object');

// let incr = 5,
// 	decr = 5;

// incr++;
// decr--;

// ++incr;
// --decr;

// console.log('Incr = ' + incr);
// console.log('Decr = ' + decr);

/*console.log('Incr = ' + (++incr));
console.log('Decr = ' + (--decr));

console.log(5%2);

console.log(2*4 == 8);

console.log(2*4 == '8');

console.log(2*4 === '8');

if(incr >= 8 && decr <= 5){
	alert('Right');
} else alert('False');

console.log(2 + 4 == '8');*/

//Условия

/*if (4 <= 9){
	console.log('Бред');
} else console.log('Мозг');



if (num < 49) {
	console.log('Error');
} else if (num > 100) {
	console.log('Again Error');
} else if (num > 49 && num < 100) {
	console.log('Correct');
}

(num == 50) ? console.log('Correct') : console.log('Again Error');

const num = 50;

switch (num) {
	case 49:
		console.log('Error');
		break;
	case 100:
		console.log('Error');
		break;
	case 50:
		console.log('Correct');
		break;
	default:
		console.log('Something going wrong');
		break;
}

const correctAnswer = 'Belgium';

switch (correctAnswer) {
	case 'Germany':
		console.log('Error');
		break;
	case 'France':
		console.log('Error');
		break;
	case 'Belgium':
		console.log('Correct');
		break;
	default:
		console.log('Something going wrong');
		break;
}

var step;
for (step = 0; step < 5; step++) {
  // Запускается 5 раз, с шагом от 0 до 4.
  console.log('Идём 1 шаг на восток');
}*/

//Циклы

/*let num2 = 50;

// while (num2 <= 55) {
// 	console.log(num2);
// 	num2++;
// }

// do {
// 	console.log(num2);
// 	num2++;
// } while (num2 <= 55);

// for (let i = 1; i < 8; i++) {
// 	console.log(i);
// }

for (let i = 1; i < 9; i++) {
	console.log(num2);
	num2++;
}

for (let i = 1; i < 8; i++) {
	if (i === 6){
		break;
	}
		console.log(i);
	}

for (let i = 1; i < 8; i++) {
	if (i === 6){
		continue;
	}
		console.log(i);
	}*/