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

// 3.1.1 Скрыть элемент по нажатию кнопки

function exOne() {
  let ex = document.getElementById('2.1.1');
  let exBody = ex.querySelector('.ex-body');
  let exCode = ex.querySelector('.ex-code');
  function execution() {}
  htmlOut(exCode,
      exOne.toString(),
      execution);
}
exOne();
