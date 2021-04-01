/*Задание 3. Многоквартирный дом характеризуется следующими тремя показателями: 
этажность (1-25), число подъездов (1-10), количество квартир на лестничной площадке (1-20).
 Скрипт запрашивает эти показатели и номер квартиры. Выводится номер подъезда, 
 в котором находится указанная квартира.
*/
let numberEntrances = prompt("Ввведите количество подъездов (1 - 10)", "");
let numberFloors = prompt("Ввведите количество этажей (1 - 25)", "");
let numberApartmentsPerFloor = prompt("Ввведите количество квартир на этаже (1 - 20)", "");
let yourApartment = +prompt("Ввведите номер вашей квартиры:", "");


let anyEntrance = numberFloors * numberApartmentsPerFloor; 
let rest = yourApartment % anyEntrance;
let n = (yourApartment - rest) / anyEntrance;
let yourEntrance  =  rest==0 ? n : n+1;
let yourFloor = 
(((yourApartment-1-((yourApartment-1)%numberApartmentsPerFloor))/numberApartmentsPerFloor)%numberFloors)+1;


alert(`всего подъездов: ${numberEntrances}, 
       этажей: ${numberFloors}, 
       квартир на этаже: ${numberApartmentsPerFloor}, 
       номер квартиры: ${yourApartment}
       искомый подъезд: ${yourEntrance},
       искомый этаж: ${yourFloor},
       `);
