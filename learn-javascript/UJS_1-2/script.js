'use strict';

function htmlOut(hOne, pOne, output, link) {
  document.getElementById('hOne').innerHTML = hOne;
  if (link) {
    document.getElementById('linkTo').href = link;
    document.getElementById('linkTo').style.display = 'block';
  } else {
    document.getElementById('linkTo').style.display = 'none';
  }
  document.getElementById('Output').innerHTML = 'Выходящее значение: ' + output;
  const codeOut = document.getElementById('pOne');

  if (pOne) {
    codeOut.style.display = 'block';
    document.getElementsByClassName('pOne__desc')[0].style.display = 'block';
    codeOut.innerHTML = pOne;
    Prism.highlightElement(codeOut);
  } else {
    document.getElementById('pOne__desc').style.display = 'none';
    codeOut.style.display = 'none';
  }
};

// 2.1.1-2 Вызвать alert с помощью внешнего скрипта

function exOne() {
  alert('Привет, мир');
  htmlOut('Вызвать alert с помощью внешнего скрипта', exOne.toString(), true, 'https://learn.javascript.ru/task/hello-alert-ext' );
}

// 2.4.1-3 Работа с переменными

function exTwo() {
  let admin; let name;
  name = 'Джон';
  admin = name;
  console.log(admin);
  let Earth;
  let newUser;
  const BIRTHDAY = '17.10.1996';

  htmlOut('Работа с переменными', exTwo.toString(), admin, 'https://learn.javascript.ru/variables#tasks' );
}

// 2.9 Простая страница

function exThree() {
  const name = prompt('Введите имя', 'Роман');
  console.log(name);
  htmlOut('Простая страница', exThree.toString(), name, 'https://learn.javascript.ru/task/simple-page' );
}

// 2.10.2 Название JavaScript

function exFour() {
  const name = prompt('Каково «официальное» название JavaScript?', '');
  if (name == 'ECMAScript') {
    alert('Верно');
  } else {
    alert('Не знаете? ECMAScript!');
  }
  htmlOut('Название JavaScript', exFour.toString(), name, 'https://learn.javascript.ru/task/check-standard' );
}

// 2.10.3 Покажите знак числа

function exSix() {
  const number = +prompt('Введите чило', 0);
  if (number > 0) {
    alert(1);
  } else if (number < 0) {
    alert(-1);
  } else {
    alert(0);
  }
  htmlOut('Покажите знак числа', exSix.toString(), 1, 'https://learn.javascript.ru/task/sign' );
}

// 2.10.4 Перепишите 'if' в '?'

function exSeven() {
  let result;
  const a = 2;
  const b = 3;

  (a + b < 4) ? result = 'Мало': result = 'Много';
  alert(result);

  htmlOut('Перепишите if в ?', exSeven.toString(), 1, 'https://learn.javascript.ru/task/rewrite-if-questionn' );
}

// 2.10.5 Перепишите 'if' в '?'

function exEight() {
  let message;
  const login = prompt('Кто вы?', '');
  (login == 'Сотрудник') ? message = 'Привет':
  (login == 'Директор') ? message = 'Здравствуйте':
  (login == '') ? message = 'Нет логина':
  message = '';
  alert(message);

  htmlOut('Перепишите if в ?', exEight.toString(), message, 'https://learn.javascript.ru/task/rewrite-if-else-question' );
}

// 2.11.6 Проверка значения из диапазона

function exNine() {
  const age = +prompt('What is your age?');
  if (age >= 14 && age <= 90) {
    alert('Ok');
  } else {
    alert('Go home');
  }
  htmlOut('Проверка значения из диапазона', exNine.toString(), message, 'https://learn.javascript.ru/task/check-if-in-range' );
}

// 2.11.7 Проверка значения вне диапазона

function exTen() {
  const age = +prompt('What is your age?');
  if (!(age >= 14 && age <= 90)) { // (age < 14 && age > 90)
    alert('Ok');
  } else {
    alert('Go home');
  }
  htmlOut('Проверка значения вне диапазона', exTen.toString(), message, 'https://learn.javascript.ru/task/check-if-out-range' );
}

// 2.11.8 Проверка логина

function exEleven() {
  const who = prompt('Who\'s there?', '');
  if (who == null) {
    alert('Отменено');
  } else if (who == 'Админ') {
    const password = prompt('Пароль?');

    if (password == null) {
      alert('Отменено');
    } else if (password == 'Я главный') {
      alert('Здравствуйте!');
    } else {
      alert('Неверный пароль');
    }
  } else {
    alert('Я не знаю вас');
  }
  htmlOut('Проверка логина', exEleven.toString(), message, 'https://learn.javascript.ru/task/if-question' );
}

// 2.12.4 Выведите чётные числа

function exTwelve() {
  for (let i = 2; i <= 10; i++) {
    if (!(i % 2)) {
      console.log(i);
    }
  }
  htmlOut('Выведите чётные числа', exTwelve.toString(), message, 'https://learn.javascript.ru/task/for-even' );
}

// 2.12.5 Замените for на while

function exThirteen() {
  let i = 0;
  while (i < 3) {
    alert( `number ${i}!` );
    i++;
  }
  htmlOut('Замените for на while', exThirteen.toString(), message, 'https://learn.javascript.ru/task/replace-for-while' );
}

// 2.12.6 Повторять цикл, пока ввод неверен

function exFourteen() {
  while (true) {
    const number = +prompt('Введите число больше ста', '');

    if (number > 100 || number == 0) break;
    if (number < 100) continue;
  }

  htmlOut('Повторять цикл, пока ввод неверен', exFourteen.toString(), message, 'https://learn.javascript.ru/task/repeat-until-correct' );
}

// 2.12.6 Вывести простые числа

function exFifteen() {
  const n = +prompt('Введите n', 10);

  for (let j = 2; j <= n; j++) {
    if (j == 2) {
      console.log(j); continue;
    }
    for (let i = 2; i <= Math.round(Math.sqrt(j)); i++) {
      if (j % i == 0) break;

      if ( i == Math.round(Math.sqrt(j))) {
        console.log(j);
      }
    }
  }
  htmlOut('Вывести простые числа', exFifteen.toString(), true, 'https://learn.javascript.ru/task/list-primes' );
}

// 2.13.1 Напишите "if", аналогичный "switch"

function exSixteen() {
  const browser = prompt('What\'s browser you use', 'Chrome');
  if (browser === 'Edge') {
    alert( 'You\'ve got the Edge!' );
  } else if (browser === 'Chrome'
  || browser === 'Firefox'
  || browser === 'Safari'
  || browser === 'Opera') {
    alert( 'Okay we support these browsers too' );
  } else {
    alert( 'We hope that this page looks ok!' );
  }
  htmlOut('Напишите "if", аналогичный "switch"', exSixteen.toString(), true, 'https://learn.javascript.ru/task/rewrite-switch-if-else' );
}

// 2.13.2 Переписать условия "if" на "switch"

function exSeventeen() {
  const browser = prompt('What\'s browser you use', 'Chrome');
  const a = +prompt('a?', '');
  switch (a) {
    case 0:
      alert(0);
      break;
    case 1:
      alert(1);
      break;
    case 2:
    case 3:
      alert(2, 3);
      break;
  }

  htmlOut('Переписать условия "if" на "switch"', exSeventeen.toString(), true, 'https://learn.javascript.ru/task/rewrite-if-switch' );
}

// 2.14.2 Перепишите функцию, используя оператор '?' или '||'

function exNineteen() {
  const age = +prompt('How old are you?', '18');
  function checkAge(age) {
    // return age > 18 || confirm('Родители разрешили?');
    return age > 18 ? true : confirm('Родители разрешили?');
  }
  console.log(checkAge(age));
  htmlOut('Перепишите функцию, используя оператор \'?\' или \'||\'', exNineteen.toString(), true, 'https://learn.javascript.ru/task/rewrite-function-question-or' );
}

// 2.14.3 Функция min(a, b)

function exTwenty() {
  function min(a, b) {
    if (a < b) {
      return a;
    } else {
      return b;
    }
  }
  console.log(min(2, 5) == 2);
  console.log(min(3, -1) == -1);
  console.log(min(1, 1) == 1);
  htmlOut('Функция min(a, b)', exTwenty.toString(), true, 'https://learn.javascript.ru/task/rewrite-function-question-or' );
}

// 2.14.4 Функция pow(x,n)

function exTwentyOne() {
  function pow(x, n) {
    let result = x;
    for (let i = 1; i < n; i++) {
      result *= x;
    }
    return result;
  }
  const x = prompt('x?', '');
  const n = prompt('n?', '');

  if (n < 1) {
    alert(`Степень ${n} не поддерживается, используйте натуральное число`);
  } else {
    alert( pow(x, n) );
  }
  htmlOut('Функция pow(x,n)', exTwentyOne.toString(), true, 'https://learn.javascript.ru/task/rewrite-function-question-or' );
}

// 2.15.1 Перепишите с использованием функции-стрелки

function exTwentyTwo() {
  const ask = (question, yes, no) => {
    if (confirm(question)) yes();
    else no();
  };
  ask(
      'Вы согласны?',
      () => alert('Вы согласились.'),
      () => alert('Вы отменили выполнение.')
  );

  htmlOut('Перепишите с использованием функции-стрелки', exTwentyTwo.toString(), true, 'https://learn.javascript.ru/task/rewrite-arrow' );
}
