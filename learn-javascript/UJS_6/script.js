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

// 6.1.1 Вычислить сумму чисел до данного

function exOne() {
  function sumToRecursion(n) {
    if (n == 1) {
      return 1;
    } else {
      return n + sumToRecursion(n - 1);
    }
  }

  function sumToIterative(n) {
    let result = 0;
    for (let i = 0; i <= n; i++) {
      result += i;
    }
    return result;
  }

  function sumToArithmeticProgression(n) {
    return n * (n + 1) / 2;
  }

  console.log(sumToRecursion(100));
  console.log(sumToIterative(100));
  console.log(sumToArithmeticProgression(100));

  htmlOut( 'Вычислить сумму чисел до данного',
      exOne.toString(),
      sumToArithmeticProgression(100),
      'https://learn.javascript.ru/task/sum-to'
  );
}

// 6.1.2 Вычислить факториал

function exTwo() {
  let factorial = (n) => {
    if (n == 1) {
      return 1;
    } else {
      return n * factorial(n - 1);
    }
  };
  console.log( factorial(3) ); // 120
  htmlOut( 'Вычислить факториал',
      exTwo.toString(),
      sumToArithmeticProgression(100),
      'https://learn.javascript.ru/task/factorial'
  );
}

// 6.1.3 Числа Фибоначчи

function exThree() {
  let fibRecursion = (n) => {
    if (n <= 2) {
      return 1;
    } else {
      return fibRecursion(n - 1) + fibRecursion(n - 2);
    }
  };
  function fibBine(n) {
    let index = 5 ** 0.5;
    let left = (1 + index) / 2;
    let right = (1 - index) / 2;
    return Math.round(((left ** n) - (right ** n)) / index);
  }
  function fibIterative(n) {
    if (n <= 2) return 1;
    let x = 1;
    let y = 1;
    let ans = 0;
    for (let i = 2; i < n; i++) {
      ans = x + y;
      x = y;
      y = ans;
    }
    return ans;
  }
  console.log(fibRecursion(7));
  console.log(fibBine(77));
  console.log(fibIterative(77));
  htmlOut( 'Числа Фибоначчи',
      exThree.toString(),
      console.log(fibBine(77)),
      'https://learn.javascript.ru/task/fibonacci-numbers'
  );
}

// 6.1.4 Вывод односвязного списка

function exFour() {
  let list = {
    value: 1,
    next: {
      value: 2,
      next: {
        value: 3,
        next: {
          value: 4,
          next: null,
        },
      },
    },
  };

  function printListIterative(list) {
    let step = list;
    while (step) {
      console.log(Object.values(step)[0]);
      step = Object.values(step)[1];
    }
  }

  function printListRecursion(list) {
    console.log(list.value);
    if (list.next) {
      printListRecursion(list.next);
    }
  }

  printListIterative(list);
  printListRecursion(list);

  htmlOut( 'Вывод односвязного списка',
      exFour.toString(),
      1,
      'https://learn.javascript.ru/task/output-single-linked-list'
  );
}

// 6.1.5 Вывод односвязного списка в обратном порядке

function exFive() {
  let list = {
    value: 1,
    next: {
      value: 2,
      next: {
        value: 3,
        next: {
          value: 4,
          next: null,
        },
      },
    },
  };

  function printReverseListIterative(list) {
    // Решение без использования массива. Почему? Потому что слишком легко!!!
    let step = list;
    let stepCounter = 0;
    while (step) {
      stepCounter++;
      step = step.next;
    }
    for (let i = stepCounter; i > 0; i--) {
      let innerStep = list;
      for (let j = 0; j < i - 1; j++) {
        innerStep = innerStep.next;
      }
      console.log(innerStep.value);
    }
  }

  function printReverseListRecursion(list) {
    let current = list.value;
    if (list.next) {
      printReverseListRecursion(list.next);
    }
    console.log(current);
  }

  printReverseListIterative(list);
  printReverseListRecursion(list);
  htmlOut( 'Вывод односвязного списка в обратном порядке',
      exFive.toString(),
      4,
      'https://learn.javascript.ru/task/output-single-linked-list-reverse'
  );
}

// 6.3.4 Сумма с помощью замыканий

function exSix() {
  function sum(a) {
    return function(b) {
      return a + b;
    };
  }
  console.log(sum(1)(2));
  console.log(sum(5)(-1));
  htmlOut( 'Сумма с помощью замыканий',
      exSix.toString(),
      sum(5)(-1),
      'https://learn.javascript.ru/task/closure-sum'
  );
}

// 6.3.4 Фильтрация с помощью функции

function exSeven() {
  let arr = [1, 2, 3, 4, 5, 6, 7];

  function inBetween(from, to) {
    return function(item) {
      return item >= from && item <= to;
    };
  }

  function inArray(arr) {
    return function(item) {
      // return !!arr.find((finding) => item == finding);
      return arr.includes(item);
    };
  }

  console.log( arr.filter(inBetween(3, 6)) );
  console.log( arr.filter(inArray([1, 2, 10])) );
  htmlOut( 'Фильтрация с помощью функции',
      exSeven.toString(),
      arr.filter(inBetween(3, 6)),
      'https://learn.javascript.ru/task/filter-through-function'
  );
}

// 6.3.6 Сортировать по полю

function exEight() {
  let users = [
    {name: 'John', age: 20, surname: 'Johnson'},
    {name: 'Pete', age: 18, surname: 'Peterson'},
    {name: 'Ann', age: 19, surname: 'Hathaway'},
  ];
  function byField(prop) {
    return (a, b) => a[prop] > b[prop] ? 1 : -1;
  }
  users.sort(byField('name'));
  users.sort(byField('age'));
  console.log(users);
  htmlOut( 'Сортировать по полю',
      exEight.toString(),
      users,
      'https://learn.javascript.ru/task/sort-by-field'
  );
}

// 6.3.7 Армия функций

function exNine() {
  function makeArmy() {
    let shooters = [];

    let i = 0;
    while (i < 10) {
      let number = i;
      let shooter = function() { // функция shooter
        console.log( number ); // должна выводить порядковый номер
      };
      shooters.push(shooter);
      i++;
    }

    return shooters;
  }

  let army = makeArmy();

  army[0](); // у 0-го стрелка будет номер 10
  army[5](); // и у 5-го стрелка тоже будет номер 10
  // ... у всех стрелков будет номер 10, вместо 0, 1, 2, 3...
  htmlOut( 'Армия функций',
      exNine.toString(),
      army[5](),
      'https://learn.javascript.ru/task/make-army'
  );
}

// 6.6.1 Установка и уменьшение значения счётчика

function exTen() {
  function makeCounter() {
    let count = 0;
    function counter() {
      return count++;
    };
    // counter.count = 0;
    counter.set = function(value) {
      count = value;
    };
    counter.decrease = function() {
      count--;
    };

    return counter;
  }

  let counter = makeCounter();

  console.log( counter() ); // 0
  console.log( counter() ); // 1

  counter.set(10); // установить новое значение счётчика

  console.log( counter() ); // 10

  counter.decrease(); // уменьшить значение счётчика на 1

  console.log( counter() ); // 10 (вместо 11)

  htmlOut( 'Установка и уменьшение значения счётчика',
      exTen.toString(),
      1,
      'https://learn.javascript.ru/task/counter-inc-dec'
  );
}

// 6.6.2 Сумма с произвольным количеством скобок

function exEleven() {
  function sum(a) {
    // sum.ans = a;
    let currentSum = a;
    function next(b) {
      // sum.ans += b;
      currentSum += b;
      return next;
    };
    next.toString = function() {
      return currentSum;
      // return sum.ans;
    };
    return next;
  }
  console.log(sum(1)(2));
  console.log(sum(1)(2)(3) == 6);
  console.log(sum(5)(-1)(2));
  console.log(sum(6)(-1)(-2)(-3));
  console.log(sum(0)(1)(2)(3)(4)(5));
  htmlOut( 'Сумма с произвольным количеством скобок',
      exEleven.toString(),
      sum(0)(1)(2)(3)(4)(5),
      'https://learn.javascript.ru/task/sum-many-brackets'
  );
}

// 6.8.1 Вывод каждую секунду

function exTwelve() {
  function printNumbers(from, to) {
    let i = from;

    let timerIdInterval = setInterval(() => {
      if (i >= to ) {
        clearInterval(timerIdInterval);
      }
      console.log(i);
      i++;
    }, 1000);

    // if (i >= to ) {
    //   clearInterval(timerIdInterval);
    // }
  }
  printNumbers(0, 10);
  htmlOut( 'Вывод каждую секунду',
      exTwelve.toString(),
      1,
      'https://learn.javascript.ru/task/output-numbers-100ms'
  );
}
exTwelve();
