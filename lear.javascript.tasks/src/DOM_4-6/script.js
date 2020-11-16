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
    //     '<div class="edit-controls">
    //      <Button class="edit-ok">OK</Button>
    //      <Button class="edit-cancel">CANCEL</Button></div>'
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


// 4.2.3 Мышь, управляемая клавиатурой

function exFour() {
  let ex = document.getElementById('4.2.3');
  let exBody = ex.querySelector('.ex-body');
  let exCode = ex.querySelector('.ex-code');

  let mouse = exBody.querySelector('.mouse');

  mouse.setAttribute('tabindex', '0');
  mouse.addEventListener('focus', function() {
    let coords = mouse.getBoundingClientRect();
    mouse.style.position = 'fixed';
    mouse.style.left = coords.left + 'px';
    mouse.style.top = coords.top + 'px';

    mouse.addEventListener('keydown', function(event) {
      coords = mouse.getBoundingClientRect();
      if (event.code == 'ArrowUp') {
        event.preventDefault();
        mouse.style.top = coords.top - 50 + 'px';
      } else if (event.code == 'ArrowRight') {
        mouse.style.left = coords.left + 50 + 'px';
      } else if (event.code == 'ArrowDown') {
        event.preventDefault();
        mouse.style.top = coords.top + 50 + 'px';
      } else if (event.code == 'ArrowLeft') {
        mouse.style.left = coords.left - 50 + 'px';
      }
    });
  });

  function execution() {}
  htmlOut(exCode,
      exFour.toString(),
      execution);
}
exFour();

// 4.3.1 Модальное диалоговое окно с формой

function exFive() {
  let ex = document.getElementById('4.3.1');
  let exBody = ex.querySelector('.ex-body');
  let exCode = ex.querySelector('.ex-code');

  let form = document.forms.calculator;
  changeDiagram();

  form.money.addEventListener('input', changeDiagram);

  form.months.addEventListener('change', changeDiagram);

  form.interest.addEventListener('input', changeDiagram);

  function changeDiagram() {
    let initial = form.money.value;
    let years = form.months.value / 12;
    let interest = form.interest.value / 100;

    // нужен обработчик ошибок, если поле пустое

    let result = Math.round(initial * (1 + interest * years));
    let heightAfter = interest * years * 100 + 100;

    document.querySelector('.money-before').innerHTML = initial;
    document.querySelector('.money-after').innerHTML = result;
    document.querySelector('.height-after').style.height = heightAfter + 'px';
  }

  function execution() {}
  htmlOut(exCode,
      exFive.toString(),
      execution);
}
exFive();

// 4.4.1 Депозитный калькулятор

function exSix() {
  let ex = document.getElementById('4.4.1');
  let exBody = ex.querySelector('.ex-body');
  let exCode = ex.querySelector('.ex-code');

  let modalWindow = exBody.querySelector('.prompt-form-container');
  let showModal = exBody.querySelector('.showModal');

  showModal.onclick = function() {
    showPrompt('Введите что-нибудь<br>...умное :)', function(value) {
      alert(value);
    });
  };
  function showPrompt(html, callback) {
    let message = modalWindow.querySelector('.prompt-message');
    let form = modalWindow.querySelector('.prompt-form');

    message.innerHTML = html;
    modalWindow.style.display = 'block';
    form.text.value = '';

    form.text.focus();

    form.addEventListener('submit', function(event) {
      event.preventDefault();
      if (form.text.value == '') return;
      callback(form.text.value);
      modalWindow.style.display = 'none';
    });

    form.addEventListener('keydown', function(e) {
      if (e.code == 'Escape') {
        form.cancel.click();
      }
    });

    let lastElem = form.elements[form.elements.length - 1];
    let firstElem = form.elements[0];

    lastElem.onkeydown = function(e) {
      if (e.key == 'Tab' && !e.shiftKey) {
        firstElem.focus();
        return false;
      }
    };

    firstElem.onkeydown = function(e) {
      if (e.key == 'Tab' && e.shiftKey) {
        lastElem.focus();
        return false;
      }
    };

    form.cancel.onclick = function() {
      callback(null);
      modalWindow.style.display = 'none';
    };
  }

  function execution() {}
  htmlOut(exCode,
      exSix.toString(),
      execution);
}
exSix();

// 5.3.1 Загрузите изображения с колбэком

function exSeven() {
  let ex = document.getElementById('5.3.1');
  let exBody = ex.querySelector('.ex-body');
  let exCode = ex.querySelector('.ex-code');

  function preloadImages(links, callback) {
    let counter = 0;
    for (let link of links) {
      let img = document.createElement('img');
      img.onload = img.onerror = () => {
        counter++;
        if (counter == links.length) callback();
      };
      img.src = link;
    }
  }

  let sources = [
    'https://en.js.cx/images-load/1.jpg',
    'https://en.js.cx/images-load/2.jpg',
    'https://en.js.cx/images-load/3.jpg',
  ];

  // добавляем случайные символы к ссылкам, чтобы избежать кеширования
  for (let i = 0; i < sources.length; i++) {
    sources[i] += '?' + Math.random();
  }

  // для каждого изображения
  // создадим другое изображение с аналогичным
  // src и проверим, есть ли у нас его ширина
  function testLoaded() {
    let widthSum = 0;
    for (let i = 0; i < sources.length; i++) {
      let img = document.createElement('img');
      img.src = sources[i];
      widthSum += img.width;
    }
    alert(`5.3.1 onload: ${widthSum}`);
  }

  preloadImages(sources, testLoaded);
  htmlOut(exCode,
      exSeven.toString(),
      execution);
}
exSeven();
