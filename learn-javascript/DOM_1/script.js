/* eslint-disable max-len */
'use strict';

// Документ

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

// 1.3.3 Выделите ячейки по диагонали

function exTwo() {
  let ex = document.getElementById('1.3.3');
  let exBody = ex.querySelector('.ex-body');
  let exCode = ex.querySelector('.ex-code');

  function execution() {
    let table = exBody.children[0];
    for (let i = 0; i < table.rows.length; i++) {
      table.rows[i].cells[i].style.background = 'red';
    }
  }

  htmlOut(exCode,
      exTwo.toString(),
      execution);
}
exTwo();

// 1.4 Поиск элементов

function exThree() {
  let ex = document.getElementById('1.4');
  let exBody = ex.querySelector('.ex-body');
  let exCode = ex.querySelector('.ex-code');

  function execution() {
    let table = exBody.querySelector('#age-table');
    let label = table.getElementsByTagName('label');
    let firstTd = table.getElementsByTagName('td')[0];
    let searchForm = document.getElementsByName('search')[0];
    let searchInputs = searchForm.querySelectorAll('input');
    console.log(table);
    console.log(label);
    console.log(firstTd);
    console.log(searchForm);
    console.log(searchInputs[0]);
    console.log(searchInputs[1]);
  }
  htmlOut(exCode,
      exThree.toString(),
      execution);
}
exThree();

// 1.5 Считаем потомков

function exFour() {
  let ex = document.getElementById('1.5');
  let exBody = ex.querySelector('.ex-body');
  let exCode = ex.querySelector('.ex-code');

  function execution() {
    for (let li of exBody.querySelectorAll('li')) {
      console.log(li.firstChild.data.trim() + ': ' + li.getElementsByTagName('li').length);
    }
  }
  htmlOut(exCode,
      exFour.toString(),
      execution);
}
exFour();

// 1.6.1 Получите атрибут

function exFive() {
  let ex = document.getElementById('1.6.1');
  let exBody = ex.querySelector('.ex-body');
  let exCode = ex.querySelector('.ex-code');

  function execution() {
    let atr = exBody.querySelector('[data-widget-name]');
    console.log(atr.dataset.widgetName);
  }

  htmlOut(exCode,
      exFive.toString(),
      execution);
}
exFive();

// 1.6.2 Сделайте внешние ссылки оранжевыми

function exSix() {
  let ex = document.getElementById('1.6.2');
  let exBody = ex.querySelector('.ex-body');
  let exCode = ex.querySelector('.ex-code');

  let links = exBody.querySelector('ul').querySelectorAll('a');

  function execution() {
    for (let link of links) {
      let address = link.getAttribute('href');
      let external = false;
      for (let i = 0; i < address.length; i++) {
        if (address[i] == ':') {
          external = true;
        }
      }
      if (external && address.slice(0, 19) != 'http://internal.com') {
        link.style.color = 'orange';
      }
    }
  }

  htmlOut(exCode,
      exSix.toString(),
      execution);
}
exSix();

// 1.7.2 Сделайте внешние ссылки оранжевыми

function exEight() {
  let ex = document.getElementById('1.7.2');
  let exBody = ex.querySelector('.ex-body');
  let exCode = ex.querySelector('.ex-code');

  function execution() {
    let elem = exBody.querySelector('#elem');
    function clear(elem) {
      while (elem.firstChild) {
        elem.firstChild.remove();
      }
    }
    clear(elem);
  }

  htmlOut(exCode,
      exEight.toString(),
      execution);
}
exEight();

// 1.7.4 Создайте список

function exNine() {
  let ex = document.getElementById('1.7.4');
  let exBody = ex.querySelector('.ex-body');
  let exCode = ex.querySelector('.ex-code');

  let ul = document.createElement('ul');
  exBody.append(ul);

  function execution() {
    let list = exBody.querySelector('ul');

    while (true) {
      let addLi = prompt('What is new li', '');

      if (addLi == null || addLi == '') break;

      let newLi = document.createElement('li');
      newLi.textContent = addLi;
      list.append(newLi);
    }
  }

  htmlOut(exCode,
      exNine.toString(),
      execution);
}
exNine();

// 1.7.5 Создайте дерево из объекта

function exTen() {
  let ex = document.getElementById('1.7.5');
  let exBody = ex.querySelector('.ex-body');
  let exCode = ex.querySelector('.ex-code');

  let data = {
    'Рыбы': {
      'форель': {},
      'лосось': {},
    },

    'Деревья': {
      'Огромные': {
        'секвойя': {},
        'дуб': {},
      },
      'Цветковые': {
        'яблоня': {},
        'магнолия': {},
      },
    },
  };
  let nowList = exBody;
  let goBack = exBody;
  function goThrough(obj) {
    for (let key in obj) {
      if (Object.keys(obj[key]).length > 0) {
        let newList = document.createElement('ul');
        let li = document.createElement('li');

        li.textContent = key;
        newList.append(li);
        nowList.append(newList);
        let secondList = document.createElement('ul');
        newList.append(secondList);
        nowList = secondList;
        console.log(`is first ${key}`);
        goThrough(obj[key]);
      } else {
        let li = document.createElement('li');
        li.textContent = key;
        nowList.append(li);
        console.log(`is second ${key}`);
      }
    }
  };
  goThrough(data);

  htmlOut(exCode,
      exTen.toString(),
      execution);
}
exTen();


