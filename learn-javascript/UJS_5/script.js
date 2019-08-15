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

// 5.4.2 Операции с массивами

function exNine() {
  let styles = ['Джаз', 'Блюз'];
  styles[styles.length] = 'Рок-н-ролл';
  console.log(styles);

  console.log(styles.length);
  styles[Math.floor((styles.length - 1) / 2)] = 'Классика';
  console.log(styles);
  console.log(styles.shift());
  console.log(styles);
  styles.unshift('Рэп', 'Регги');
  console.log(styles);
  htmlOut( 'Операции с массивами',
      exNine.toString(),
      1,
      'https://learn.javascript.ru/task/create-array'
  );
}

// 5.4.4 Сумма введённых чисел

function exTen() {
  let sumInput = () => {
    let inputNumbers = [];
    while (true) {
      let inputNumber = prompt('Введите число', '');
      if (inputNumber == '' ||
        inputNumber == null ||
        !isFinite(inputNumber)) break;
      inputNumbers.push(+inputNumber);
    }

    let sum = 0;
    for (let inputNumber of inputNumbers) {
      sum += inputNumber;
    }
    return sum;
  };
  console.log(sumInput());
  htmlOut( 'Сумма введённых чисел',
      exTen.toString(),
      1,
      'https://learn.javascript.ru/task/array-input-sum'
  );
}

// 5.4.5 Подмассив наибольшей суммы

function exEleven() {
  htmlOut( 'Подмассив наибольшей суммы',
      exEleven.toString(),
      'Еще не решил',
      'https://learn.javascript.ru/task/maximal-subarray'
  );
}

// 5.5.1 Переведите текст вида border-left-width в borderLeftWidth

function exTwelve() {
  let camelize = (str) => {
    let splited = str.split('-');
    for (let i = 1; i < splited.length; i++) {
      splited[i] = splited[i][0].toUpperCase() + splited[i].slice(1);
    }
    return splited.join('');
  };

  console.log(camelize('background-color'));
  console.log(camelize('list-style-image'));
  console.log(camelize('-webkit-transition'));

  htmlOut( 'Переведите текст вида border-left-width в borderLeftWidth',
      exTwelve.toString(),
      camelize('background-color'),
      'https://learn.javascript.ru/task/camelcase'
  );
}

// 5.5.2 Фильтрация по диапазону

function exThirteen() {
  let arr = [5, 3, 8, 1];
  function filterRange(arr, from, to) {
    return arr.filter((item) => item >= from && item <= to);
  }
  let filtered = filterRange(arr, 1, 4);
  console.log( filtered ); // 3,1 (совпадающие значения)
  console.log( arr ); // 5,3,8,1 (без изменений)

  htmlOut( 'Фильтрация по диапазону',
      exThirteen.toString(),
      filtered,
      'https://learn.javascript.ru/task/filter-range'
  );
}

// 5.5.2 Фильтрация по диапазону "на месте"

function exFourteen() {
  function filterRangeInPlace(arr, a, b) {
    let i = 0;
    while (i < arr.length) {
      if (arr[i] < a || arr[i] > b) {
        arr.splice(i, 1);
      } else {
        i++;
      }
    }
  }
  let arr = [5, 3, 8, 1];
  filterRangeInPlace(arr, 1, 4); // удалены числа вне диапазона 1..4
  console.log( arr ); // [3, 1]
  htmlOut( 'Фильтрация по диапазону "на месте"',
      exFourteen.toString(),
      arr,
      'https://learn.javascript.ru/task/filter-range-in-place'
  );
}

// 5.5.4 Сортировать в обратном порядке

function exFifteen() {
  let arr = [5, 2, 1, -10, 8];
  arr.sort((a, b) => b - a);
  console.log( arr ); // 8, 5, 2, 1, -10
  htmlOut( 'Сортировать в обратном порядке',
      exFifteen.toString(),
      true,
      'https://learn.javascript.ru/task/sort-back'
  );
}

// 5.5.5 Скопировать и отсортировать массив

function exSixteen() {
  let arr = ['HTML', 'JavaScript', 'CSS'];
  function copySorted(arr) {
    return arr.concat().sort();
  }
  let sorted = copySorted(arr);

  console.log( sorted ); // CSS, HTML, JavaScript
  console.log( arr ); // HTML, JavaScript, CSS (без изменений)

  htmlOut( 'Скопировать и отсортировать массив',
      exSixteen.toString(),
      sorted,
      'https://learn.javascript.ru/task/copy-sort-array'
  );
}

// 5.5.6 Создать расширяемый калькулятор

function exSeventeen() {
  function Calculator() {
    this.calculate = (str) => {
      let splited = str.split(' ');
      this.a = +splited[0];
      this.b = +splited[2];
      if (!this[splited[1]] || isNaN(this.a) || isNaN(this.b)) {
        return NaN;
      }
      return this[splited[1]](this.a, this.b);
    };

    this.addMethod = function(method, func) {
      this[method] = func;
    };

    this['+'] = (a, b) => a + b;
    this['-'] = (a, b) => a - b;
  }
  let calc = new Calculator;
  console.log( calc.calculate('3 + 7') ); // 10

  let powerCalc = new Calculator;

  powerCalc.addMethod('*', (a, b) => a * b);
  powerCalc.addMethod('/', (a, b) => a / b);
  powerCalc.addMethod('**', (a, b) => a ** b);

  let result = powerCalc.calculate('2 ** 3');
  console.log( result ); // 8

  htmlOut( 'Создать расширяемый калькулятор',
      exSeventeen.toString(),
      `powerCalc.calculate('2 ** 3') = ${result}`,
      'https://learn.javascript.ru/task/calculator-extendable'
  );
}

// 5.5.7 Трансформировать в массив имён

function exEighteen() {
  let vasya = {name: 'Вася', age: 25};
  let petya = {name: 'Петя', age: 30};
  let masha = {name: 'Маша', age: 28};

  let users = [vasya, petya, masha];

  let names = users.map((item) => item.name);

  console.log( names ); // Вася, Петя, Маша
  htmlOut( 'Трансформировать в массив имён',
      exEighteen.toString(),
      names,
      'https://learn.javascript.ru/task/array-get-names'
  );
}

// 5.5.8 Трансформировать в объекты

function exNineteen() {
  let vasya = {name: 'Вася', surname: 'Пупкин', id: 1};
  let petya = {name: 'Петя', surname: 'Иванов', id: 2};
  let masha = {name: 'Маша', surname: 'Петрова', id: 3};

  let users = [vasya, petya, masha];


  let usersMapped = users.map((item) => new UserMapped(item));

  function UserMapped(item) {
    this.id = item.id;
    this.fullName = `${item.name} ${item.surname}`;
  };

  console.log(usersMapped);
  console.log( usersMapped[0].id ); // 1
  console.log( usersMapped[0].fullName ); // Вася Пупкин
  htmlOut( 'Трансформировать в объекты',
      exNineteen.toString(),
      `usersMapped[0].fullName = ${usersMapped[0].fullName} `,
      'https://learn.javascript.ru/task/map-objects'
  );
}

// 5.5.9 Отсортировать пользователей по возрасту

function exTwenty() {
  let vasya = {name: 'Вася', age: 25};
  let petya = {name: 'Петя', age: 30};
  let masha = {name: 'Маша', age: 28};

  let arr = [vasya, petya, masha];

  function sortByAge(arr) {
    arr.sort((a, b) => a.age - b.age);
  }

  sortByAge(arr);

  console.log(arr[0].name); // Вася
  console.log(arr[1].name); // Маша
  console.log(arr[2].name); // Петя
  htmlOut( 'Отсортировать пользователей по возрасту',
      exTwenty.toString(),
      arr,
      'https://learn.javascript.ru/task/sort-objects'
  );
}

// 5.5.10 Перемешайте массив

function exTwentyOne() {
  let arr = [1, 2, 3];
  function shuffle(arr) {
    arr.sort(() => Math.random() - 0.5);
  }
  shuffle(arr);
  console.log(arr);

  shuffle(arr);
  console.log(arr);

  shuffle(arr);
  console.log(arr);

  htmlOut( 'Перемешайте массив',
      exTwentyOne.toString(),
      arr,
      'https://learn.javascript.ru/task/shuffle'
  );
}

// 5.5.11 Получить средний возраст

function exTwentyTwo() {
  let vasya = {name: 'Вася', age: 25};
  let petya = {name: 'Петя', age: 30};
  let masha = {name: 'Маша', age: 29};

  let arr = [vasya, petya, masha];
  let getAverageAge = (arr) => {
    return arr.reduce((previousValue, item) => previousValue + item.age, 0) /
      arr.length;
  };
  console.log(getAverageAge(arr));
  htmlOut( 'Получить средний возраст',
      exTwentyTwo.toString(),
      getAverageAge(arr),
      'https://learn.javascript.ru/task/average-age'
  );
}

// 5.5.12 Оставить уникальные элементы массива

function exTwentyThree() {
  function unique(arr) {
    let uniqueArr = [];
    strings.forEach(function(item) {
      if (!(uniqueArr.includes(item))) {
        uniqueArr.push(item);
      }
    });
    return uniqueArr;
  }

  let strings = ['кришна', 'кришна', 'харе', 'харе',
    'харе', 'харе', 'кришна', 'кришна', ':-O',
  ];

  console.log( unique(strings) );
  htmlOut( 'Оставить уникальные элементы массива',
      exTwentyThree.toString(),
      unique(strings),
      'https://learn.javascript.ru/task/array-unique'
  );
}
