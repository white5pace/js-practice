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

// 4.1.1 Скрыть элемент по нажатию кнопки

function exOne() {
  let ex = document.getElementById('3.1.1');
  let exBody = ex.querySelector('.ex-body');
  let exCode = ex.querySelector('.ex-code');

  let ul = exBody.querySelector('.ul');

  ul.onmousedown = () => false;

  ul.addEventListener('click', function(e) {
    if (e.target.tagName != 'LI') return;

    if (e.ctrlKey || e.metaKey) {
      toggleSelect(e.target);
    } else {
      singleSelect(e.target);
    }
  });

  function toggleSelect(target) {
    target.classList.toggle('selected');
  }

  function singleSelect(target) {
    let selected = ul.querySelectorAll('.selected');
    for (let elem of selected) {
      elem.classList.remove('selected');
    }
    target.classList.add('selected');
  }

  function execution() {}
  htmlOut(exCode,
      exOne.toString(),
      execution);
}
exOne();
