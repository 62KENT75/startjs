'use strict';

let number = 4.6;

console.log(4/0);
console.log('string' * 9);

const obj = {
	name: 'John',
	age: 25,
	isMarried: false
};

console.log(obj.name);
// console.log(obj['name']); - правильно

let arr = ['plum.png', 'orange.jpg', 'apple.bmp'];
console.log(arr[2]);

// alert('Hello');

// const result = confirm('Are uou here?');
// console.log('result');

/* const answer = +prompt('Вам есть 18?', '18');
console.log(answer + 5); */

/* const answers = [];

answers[0] = prompt('What is your name?', '');
answers[1] = prompt('How many old are you?', '');
answers[2] = prompt('Where are you from?', '');

console.log(typeof(answers));
console.log(typeof(null)); */

/* const category = 'toys';

console.log(`https://someurl.com/${category}/5`);

const user = 'Sergey';

alert(`Привет, ${user}`); */

console.log('arr' + ' - object');
console.log(4 + '5');

let incr = 10,
	decr = 10;

incr++;
decr--;

console.log(incr);
console.log(decr);

console.log(5%2); /* Отобразить остаток */

console.log(2*4 == 8); /* Сравнение */

console.log(2*4 === '8'); /* Cтрогое сравнение числа и строки */

// && - и, || - или

const isChecked = true,
	isClose = false;

console.log(isChecked || isClose);

/* ! - оператор отрицания */

console.log(2 + 2 * 2 !== 8); /* 6 не равняется 8 */