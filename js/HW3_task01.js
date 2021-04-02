//"use strict";
/*
Задание 1. Напишите функцию range(), принимающую два аргумента: 
начало и конец диапазона, и возвращающую массив, который содержит все числа из диапазона, 
включая начальное и конечное. 
Третий необязательный аргумент функции range() – шаг для построения массива. 
Убедитесь, что функция range() работает с отрицательным шагом: 
например, range(5, 2, -1) должна возвращать массив [5, 4, 3, 2].

*/

let x1 = prompt("Enter the start of array:", "");
let x2 = prompt("Enter the end of array:", "");
let x3 = prompt("Enter the step for array:", "");

/*
function process(param, aparam, bparam) {
    if (bparam == undefined) bparam = false;
    // . . .
}*/
function range(start, end, step) {
    let array;
    if (step === undefined) {
        let delta = end - start;
        for (let i = 0,; i<delta; i++){
            array[i] += delta;
        }
        return array;
    }
    // else {
    //     for (let i = start; i< end; i++) {
    //         array[i] = 

    //     }
    // }

   
}

alert (range(x1, x2));
