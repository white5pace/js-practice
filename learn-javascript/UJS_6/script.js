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
exFive();
