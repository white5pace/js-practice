/* eslint-disable max-len */
'use strict';

window.onload = function() {
  let tasks = document.querySelectorAll('.task');
  for (let task of tasks) {
    let code = task.querySelector('.task__code code');
    let taskNumber = task.dataset.taskNumber;
    let perform = task.querySelector('.task__perform');

    code.innerHTML = eval(taskNumber).toString();
    Prism.highlightElement(code);
    perform.addEventListener('click', eval(taskNumber));
  }
};


function sevenSixOne() {
  let str = 'Завтрак в 09:00 в комнате 123:456';
  alert(str.match(/\b\d\d:\d\d\b/));
}


function sevenEightTwo() {
  let regexp = /\b\d\d[:-]\d\d\b/g;
  alert( 'Завтрак в 09:00. Ужин в 21-30'.match(regexp) ); // 09:00, 21-30
}

function sevenNineOne() {
  let regexp = /\.+/g;
  alert( 'Привет!... Как дела?.....'.match(regexp) ); // ..., .....
}

function sevenNineTwo() {
  let regexp = /#[0-9a-f]{6}\b/gi;

  let str = 'color:#121212; background-color:#AA00ef bad-colors:f#fddee #fd2 #12345678';

  alert( str.match(regexp) ); // #121212,#AA00ef
}

function sevenTenTwo() {
  let regexp = /<!--.*?-->/gs;

  let str = `... <!-- My -- comment
   test --> ..  <!----> ..
  `;

  alert( str.match(regexp) ); // '<!-- My -- comment \n test -->', '<!---->'
}

function sevenTenThree() {
  let regexp = /<[^>]+>/g;

  let str = '<> <a href="/"> <input type="radio" checked> <b>';

  alert( str.match(regexp) ); // '<a href="/">', '<input type="radio" checked>', '<b>'
}
