/*
Задание 2. На декартовой плоскости прямоугольник можно задать четырьмя точками-вершинами 
(у каждой точки две числовые координаты). 

Написать функцию, проверяющую, образуют ли заданные восемь чисел вершины некоего прямоугольника. 

Считать, что каждая пара чисел – это координаты одной вершины. 
И что вершины перечисляются последовательно, в порядке обхода по часовой стрелке, 
начиная с произвольной вершины.
*/
//A(a1,a2); B(b1,b2); C(c1,c2); D(d1,d2);
let a1 = prompt("Enter a1: ", "");
let a2 = prompt("Enter a2: ", "");

let b1 = prompt("Enter b1: ", "");
let b2 = prompt("Enter b2: ", "");

let c1 = prompt("Enter c1: ", "");
let c2 = prompt("Enter c2: ", "");

let d1 = prompt("Enter d1: ", "");
let d2 = prompt("Enter d2: ", "");



function rectangle(a1,a2,   b1,b2,   c1,c2,   d1,d2) {
    
    let flag;
    let side1 = ((a1 - b1)**2 + (a2 - b2)**2)**0.5;
    let side2 = ((b1 - c1)**2 + (b2 - c2)**2)**0.5;
    let side3 = ((c1 - d1)**2 + (c2 - d2)**2)**0.5;
    let side4 = ((d1 - a1)**2 + (d2 - a2)**2)**0.5;

    let diagonal1 = ((a1 - c1)**2 + (a2 - c2)**2)**0.5;
    let diagonal2 = ((b1 - d1)**2 + (b2 - d2)**2)**0.5;

    if ((side1 === side3) && (side2 === side4) && (diagonal1 === diagonal2)) {        
        flag = true;
    }
    else {        
        flag = false;
    }   
    return (`It's a rectangle: ${flag}.`);
}

alert (rectangle(a1,a2, b1,b2, c1,c2, d1,d2));

