/* eslint-disable no-extend-native */
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

// 8.1.2 Алгоритм поиска

function exOne() {
  let head = {
    glasses: 1,
  };

  let table = {
    pen: 3,
  };

  let bed = {
    sheet: 1,
    pillow: 2,
  };

  let pockets = {
    money: 2000,
  };
  // pockets → bed → table → head
  pockets.__proto__ = bed;
  bed.__proto__ = table;
  table.__proto__ = head;

  console.log(pockets.pen);
  console.log(bed.glasses);

  htmlOut( 'Алгоритм поиска',
      exOne.toString(),
      1,
      'https://learn.javascript.ru/task/search-algorithm'
  );
}

// 8.2.2 Создайте новый объект с помощью уже существующего

function exTwo() {
  function Obj() {
    this.iWillDo = 'kus\'';
  }
  // Obj.prototype = null; // При переопредение корректно работать не будет
  let obj = new Obj();
  let obj2 = new obj.constructor();
  console.log(obj);
  console.log(obj2);
  htmlOut( 'Создайте новый объект с помощью уже существующего',
      exTwo.toString(),
      1,
      'https://learn.javascript.ru/task/new-object-same-constructor'
  );
}

// 8.3.1 Добавить функциям метод "f.defer(ms)"

function exThree() {
  function f() {
    console.log('Hello!');
  }

  Function.prototype.defer = function(ms) {
    setTimeout(this, ms);
  };

  f.defer(1000); // выведет "Hello!" через 1 секунд0у

  htmlOut( 'Добавить функциям метод "f.defer(ms)"',
      exThree.toString(),
      1,
      'https://learn.javascript.ru/task/defer-to-prototype'
  );
}

// 8.3.2 Добавьте функциям декорирующий метод "defer()"

function exFour() {
  Function.prototype.defer = function(ms) {
    let f = this;
    return function() {
      setTimeout(() => f.apply(this, arguments), ms);
    };
  };

  function f(a, b) {
    console.log( a + b );
  }

  f.defer(1000)(1, 2); // выведет 3 через 1 секунду.
  htmlOut( 'Добавьте функциям декорирующий метод "defer()"',
      exFour.toString(),
      1,
      'https://learn.javascript.ru/task/defer-to-prototype-extended'
  );
}
exFour();
