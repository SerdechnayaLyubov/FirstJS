/*Задание 2. Скрипт запрашивает у пользователя два целых числа a и b 
(считать, что пользователь вводит целые числа без ошибок). 
Затем скрипт выводит все положительные целые числа 
в диапазоне от a (включительно) до b (включительно), которые в своём двоичном 
представлении имеют ровно 4 единицы.*/

let a = prompt("Ввведите число a", "");
let b = prompt("Ввведите число b", "");
let count = 0, storage = 0;
let keep = a;

for (let i = keep; i <= b; i++) {      
    if (i>0) {        
        count = 0;    storage = a = i;
        while(a>0) {
            if(a%2 == 1) count++;
            //console.log(a%2); 
            a = (a - a%2)/2; //console.log("a = "+ a);
        }
        if (count == 4) {
            //console.log(`count = ${count}, storage4 = ${storage}`);  
            alert(`count = ${count}, storage4 = ${storage}`);        ;
        }
    }
}


    