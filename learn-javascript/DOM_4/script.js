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

  let table = exBody.querySelector('.bagua-table');
  let editing = false;
  let area = null;
  let td;
  let savedHTML;

  // editingTd = {
  //   elem: td,
  //   data: td.innerHTML
  // };
  table.addEventListener('click', startEdit);

  function startEdit(event) {
    if (event.target.tagName != 'TD') return;
    if (editing) return;

    td = event.target;
    editing = true;

    savedHTML = td.innerHTML;

    // editingTd = {
    //   elem: td,
    //   data: td.innerHTML
    // };

    area = document.createElement('textarea');
    area.className = 'edit';
    area.value = td.innerHTML;

    td.innerHTML = '';
    td.append(area);

    td.classList.add('td-edit');

    createControls();
  }

  function createControls() {
    let editControls = document.createElement('div');
    editControls.className = 'edit-controls';

    let editOk = document.createElement('button');
    editOk.className = 'edit-ok';
    editOk.innerHTML = 'ok';
    editOk.onclick = function() {
      endEdit(true);
    };
    editControls.append(editOk);

    let editCancel = document.createElement('button');
    editCancel.className = 'edit-cancel';
    editCancel.innerHTML = 'cancel';
    editCancel.onclick = function() {
      endEdit(false);
    };
    editControls.append(editCancel);

    td.append(editControls);

    // td.insertAdjacentHTML('beforeEnd',
    //     '<div class="edit-controls"><button class="edit-ok">OK</button><button class="edit-cancel">CANCEL</button></div>'
    // );
  }

  function endEdit(confirm) {
    editing = false;
    if (confirm) {
      td.innerHTML = area.value;
    } else {
      td.innerHTML = savedHTML;
    }
    td.classList.remove('td-edit');
  }

  function execution() {}
  htmlOut(exCode,
      exThree.toString(),
      execution);
}
exThree();
