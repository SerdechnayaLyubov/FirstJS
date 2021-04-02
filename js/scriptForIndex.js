//начало приложения
alert("!!!!!!!!!!!");
const numberOfFilms = +prompt("Сколько фильмов вы уже посмотрели?", "");
const personalMovieDB = {
    count: numberOfFilms,
    movies: {},
    actors: {},
    genres: [],
    provat: false
};
 const a  = prompt("Один из последних просмотернных фильмов?", ""),
        b = prompt("На сколько оцените его?", ""),
        с = prompt("Один из последних просмотернных фильмов?", ""),
        d = prompt("На сколько оцените его?", "");

        personalMovieDB.movies[a] = b;
        personalMovieDB.movies[c] = d;

        console.log(personalMovieDB);




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