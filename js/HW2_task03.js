/*
Задание 3. Функция sequence(start, step) при вызове возвращает функцию-генератор. 
Каждый вызов генератора возвращает новое число в числовой последовательности. 
start – стартовое число (по умолчанию 0). step – шаг приращения (по умолчанию 1). 
Пример работы:
let generator = sequence(10, 3);
alert(generator()); // 10
alert(generator()); // 13
alert(generator()); // 16
*/
let start = +prompt("start = ", "");
let step = +prompt("step = ", "");

    function sequence(start, step) {
        start = start || 0;
        step = step || 1;
        //start -= step; /////////?????????????????
        return function() {
            return start += step;
        }
    }    
    let generator = sequence(start, step);
    alert(generator()); // 10
    alert(generator()); // 13
    alert(generator()); // 16
    






