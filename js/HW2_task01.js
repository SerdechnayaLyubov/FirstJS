/*
Задание 1. Написать функцию, получающую на вход два числа. Если оба числа чётные – 
функция возвращает их произведение. 

Если оба числа нечётные – 
функция возвращает их сумму. 

Если одно из чисел чётное, а второе нечётное – 
функция возвращает это нечётное число.
*/

let x1 = prompt("Enter the first number:", "");
let x2 = prompt("Enter the second number:", "");


function twoNumbers(x1, x2) {
    if ((x1%2 == 0) && (x2%2 == 0)) {
        return x1 * x2;        
    }
    
    if ((x1%2 !== 0) && (x2%2 !== 0)) {
            return (+x1+ +x2);
    }

    if(x1%2 !== 0) {return x1;}
    if(x2%2 !== 0) {return x2;}     
}

alert (twoNumbers(x1, x2));


