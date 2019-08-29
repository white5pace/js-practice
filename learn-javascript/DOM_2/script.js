/* eslint-disable max-len */
'use strict';

// Введение в события

function htmlOut(exCode, pOne, execution) {
  exCode.previousElementSibling.onclick = function() {
    this.style.display = 'none';
    exCode.style.display = 'block';
    exCode.innerHTML = pOne;
    exCode.parentElement.style.justifyContent = 'start';
    Prism.highlightElement(exCode);
    execution();
  };
};

// 1.3.1 Дочерние элементы в DOM

function exOne() {
  let ex = document.getElementById('1.3.1');
  let exBody = ex.querySelector('.ex-body');
  let exCode = ex.querySelector('.ex-code');

  function execution() {
    exBody.firstElementChild.style.background = 'red'; // Получили элемент div
    exBody.lastElementChild.style.background = 'green'; // Получили элемент ul
    exBody.lastElementChild.children[1].style.background = 'yellow'; // Получили второй li
    console.log(exBody.children);
  }

  htmlOut(exCode,
      exOne.toString(),
      execution);
}
exOne();
