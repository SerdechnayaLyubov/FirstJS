//'use strict';

let x1 = +prompt("Enter the start of array:", "");
let x2 = +prompt("Enter the end of array:", "");
let x3 = +prompt("Enter the step for array:", "");


function range(start, end, step) {
    var array = [];
    var current = start;

    step = step || 1;
    if (step > 0) {
        while (current <= end) {
            array.push(current);
            current += step;
        }
    } else {
        while (current >= end) {
            array.push(current);
            current += step;
        }
    }
    return array;
}
alert (range(x1,x2,x3));




