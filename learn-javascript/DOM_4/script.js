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

// 4.1.1 Добавьте пункт к выпадающему списку

function exOne() {
  let ex = document.getElementById('4.1.1');
  let exBody = ex.querySelector('.ex-body');
  let exCode = ex.querySelector('.ex-code');

  let select = exBody.querySelector('select.genres');
  let newOption = new Option('Классика', 'classic', false, true);
  select.append(newOption);

  function execution() {}
  htmlOut(exCode,
      exOne.toString(),
      execution);
}
exOne();

// 4.2.1 Редактируемый div

function exTwo() {
  let ex = document.getElementById('4.2.1');
  let exBody = ex.querySelector('.ex-body');
  let exCode = ex.querySelector('.ex-code');

  let area = null;
  let view = exBody.querySelector('.view');

  view.addEventListener('click', startEdit);

  function startEdit() {
    area = document.createElement('textarea');
    area.className = 'edit';
    area.value = view.innerHTML;

    area.onblur = function() {
      endEdit();
    };

    area.addEventListener('keydown', function(event) {
      if (event.code == 'Enter') {
        this.blur();
      }
    });

    view.replaceWith(area);
    area.focus();
  }

  function endEdit() {
    view.innerHTML = area.value;
    area.replaceWith(view);
  }

  function execution() {}
  htmlOut(exCode,
      exTwo.toString(),
      execution);
}
exTwo();

// 4.2.2 Редактирование TD по клику

function exThree() {
  let ex = document.getElementById('4.2.2');
  let exBody = ex.querySelector('.ex-body');
  let exCode = ex.querySelector('.ex-code');

  function execution() {}
  htmlOut(exCode,
      exThree.toString(),
      execution);
}
exThree();
