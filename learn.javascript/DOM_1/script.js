'use strict';

// Документ

function htmlOut(perform,pOne,execution,link) {
  let codeOut = perform.children[1];
  perform.children[0].onclick = function(){
    this.style.display = 'none';
    codeOut.style.display = 'block';
    codeOut.innerHTML = pOne;
    Prism.highlightElement(codeOut);
    execution();
  }
};

// 1.3.1 Дочерние элементы в DOM

function exOne() {
  let ex = document.getElementById('1.3.1');
  let exBody = ex.children[1].children[0];
  let perform = ex.children[1].children[1];
  function execution() {
    exBody.children[0].style.background = 'red'; // Получили элемент div
    exBody.children[1].style.background = 'green'; // Получили элемент ul
    exBody.children[1].children[1].style.background = 'yellow'; // Получили второй li
    console.log(exBody.children)
  }
  htmlOut(perform, exOne.toString(),execution, 'https://learn.javascript.ru/task/search-algorithm' );
}
exOne();

// 1.3.3 Выделите ячейки по диагонали

function exTwo() {
  let ex = document.getElementById('1.3.3');
  let exBody = ex.children[1].children[0];
  let perform = ex.children[1].children[1];
  function execution() {
    let table = exBody.children[0];
    for (let i = 0; i < table.rows.length; i++) {
      table.rows[i].cells[i].style.background = 'red';
    }
  }
  htmlOut(perform, exTwo.toString(),execution, 'https://learn.javascript.ru/task/search-algorithm' );
}
exTwo();

// 1.4 Поиск элементов

function exThree() {
  let ex = document.getElementById('1.4');
  let exBody = ex.children[1].children[0];
  let perform = ex.children[1].children[1];
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
    console.log(searchInputs[0])
    console.log(searchInputs[1])
  }
  htmlOut(perform, exTwo.toString(),execution, 'https://learn.javascript.ru/task/search-algorithm' );
}
exThree();

  
