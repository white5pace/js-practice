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

// 4.2.1 Скрыть элемент по нажатию кнопки

function exTwo() {
  let ex = document.getElementById('4.2.1');
  let exBody = ex.querySelector('.ex-body');
  let exCode = ex.querySelector('.ex-code');

  exBody.querySelector('.view').remove();
  returnView('');

  function createEdit(text) {
    let edit = document.createElement('textarea');
    edit.className = 'edit';
    edit.value = text;

    edit.onblur = function() {
      this.remove();
      returnView(this.value);
    };

    edit.addEventListener('keydown', function(event) {
      if (event.code == 'Enter') {
        this.blur();
      }
    });

    exBody.append(edit);
    edit.focus();
  }

  function returnView(text) {
    let view = document.createElement('div');
    view.className = 'view';
    view.innerHTML = text;
    view.setAttribute('tabindex', '0');

    view.addEventListener('focus', function() {
      createEdit(this.innerHTML);
      view.remove();
    });

    exBody.append(view);
  }

  function execution() {}
  htmlOut(exCode,
      exTwo.toString(),
      execution);
}
exTwo();
