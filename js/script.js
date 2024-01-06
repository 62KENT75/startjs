'use strict';
/* Задание на урок:

1) Создать переменную numberOfFilms и в неё поместить ответ от пользователя на вопрос:
'Сколько фильмов вы уже посмотрели?'

2) Создать объект personalMovieDB и в него поместить такие свойства:
    - count - сюда передается ответ на первый вопрос
    - movies - в это свойство поместить пустой объект
    - actors - тоже поместить пустой объект
    - genres - сюда поместить пустой массив
    - privat - в это свойство поместить boolean(логическое) значение false

3) Задайте пользователю по два раза вопросы:
    - 'Один из последних просмотренных фильмов?'
    - 'На сколько оцените его?'
Ответы стоит поместить в отдельные переменные
Записать ответы в объект movies в формате: 
    movies: {
        'logan': '8.1'
    }

Проверить, чтобы все работало без ошибок в консоли */


/* const numberOfFilms = +prompt('Сколько фильмов вы уже посмотрели?', '');
const personalMovieDB = {
	count: numberOfFilms,
	movies: {},
	actors: {},
	genres: [],
	privat: false
};

const a = prompt('Один из последних просмотренных фильмов?', ''),
	b = prompt('На сколько оцените его?', ''),
	c = prompt('Один из последних просмотренных фильмов?', ''),
	d = prompt('На сколько оцените его?', '');

personalMovieDB.movies[a] = b;
personalMovieDB.movies[c] = d;

console.log(personalMovieDB); */


/* if (4 == 9) {
	console.log('Ok!');
} else {
	console.log('Error');
} */



/* if (num < 49) {
	console.log('Error');
} else if (num > 100) {
	console.log('Много');
} else {
	console.log('Ok!');
}

(num === 50) ? console.log('Ok!') : console.log('Error'); */

/* const num = 50;

switch (num) {
case 49:
	console.log('Неверно');
	break;
case 100: 
	console.log('Неверно');
	break;
case 50:
	console.log('В точку!');
	break;
default:
	console.log('Не в этот раз');
	break;
} */

/* const hamburger = 5;
const fries = 0;

if (hamburger && fries) {
	console.log('Я сыт!');
} */

/* const hamburger = 2;
const fries = 0;

console.log(1 && 0);
console.log(1 && 5);
console.log(null && 5);

if (hamburger === 2 && fries) {
	console.log('Все сыты!');
} else {
	console.log('Чао!');
} */


// Задачи:
// "Что выведет консоль?":

console.log( NaN || 2 || undefined );
// Ответ: 2
console.log( NaN && 2 && undefined );
// Ответ: NaN
console.log( 1 && 2 && 3 );
// Ответ: 3
console.log( !1 && 2 || !3 );
// Ответ: !3 - неправильно, будет false !!!
console.log( 25 || null && !3 );
// Ответ: 25
console.log( NaN || null || !3 || undefined || 5);
// Ответ: 5
console.log( NaN || null && !3 && undefined || 5);
// Ответ: 5
console.log( 5 === 5 && 3 > 1 || 5);
// Ответ: true

// "Выполняется ли условие?"":

const hamburger = 3;
const fries = 3;
const cola = 0;
const nuggets = 2;

if (hamburger === 3 && cola || fries === 3 && nuggets) {
	console.log('Done!');
}
// Ответ: Выполняется по второму случаю. В первом нет колы, а для второго есть все в наличие. Будет DONE!