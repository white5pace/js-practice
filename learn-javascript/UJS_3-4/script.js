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

// 4.1.1 Привет, object

function exOne() {
  let user = {};
  user.name = 'John';
  user.surname = 'Smith';
  user.name = 'Pete';
  delete user.name;
  console.log(user);
  htmlOut( 'Привет, object',
      exOne.toString(),
      true,
      'https://learn.javascript.ru/task/hello-object'
  );
}

// 4.1.2 Проверка на пустоту

function exTwo() {
  let isEmpty = (obj) => {
    for (let key in obj) {
      return false;
    }
    return true;
  };
  let schedule = {};
  alert( isEmpty(schedule) ); // true
  schedule['8:30'] = 'get up';
  alert( isEmpty(schedule) ); // false
  htmlOut( 'Проверка на пустоту',
      exTwo.toString(),
      true,
      'https://learn.javascript.ru/task/is-empty'
  );
}

// 4.1.4 Сумма свойств объекта

function exThree() {
  let salaries = {
    John: 100,
    Ann: 160,
    Pete: 130,
  };
  let sum = 0;
  for (let key in salaries) {
    sum += salaries[key];
  }
  console.log(sum);
  htmlOut( 'Сумма свойств объекта',
      exThree.toString(),
      true,
      'https://learn.javascript.ru/task/sum-object'
  );
}

// 4.1.5 Умножаем все числовые свойства на 2

function exFour() {
  let menu = {
    width: 200,
    height: 300,
    title: 'My menu',
  };

  function multiplyNumeric(obj) {
    for (let prop in obj) {
      if (typeof(obj[prop]) == 'number') {
        obj[prop] *= 2;
      }
    }
  }
  multiplyNumeric(menu);
  console.log(menu);

  htmlOut( 'Умножаем все числовые свойства на 2',
      exFour.toString(),
      true,
      'https://learn.javascript.ru/task/multiply-numeric'
  );
}

// 4.1.5 Создайте калькулятор

function exFive() {
  let calculator = {
    read(a, b) {
      this.a = +prompt('Введите первое значение', '0');
      this.b = +prompt('Введите второе значение', '0');
    },
    sum() {
      return this.a + this.b;
    },
    mul() {
      return this.a * this.b;
    },
  };
  calculator.read();
  alert( calculator.sum() );
  alert( calculator.mul() );

  htmlOut( 'Создайте калькулятор',
      exFive.toString(),
      true,
      'https://learn.javascript.ru/task/calculator'
  );
}

// 4.3.6 Цепь вызовов

function exSix() {
  let ladder = {
    step: 0,
    up() {
      this.step++;
      return this;
    },
    down() {
      this.step--;
      return this;
    },
    showStep: function() { // показывает текущую ступеньку
      alert( this.step );
      return this;
    },
  };
  ladder.up().up().down().up().showStep(); // 1
  htmlOut( 'Цепь вызовов',
      exSix.toString(),
      true,
      'https://learn.javascript.ru/task/chain-calls'
  );
}

// 4.6.1 Две функции - один объект

function exSeven() {
  let obj = {
    name: 'John',
  };
  function A() {
    return obj;
  };
  function B() {
    return obj;
  };

  let a = new A;
  let b = new B;

  alert( a == b ); // true
  htmlOut( 'Две функции - один объект',
      exSeven.toString(),
      true,
      'https://learn.javascript.ru/task/two-functions-one-object'
  );
}

// 4.6.2 Создание калькулятора при помощи конструктора

function exEight() {
  function Calculator() {
    this.read = function(a, b) {
      this.a = +prompt('Введите первое значение', '0');
      this.b = +prompt('Введите второе значение', '0');
    };
    this.sum = function() {
      return this.a + this.b;
    };
    this.mul = function() {
      return this.a * this.b;
    };
  }
  let calculator = new Calculator();
  calculator.read();

  alert( 'Sum=' + calculator.sum() );
  alert( 'Mul=' + calculator.mul() );

  htmlOut( 'Создание калькулятора при помощи конструктора',
      exEight.toString(),
      true,
      'https://learn.javascript.ru/task/calculator-constructor'
  );
}

// 4.6.3 Создаём Accumulator

function exNine() {
  function Accumulator(startingValue) {
    this.value = startingValue;
    this.read = function() {
      this.value += +prompt('Что еще?', 0);
    };
  }
  let accumulator = new Accumulator(1); // начальное значение 1

  accumulator.read(); // прибавит ввод prompt к текущему значению
  accumulator.read(); // прибавит ввод prompt к текущему значению

  alert(accumulator.value); // выведет сумму этих значений
  htmlOut( 'Создаём Accumulator',
      exNine.toString(),
      true,
      'https://learn.javascript.ru/task/calculator-constructor'
  );
}
