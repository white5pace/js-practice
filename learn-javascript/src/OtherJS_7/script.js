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

function sevenElevenOne() {
  let regexp = /#([0-9a-f]{3}){1,2}\b/gi;

  let str = 'color: #3f3; background-color: #AA00ef; and: #abcd';

  alert( str.match(regexp) ); // #3f3 #AA00ef
}

function sevenElevenTwo() {
  let regexp = /-?\d+(\.\d+)?/g;

  let str = '-1.5 0 2 -123.4.';

  console.log( str.match(regexp) ); // -1.5, 0, 2, -123.4
}

function sevenElevenThree() {
  function parse(exp) {
    let regexp = /(\d+\.?\d*)\s*([-+*\/])\s*(\d+\.?\d*)/;
    // Но можно было и так (\d(?:\.\d+)?)
    let result = exp.match(regexp);
    if (!result) return [];
    result.shift();
    return result;
  }
  let [a, op, b] = parse('1.2 * 3.4');

  alert(a); // 1.2
  alert(op); // *
  alert(b); // 3.4
}

function sevenElevenFour() {
  let regexp = /([0-9a-f]{2}:){5}[0-9a-f]{2}/gi;

  alert( regexp.test('01:32:54:67:89:AB') ); // true

  alert( regexp.test('0132546789AB') ); // false (нет двоеточий)

  alert( regexp.test('01:32:54:67:89') ); // false (5 чисел, должно быть 6)

  alert( regexp.test('01:32:54:67:89:ZZ') ); // false (ZZ в конце строки)
}

function sevenThirtyOne() {
  let regexp = /java(script)?|php|c(\+\+)?/gi;

  alert('Java JavaScript PHP C++ C'.match(regexp)); // Java JavaScript PHP C++ C
}

function sevenThirtyTwo() {
  let regexp = /\[(url|quote|b)\].*?\[\/\1\]/gs;

  let str1 = '..[url]http://ya.ru[/url]..';
  let str2 = '..[url][b]http://ya.ru[/b][/url]..';
  let str3 = `
  [b]привет![/b]
  [quote]
    [url]http://ya.ru[/url]
  [/quote]
`;
  alert( str1.match(regexp) ); // [url]http://ya.ru[/url]
  alert( str2.match(regexp) ); // [url][b]http://ya.ru[/b][/url
  alert( str3.match(regexp) ); // [b]привет![/b],[quote][url]http://ya.ru[/url][/quote]
}

function sevenThirtyThree() {
  // let regexp = //g;

  let str = ' .. "test me" .. "Скажи \\"Привет\\"!" .. "\\\\ \\"" .. ';
  console.log(str);
  // alert( str1.match(regexp) );
}

function sevenThirtyFour() {
  let regexp = /<style(>|\s.*?>)/g;
  // <style(\s.*|)> Мое первое решение (ошибка, жадное)

  alert( '<style> <styler> <style test="...">'.match(regexp) ); // <style>, <style test="...">
}

function sevenFortyOne() {
  let regexp = /(?<!\-)(?<!\d)\d+/g;

  let str = '0 12 -5 123 -18';

  alert( str.match(regexp) ); // 0, 12, 123
}

function sevenFortyTwo() {
  let regexp = /(?<=(<body.+>))/si;

  let str = `
  <html>
    <body style="height: 200px">
    ...
    </body>
  </html>
  `;

  str = str.replace(regexp, `<h1>Hello</h1>`);
  alert(str);
}
