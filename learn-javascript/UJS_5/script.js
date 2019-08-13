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

// 5.1.1 Сумма пользовательских чисел

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

// 5.1.3 Ввод числового значения

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

// 5.1.5 Случайное число от min до max

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

// 5.1.5 Случайное целое число от min до max

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
exFour();
