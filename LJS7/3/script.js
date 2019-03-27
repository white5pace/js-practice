'use strict';

var outputs = [];
var writeTo = document.getElementById('outputvalue'); 

// 1 Вывод чисел каждые 100 мс

// var init = 1;

// function printNumbersInterval() {
//   var init = 1;
//   var timerId = setInterval(function() {
//     console.log(init);
//     if (init == 20) clearInterval(timerId);
//     init++;
//   }, 100);
// }

// printNumbersInterval();

// 2 Вывод чисел каждые 100 мс, через setTimeout
// var init = 1;

// function printNumbersInterval() {
//   var init = 1;
//   var timerId = setTimeout(function tick() {
//     console.log(init);
//     if (init < 20) setTimeout(tick, 100);
//     init++;
//   }, 100);
// }

// printNumbersInterval();


// 3 Функция-задержка


function f(x) {
  var delay = setTimeout(function delay(){

  },)
}

var f1000 = delay(f, 1000);
var f1500 = delay(f, 1500);

f1000("тест"); // выведет "тест" через 1000 миллисекунд
f1500("тест2"); // выведет "тест2" через 1500 миллисекунд


