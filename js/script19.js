/*//const answer = prompt("Вам есть 18?", "18");
//console.log(answer);
//const answers = [];

//answers[0] = prompt('Как ваше имя?', '');
//answers[1] = prompt('Как ваша Фамилия?', '');
// answers[2] = prompt('Сколько вам лет?', '');

// console.log(typeof(answers));

//"use strict";

// const category = 'toys';

// console.log(`https://someurl.com/${category}/5`)

// const user = "Ivan";
// alert(`Привет, ${user}`);

//console.log('arr' + " - object");
//console.log(4 + +"5");*/

/* Домашнее задание */

// if(1 == 1) {
//     console.log('Ok!');
// } else {
//     console.log('Error');
// }

// const num = 50;
// if(num < 49){
//     console.log('Error');
// } else if(num >100){
//     console.log('Много');
// } else {
//     console.log('Ok!');
// }
// const num = 56;

// (num === 56) ? console.log('ok!') : console.log('Error');

// switch(num){
//     case 49:
//         console.log('Neverno');
//         break;
//     case 100:
//         console.log('Neverno');
//         break;
//     case 56:
//         console.log('Vse verno!');
//         break;
//     default:
//         console.log('Ne v etot raz');
//         break;
// }

// "use strict";

// let num = 50;
// while(num <= 55){
//     console.log(num);
//     num++;
// }

// do {
//     console.log(num);
//     num++;
// }
// while(num < 55);

// for(let i=1; i<8; i++){
// console.log(i);
// }

// for(let i=1; i<10; i++){
//     if(i===6){
//         //continue;
//         break;
//     }
//     console.log(i);
// }

// "use strict";

// let num = 20;

// function showFirstMessage(text) {
//     console.log(text);
//     console.log(num);
// }

// showFirstMessage('Hello world!');
// console.log(num);

// function calc(a, b) {
//     return (a + b);
// }
// console.log(calc(4, 3));
// console.log(calc(5, 6));
// console.log(calc(10, 6));

// function ret() {
//     let num = 50;
//     return num;
// }

// const anotherNum = ret();
// console.log(anotherNum);

// const logger = function() {
//     console.log("Hello");
// };

// // const calc = (a, b) => a + b ;

// const str = 'test';
// const arr = [1, 2, 4];

// //console.log(str[2] = 'd');
// //console.log(str.toUpperCase());
// console.log(str.toLowerCase());

// console.log(str);

// const fruit = 'Some fruit';

// console.log(fruit.indexOf('fruit'));

// const logg = 'Hello world!';
// console.log(logg.slice(-6, -1));

// console.log(logg.substr(6,5));

//const num = 12.2;
//console.log(Math.round(num));

//    const test = '12.2px';
//    console.log(parseInt(test));
//    console.log(parseFloat(test));

"use strict";

function first() {
    //Do something
    setTimeout(function() {
        console.log(1);
    }, 500);
}

function second() {
    console.log(2);
}

first();
second();

function learnJS(lang, callback){
    console.log(`Я учу: ${lang}`);
    callback();
}

function done() {
    console.log('Я прошел этот урок');
}

learnJS('JavaScript', done);