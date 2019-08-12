'use strict';

// ООП в прототипном стиле


function htmlOut(hOne, pOne, output, link) {
  document.getElementById('hOne').innerHTML = hOne;
  if (link) {
    document.getElementById('linkTo').href = link;
    document.getElementById('linkTo').style.display = "block";
  } else {
    document.getElementById('linkTo').style.display = "none";
  }
  document.getElementById('Output').innerHTML = "Выходящее значение: " + output;
  var codeOut = document.getElementById('pOne');

  if (pOne) {
    codeOut.style.display = 'block';
    document.getElementsByClassName('pOne__desc')[0].style.display = 'block';
    codeOut.innerHTML = pOne;
    Prism.highlightElement(codeOut);
  } else {
    document.getElementById('pOne__desc').style.display = 'none';
    codeOut.style.display = "none";
  }
};

// 2.1.1-2 Вызвать alert с помощью внешнего скрипта

function exOne() {
  alert('Привет, мир');
  htmlOut('Вызвать alert с помощью внешнего скрипта', exOne.toString(),true , 'https://learn.javascript.ru/task/hello-alert-ext' );
}

// 2.4.1-3 Работа с переменными

function exTwo() {
  let admin, name;
  name = 'Джон';
  admin = name;
  console.log(admin);
  let Earth;
  let newUser;
  const BIRTHDAY = '17.10.1996';

  htmlOut('Работа с переменными', exTwo.toString(),admin , 'https://learn.javascript.ru/variables#tasks' );
}

// 2.9 Простая страница

function exThree() {
  let name = prompt('Введите имя', 'Роман');
  console.log(name);
  htmlOut('Простая страница', exThree.toString(),name , 'https://learn.javascript.ru/task/simple-page' );
}

// 2.10.2 Название JavaScript

function exFour() {
  let name = prompt('Каково «официальное» название JavaScript?', '');
  if(name == 'ECMAScript') {
    alert('Верно');
  }else {
    alert('Не знаете? ECMAScript!');
  }
  htmlOut('Название JavaScript', exFour.toString(),name , 'https://learn.javascript.ru/task/check-standard' );
}

// 2.10.3 Покажите знак числа

function exSix() {
  let number = +prompt('Введите чило', 0);
  if (number > 0) {
    alert(1);
  }else if(number < 0){
    alert(-1);
  }else {
    alert(0);
  }
  htmlOut('Покажите знак числа', exSix.toString(),1 , 'https://learn.javascript.ru/task/sign' );
}

// 2.10.4 Перепишите 'if' в '?'

function exSeven() {
  let result;
  let a = 2;
  let b = 3;

  (a + b < 4) ? result = 'Мало': result = 'Много';
  alert(result);

  htmlOut('Перепишите if в ?', exSeven.toString(),1 , 'https://learn.javascript.ru/task/rewrite-if-questionn' );
}

// 2.10.5 Перепишите 'if' в '?'

function exEight() {
  let message;
  let login = prompt('Кто вы?','');
  (login == 'Сотрудник') ? message = 'Привет':
  (login == 'Директор') ? message = 'Здравствуйте':
  (login == '') ? message = 'Нет логина':
  message = '';
  alert(message);

  htmlOut('Перепишите if в ?', exEight.toString(), message, 'https://learn.javascript.ru/task/rewrite-if-else-question' );
}

// 2.11.6 Проверка значения из диапазона

function exNine() {
  let age = +prompt('What is your age?');
  if(age >= 14 && age <= 90) {
    alert('Ok');
  }else {
    alert('Go home');
  }
  htmlOut('Проверка значения из диапазона', exNine.toString(), message, 'https://learn.javascript.ru/task/check-if-in-range' );
}

// 2.11.7 Проверка значения вне диапазона

function exTen() {
  let age = +prompt('What is your age?');
  if(!(age >= 14 && age <= 90)){ // (age < 14 && age > 90)
    alert('Ok');
  }else {
    alert('Go home');
  }
  htmlOut('Проверка значения вне диапазона', exTen.toString(), message, 'https://learn.javascript.ru/task/check-if-out-range' );
}

// 2.11.8 Вопрос о "if"

function exEleven() {

  htmlOut('Вопрос о "if"', exEleven.toString(), message, 'https://learn.javascript.ru/task/if-question' );
}