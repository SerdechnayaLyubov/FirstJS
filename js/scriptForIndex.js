'use strict';
///////////Lesson 19 Callback функции


function first() {
    setTimeout(function(){console.log('1');}, 500)
}
function second(){
    console.log('2');
}

first();
second();

function learnJS(leng, callback){
    console.log(`Я учу ${leng}`);
    callback();
}

function done (){
    console.log(`Я прошел этот урок! УРА!`);
}

learnJS('JavaScript', done);

///////////Lesson 18 Практика по функциям

// alert("!!!!!!!!!!!");
// let numberOfFilms;

// function start () {
//     numberOfFilms = +prompt("Сколько фильмов вы уже посмотрели?", "");

//     while (numberOfFilms == '' || numberOfFilms == null || isNaN(numberOfFilms)) {
//         numberOfFilms = +prompt("Сколько фильмов вы уже посмотрели?", "");
//     }
// };
// start();

// const personalMovieDB = {
//     count: numberOfFilms,
//     movies: {},
//     actors: {},
//     genres: [],
//     privat: false
// };
// function rememberMyFilms () {
//     for(let i=0; i<2; i++) {
//         const  a  = prompt("Один из последних просмотернных фильмов?", ""),
//             b = prompt("На сколько оцените его?", "");
    
//             if(a != null && b !=null && a!= '' && b != '' && a.length <50){
//                 personalMovieDB.movies[a] = b; 
//                 console.log('done ');
//             }
//             else {
//                 console.log('error');
//                 i--;
//             }
//     }
// };
// rememberMyFilms();



// function detectPerconLevel (){
//     if (personalMovieDB.count < 10) {
//         console.log('довольно мало фильмов');
//         } else if (personalMovieDB.count>=10 && personalMovieDB.count<30){
//             console.log('классический зритель');
//         } else if (personalMovieDB.count>=30) {
//         console.log('киноман');
//         } else {
//             console.log('ошибка');
//         }
// };
// detectPerconLevel();

// function showMyDB(hidden){
//     if (!hidden) {
//         console.log(personalMovieDB);
//     }
// }

// showMyDB(personalMovieDB.privat);

// function writeYourGeneres(){
//     for (let i = 1; i<=3; i++) {        
//         personalMovieDB.genres[i-1] = prompt (`Ваш любимый жанр под номером ${i}`);
//     }
// }

// writeYourGeneres();
///////////Lesson 17 Методы и свойства строк и чисел


// const array = [1, 2, 3];
// console.log(array.length);

// const str = "test";
// console.log(str.length);
// //console.log(str[2] = 'd');


// console.log(str.toUpperCase());
// console.log(str);  
// console.log('AAAAAA'.toLowerCase());
//  const fruit = 'Some fruit';
//  console.log(fruit.indexOf("me"));

//  const logg = "Hello world";
//  console.log(logg.slice(6, 11));
//  console.log(logg.slice(-4, -2));

//  console.log(logg.substring(11, 6));
//  ////////////числа...................

//  const num = 12.5;
//  console.log(Math.round(num));

//  const test = "12.2px";
//  console.log(parseInt(test));
//  console.log(parseFloat(test));


///////////////////Lesson 16 Функции, стрелочные функции
// let num = 20;

// function showFirstMessage (text ){
//     console.log(text);
//     let num = 10;
//     console.log(num);
// }

// showFirstMessage('Hello, World!');
// console.log(num);

// function calc (a,b){
//     return (a + b);
// }

// console.log(calc(4,3));
// console.log(calc(5,6));
// console.log(calc(10,6));
 

// function ret(){
// let num = 50;
// return num;
// }
// const anotherNum = ret();
// console.log(anotherNum);

// const logger = function () {
//     console.log('Say hello:)');
// };
// logger();
// const calc = (a,b)=>a+b;





/////////////////LEsson 15////////////продолжение приложения
// alert("!!!!!!!!!!!");
// const numberOfFilms = +prompt("Сколько фильмов вы уже посмотрели?", "");
// const personalMovieDB = {
//     count: numberOfFilms,
//     movies: {},
//     actors: {},
//     genres: [],
//     privat: false
// };
// //  const  a  = prompt("Один из последних просмотернных фильмов?", ""),
// //         b = prompt("На сколько оцените его?", ""),
// //         c = prompt("Один из последних просмотернных фильмов?", ""),
// //         d = prompt("На сколько оцените его?", "");

// // personalMovieDB.movies[a] = b;
// // personalMovieDB.movies[c] = d;

// for(let i=0; i<2; i++) {
//     const  a  = prompt("Один из последних просмотернных фильмов?", ""),
//         b = prompt("На сколько оцените его?", "");

//         if(a != null && b !=null && a!= '' && b != '' && a.length <50){
//             personalMovieDB.movies[a] = b; 
//             console.log('done ');
//         }
//         else {
//             console.log('error');
//             i--;
//         }
       

// }

// if (personalMovieDB.count < 10) {
// console.log('довольно мало фильмов');
// } else if (personalMovieDB.count>=10 && personalMovieDB.count<30){
//     console.log('классический зритель');
// } else if (personalMovieDB.count>=30) {
// console.log('киноман');
// } else {
//     console.log('ошибка');
// }

// console.log(personalMovieDB);

///////////////////////  Lesson 14. loops in JS

// if (4 == 9){
//     console.log('true');
// }
// else {
//     console.log('false');
// }

//начало приложения
// alert("!!!!!!!!!!!");
// const numberOfFilms = prompt("Сколько фильмов вы уже посмотрели?", "");
// const personalMovieDB = {
//     count: numberOfFilms,
//     movies: {},
//     actors: {},
//     genres: [],
//     privat: false
// };
//  const  a  = prompt("Один из последних просмотернных фильмов?", ""),
//         b = prompt("На сколько оцените его?", ""),
//         c = prompt("Один из последних просмотернных фильмов?", ""),
//         d = prompt("На сколько оцените его?", "");

// personalMovieDB.movies[a] = b;
// personalMovieDB.movies[c] = d;

// //        alert(`personalMovieDB = ${personalMovieDB}`);
// console.log(personalMovieDB);


////////////
///конец приложения.................

// function func(param) {
//     const captured = param;
//     function res(x) { return x + captured; }

//     return res;
// }
// let f1 = func(100);
// console.log(f1(10)); // 110


// /////////////двоичный код одного числа....................
// let a = 3, count=0, storage = a;
// while(a>0) {

//     if(a%2 == 1) count++;
//     console.log(a%2); 
//     a = (a - a%2)/2; console.log("a = "+ a);
    
// }
// if (count == 4) {
//     console.log("count = "+ count);
//     console.log("storage = "+ storage);
// }




// console.log(13/2);
// console.log(13%2);
// console.log(13/2 - 13%2);
// console.log((13 - 13%2)/2);

// for (let i = 0; true; i++){
//     alert('infinity');
// }

///////////////////////  Lesson 9. Operators in JS

 //console.log('arr ' + " - object");
// console.log(4 + " - object");
// console.log(4 + +" - object");// NaN
// console.log(4 + +"-5");// 
// console.log(4 + +"5");// 

// /////////////////////инкремент и декремент
// let incr = 10, decr = 10;
//  incr++;
//  decr--;
//  console.log(incr);
//  console.log(decr);
// /////////////////////////
//  let incr = 10, decr = 10;
//  ++incr;
//  --decr;
//  console.log(incr);
//  console.log(decr);
// /////////////////////////
//  let incr = 10, decr = 10;

//  console.log(incr++);
//  console.log(decr--);

//  console.log(incr);
//  console.log(decr);


// ///////////////////////
// let incr = 10, decr = 10;

// console.log(++incr);
// console.log(--decr);


// console.log(5%2);
// console.log(2*4 == 8);
// console.log(2*4 == '8');//сравнение по значению
// console.log(2*4 === '8');//сравнение по типу данных
// console.log(2*4 === 8);//сравнение по типу данных


// const isChecked = true, isClosed = true;
// console.log(isChecked && isClosed);//true
// console.log(isChecked || isClosed);//false
// ///////////////////////////////////////
// const isChecked = true, isClosed = false;
// console.log(isChecked && isClosed);//false
// console.log(isChecked || isClosed);//true

// ///////////////////оператор отрицания
// const isChecked = true, isClosed = false;
// console.log(isChecked && !isClosed);//false
// console.log(isChecked || isClosed);//true

// /////////////////порядок выполнения операторов
// console.log(2+2*2 != '6');//false// по значению
// console.log(2+2*2 !== '6');//true// по типу
 




///////////////////////  Lesson 8. Интерполяция

// const category = 'toys';
// console.log(`http://someurl.com/${category}/5`);

// const answer = prompt("What is your name?");
// //const user = "Lyubov";
// alert(`Hello, ${answer}!`);


///////////////////////  Lesson 7. Interacting with users


//alert('Hello!');

// const result = confirm("Are you here?");
// console.log(result);

// const answer = +prompt("Are you over 18 years old?", "18");
// console.log(typeof(answer));


// const answer = +prompt("Are you over 18 years old?", "18");
// console.log(answer+6);

// const answers = [];
// answers[0] = prompt("What is your name?", "");
// answers[1] = prompt("What is your last name?", "");
// answers[2] = prompt("How old are you?", "");

// document.write(answers);

// const answers = [];
// console.log(typeof(answers));

// console.log(typeof(null));//так быть не должно, это ошибка


///////////////////////  Lesson 6. Data types
// var add = 8;
// console.log(add);

// console.log(2);

// let number = 5;
// const width = 20;

// number = 10;
// console.log(number);

// console.log(-10/0);
// console.log('String' * 9);

// const bool = true;


// //console.log(something);

// let undef;
// console.log(undef);

// const obj = {
//     name : "John", 
//     age : 25,
//     isMarried : false
// };
// //console.log(obj.name);
// console.log(obj["name"]);

// let arr = ['qq', 'ww', 'ee', {}, [], 1];
// console.log(arr[4]);