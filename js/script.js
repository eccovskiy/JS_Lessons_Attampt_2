"use strict";

// Переменные и строгий режим use "strict"

/*let number = 5;
const leftBorderWidth = 1;

number = 10;
console.log(number);
document.write(number);*/

/*let number = 4.6;

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
console.log(arr[1]);*/

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

// Функции

/*let num = 20;

function showFirstMassage(text) {
	console.log(text);
	// let num = 15;
	num = 15;
	console.log(num);
}

showFirstMassage('Hello world!');
console.log(num);

function calc(a, b) {
	return (a + b);
}

console.log(calc(5, 8));
console.log(calc(15, 5));
console.log(calc(4, 7));

function ret() {
	let num = 50;
	return num;
}

const anotherNum = ret();
console.log(anotherNum);

let logger = function() {
	console.log('Express');
};

logger();

const calc2 = (a, b) => {
	console.log('1');
	return a + b;
}

calc2();
console.log(calc2(8, 6));*/

// Методы и свойства строк и чисел

/*const str = 'text';

const arr2 = [1, 5, 9];

// console.log(str.length);
// console.log(arr2.length);

console.log(str.toUpperCase());
console.log(str);

const fruit = 'Some fruit';

console.log(fruit.indexOf('q'));

const logg = 'Hello world';

console.log(logg.slice(6, 11));

console.log(logg.substring(6, 11));

console.log(logg.substr(6, 5));

const numMath = 12.5;

console.log(Math.round(numMath));*/

// Callback - функция

/*function first() {
	setTimeout(function() {
		console.log(1);
	}, 500);
}

function second() {
	console.log(2);
}

first();
second();

function learnJS(lang, callback) {
	console.log(`Я учу: ${lang}`);
	callback();
}

function done() {
	console.log('Я прошёл этот урок');
}

// learnJS('Javascript', function() {
// 	console.log('Я прошёл этот урок');
// });

learnJS('Javascript', done);*/

// Объекты, деструктуризация объектов (ES6)

//const obj2 = new Object();

/*const option = {
	name: 'Alex',
	width: 1024,
	height: 1024,
	colors: {
		border: 'black',
		bg: 'red',
	},
	makeTest: function() {
		console.log('Test');
	}
};

option.makeTest();

const {border, bg} = option.colors;

console.log(border);*/

// console.log(option.name);

// console.log(option['colors']['border']);

// delete option.name;

// console.log(option);

// let counter = 0; // Счётчик

// for (let key in option){
// 	if (typeof(option[key]) === 'object'){
// 		for (let iteration in option[key]) {
// 			console.log(`Свойство ${iteration} имеет значение ${option[key][iteration]}`);
// 			counter++;
// 		}
// 	} else {
// 		console.log(`Свойство ${key} имеет значение ${option[key]}`);
// 		counter++;
// 	}
// }

// console.log('Количесвто =' + ' ' + counter);

// console.log(Object.keys(option).length);

// Массивы и псевдомассивы

/*const arr3 = [1, 25, 36, 14, 5];
// arr3[99] = 100;
// console.log(arr3.length);
// console.log(arr3);

arr3.sort(compareNum);
console.log(arr3);

function compareNum(a, b) {
	return a - b;
}

arr3.forEach(function(item, i ,arr3) {
	console.log(`${i}: ${item} внутри массивы ${arr3}`);
});

// const string = prompt("", "");
// const products = string.split(', ');
// console.log(products.sort);
// console.log(products.join('; '));

// arr3.pop();

// arr3.push(10);

// console.log(arr3);

for (let i = 0; i < arr3.length; i++) {
	console.log(arr3[i]);
}

for (let value of arr3) {
	console.log(value);
}*/

// Передача по ссылке или по значению. Spread оператор (ES6 - ES-9)

// let a = 5,
// 	b = a;

// b = b + 5;

// console.log(b);
// console.log(a);

// const obj = {
// 	a: 5,
// 	b: 1
// }

// const copy = obj;

// copy.a = 10;

// console.log(copy);
// console.log(obj);

/*function copy(mainObj) {
	let objCopy = {};

	let key;
	for (key in mainObj) {
		objCopy[key] = mainObj[key];
	}

	return objCopy;
}

const numbers = {
	a: 2,
	b: 5,
	c: {
		x: 7,
		y: 4
	}
};

const newNumbers = copy(numbers);

newNumbers.a = 10;
newNumbers.c.x = 10;

console.log(numbers);
console.log(newNumbers);

const add = {
	d: 17,
	e: 20
};

// console.log(Object.assign(numbers, add));

const clone = Object.assign({}, add);

clone.d = 20;

// console.log(add);
// console.log(clone);

const oldArray = ['a', 'b', 'c'];
const newArray = oldArray.slice();

newArray[2] = 'q';

console.log(oldArray);
console.log(newArray);

const video = ['yputube', 'vimeo', 'rutube'],
	  blogs = ['wordpress', 'livejournal', 'blogger'],
	  internet = [...video, ...blogs, 'vk', 'facebook'];

console.log(internet);

function log(a, b, c, d) {
	console.log(a);
	console.log(b);
	console.log(c);
	console.log(d);
	console.log(a, d);
}

const num = [2, 5, 7, 10];

log(...num);

const array = ["a", "b"];

const newAarray = [...array];

newAarray[0] = "t";

console.log(array);
console.log(newAarray);

const q = {
	one: 1,
	two: 2
};

const newObj = {...q};

newObj.one = 15;

console.log(q);
console.log(newObj);*/

// Основы ООП, прототипно-ориентированное программирование

/*let str = 'some';
let strObj = new String(str);

// console.log(typeof(str));
// console.log(typeof(strObj));

console.dir([1 , 2, 3]);

const soldier = {
	health: 400,
	armor: 100,
	sayHello: function() {
		console.log('Hello');
	}
};

const john = {
	health: 100
};

john.__proto__ = soldier;

Object.setPrototypeOf(john, soldier);

// console.log(john.armor);

john.sayHello();*/

// #25. Отлавливаем ошибки в своём коде при момощи консоли разработчика

// №26. Динамическая типизация в JS

// To string
// 1)
/*console.log(typeof(String(null)));

// 2)
const num = 5;

console.log("https://vk.com/canalog/" + num);

const fontSize = 26 + 'px';

console.log(fontSize);

// To number
// 1)
console.log(typeof(Number(null)));

// 2)
console.log(typeof(+'5'));

// 3)
console.log(typeof(parseInt('15px', 10)));

let answ = +prompt('Hello', '');

// To boolean
// False - 0. '', null, undefined, NaN;


// 1)
let switcher = null;

if (switcher) {
	console.log('Workimg...');
}

switcher = 1;

if (switcher) {
	console.log('Workimg...');
}

// 2)
console.log(typeof(Boolean(null)));

// 3)
*/

// Задачи для СОБЕСЕДОВАНИЯ и НА ПОНИМАНИЕ ОСНОВ

// 1) Какое будет выведено значение: let x = 5; alert( x++ ); ?
// let x = 5;

// alert( x++ ); // 5

// 2) Чему равно такое выражение: [ ] + false - null + true ?

// console.log([] + false - null + true); // NaN

// 3) Что выведет этот код: let y = 1; let x = y = 2; alert(x); ?

// let y = 1;
// let x = y = 2;

// alert(x); // 2

// 4) Чему равна сумма [ ] + 1 + 2?

// console.log([] + 1 + 2); // 12

// 5) Что выведет этот код: alert( '1'[0] )?

// alert('1'[0]); // 1

// 6) Чему равно 2 && 1 && null && 0 && undefined ?

// console.log(2 && 1 && null && 0 && undefined); // null

// 7) Есть ли разница между выражениями? !!( a && b ) и (a && b)?

// let a = 5,
// 	b = 10;

// console.log(!!(a && b) === (a && b)); // false

// 8) Что выведет этот код: alert( null || 2 && 3 || 4 ); ?

// alert( null || 2 && 3 || 4 ); // 3

// 9) a = [1, 2, 3]; b = [1, 2, 3]; Правда ли что a == b ?

// let a = [1, 2, 3],
// 	b = [1, 2, 3];

// console.log(a == b); false

// 10) Что выведет этот код: alert(+'Infinity'); ?

//alert('Infinity'); // Infinity

// 11) Верно ли сравнение: "Ёжик" > "яблоко"?

// console.log("яблоко" > "Ёжик"); // false

// 12) Чему равно 0 || "" || 2 || undefined || true || falsе ?

//console.log(0 || "" || 2 || undefined || true || falsе); // 2

// # 28 Получение элементов со страницы

// # 29 Действия с элементами на странице

// # 31 События и их обработчики

