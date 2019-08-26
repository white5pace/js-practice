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

// 1.6 Получите атрибут

function exFive() {
  let ex = document.getElementById('1.6');
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

// 1.7 Сделайте внешние ссылки оранжевыми

function exSix() {
  let ex = document.getElementById('1.7');
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


