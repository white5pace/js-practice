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

// 2.1.1 Соедините типизированные массивы

function exOne() {
  function concat(arrays) {
    let totalLength = arrays.reduce((acc, value) => acc + value.length, 0);

    if (!arrays.length) return [];

    let result = new Uint8Array(totalLength);

    let offset = 0;
    for (let array of arrays) {
      result.set(array, offset);
      offset += array.length;
    }
    return result;
  }


  let chunks = [
    new Uint8Array([0, 1, 2]),
    new Uint8Array([3, 4, 5]),
    new Uint8Array([6, 7, 8]),
  ];
  console.log(Array.from(concat(chunks))); // 0, 1, 2, 3, 4, 5, 6, 7, 8

  console.log(concat(chunks).constructor.name); // Uint8Array
  htmlOut( 'Соедините типизированные массивы',
      exOne.toString(),
      concat(chunks).constructor.name,
      'https://learn.javascript.ru/task/concat'
  );
}

