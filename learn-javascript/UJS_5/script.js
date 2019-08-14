'use strict';

// ООП в прототипном стиле


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

// 5.2.1 Сумма пользовательских чисел

function exOne() {
  let a = +prompt('a?', 0);
  let b = +prompt('b?', 0);
  alert(a + b);
  htmlOut( 'Сумма пользовательских чисел',
      exOne.toString(),
      true,
      'https://learn.javascript.ru/task/sum-interface'
  );
}

// 5.2.3 Ввод числового значения

function exTwo() {
  function readNumber() {
    while (true) {
      let input = prompt('Введите число', '');
      if (input == null || input == '') return null;
      if (isNaN(+input)) continue;
      return +input;
    }
  }
  console.log(readNumber());
  htmlOut( 'Ввод числового значения',
      exTwo.toString(),
      true,
      'https://learn.javascript.ru/task/repeat-until-number'
  );
}

// 5.2.5 Случайное число от min до max

function exThree() {
  function random(min, max) {
    return Math.random() * (max - min) + min;
  }
  for (let i = 0; i < 10; i++) {
    console.log(random(1, 25));
  }
  htmlOut( 'Случайное число от min до max',
      exThree.toString(),
      true,
      'https://learn.javascript.ru/task/repeat-until-number'
  );
}

// 5.2.5 Случайное целое число от min до max

function exFour() {
  function randomInteger(min, max) {
    return Math.floor(Math.random() * (max + 1 - min) + min);
  }
  for (let i = 0; i < 50; i++) {
    console.log(randomInteger(1, 25));
  }
  // console.log(Math.random().toFixed(1));
  htmlOut( 'Случайное целое число от min до max',
      exFour.toString(),
      true,
      'https://learn.javascript.ru/task/repeat-until-number'
  );
}

// 5.3.1 Сделать первый символ заглавным

function exFive() {
  let ucFirst = (str) => {
    if (!str) return str;
    return str[0].toUpperCase() + str.slice(1);
  };
  console.log(ucFirst('вася'));
  htmlOut( 'Сделать первый символ заглавным',
      exFive.toString(),
      ucFirst('вася'),
      'https://learn.javascript.ru/task/ucfirst'
  );
}

// 5.3.2 Проверка на спам

function exSix() {
  let checkSpam = (str) => {
    return str.toLowerCase().includes('viagra') ||
      str.toLowerCase().includes('xxx');
  };
  console.log(checkSpam('buy ViAgRA now') == true);
  console.log(checkSpam('free xxxxx') == true);
  console.log(checkSpam('innocent rabbit') == false);

  htmlOut( 'Проверка на спам',
      exSix.toString(),
      1,
      'https://learn.javascript.ru/task/check-spam'
  );
}

// 5.3.3 Усечение строки

function exSeven() {
  let truncate = (str, maxLen) => {
    if (str.length > maxLen) {
      return str.slice(0, maxLen - 1) + '\u{2026}';
    }
    return str;
  };

  console.log(truncate('Вот, что мне хотелось бы сказать на эту тему:', 20));
  console.log(truncate('Всем привет!', 20));

  htmlOut( 'Усечение строки',
      exSeven.toString(),
      1,
      'https://learn.javascript.ru/task/truncate'
  );
}

// 5.3.4 Выделить число

function exEight() {
  let extractCurrencyValue = (str) => {
    return +str.slice(1);
  };
  console.log( extractCurrencyValue('$120') === 120 );
  htmlOut( 'Выделить число',
      exEight.toString(),
      1,
      'https://learn.javascript.ru/task/extract-currency'
  );
}
