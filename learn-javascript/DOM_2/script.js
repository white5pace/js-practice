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

// 2.1.1 Скрыть элемент по нажатию кнопки

function exOne() {
  let ex = document.getElementById('2.1.1');
  let exBody = ex.querySelector('.ex-body');
  let exCode = ex.querySelector('.ex-code');

  let btn = exBody.querySelector('.toggle-text');
  let text = exBody.querySelector('.text');

  btn.addEventListener('click', handler);

  function handler() {
    if (text.style.display == 'none') {
      text.style.display = 'block';
    } else {
      text.style.display = 'none';
    }
  }
  function execution() {}
  htmlOut(exCode,
      exOne.toString(),
      execution);
}
exOne();

// 2.1.2 Спрятать себя

function exTwo() {
  let ex = document.getElementById('2.1.2');
  let exBody = ex.querySelector('.ex-body');
  let exCode = ex.querySelector('.ex-code');

  let btn = exBody.querySelector('.hide-self');
  btn.addEventListener('click', function() {
    this.style.display = 'none';
  });
  function execution() {}
  htmlOut(exCode,
      exTwo.toString(),
      execution);
}
exTwo();

// 2.1.4 Передвиньте мяч по полю

function exThree() {
  let ex = document.getElementById('2.1.4');
  let exBody = ex.querySelector('.ex-body');
  let exCode = ex.querySelector('.ex-code');

  let field = exBody.querySelector('.field');
  let fieldDots = '. ';
  field.append(fieldDots.repeat(1000));

  let ball = exBody.querySelector('.ball');

  field.onclick = function(e) {
    let fieldCoords = field.getBoundingClientRect();
    let fieldStyles = getComputedStyle(field);
    let borderWidth = parseInt(fieldStyles.borderWidth);

    let ballSize = parseInt(getComputedStyle(ball).width);

    let fieldBorders = {
      left: Math.round(fieldCoords.x + borderWidth),
      top: Math.round(fieldCoords.y + borderWidth),
      right: Math.round(fieldCoords.right - borderWidth),
      bottom: Math.round(fieldCoords.bottom - borderWidth),
    };

    function checkBorderX(mouseCords) {
      if (mouseCords < fieldBorders.left + ballSize / 2) {
        return fieldBorders.left + ballSize / 2;
      }
      if (mouseCords > fieldBorders.right - ballSize / 2) {
        return fieldBorders.right - ballSize / 2;
      }
      return mouseCords;
    }
    function checkBorderY(mouseCords) {
      if (mouseCords < fieldBorders.top + ballSize / 2) {
        return fieldBorders.top + ballSize / 2;
      }
      if (mouseCords > fieldBorders.bottom - ballSize / 2) {
        return fieldBorders.bottom - ballSize / 2;
      }
      return mouseCords;
    }
    let x = checkBorderX(e.clientX);
    let y = checkBorderY(e.clientY);

    ball.style.left = x - fieldBorders.left - ballSize / 2 + 'px';
    ball.style.top = y - fieldBorders.top - ballSize / 2 + 'px';
  };
  function execution() {}
  htmlOut(exCode,
      exThree.toString(),
      execution);
}
exThree();

// 2.1.5 Создать раскрывающееся меню

function exFour() {
  let ex = document.getElementById('2.1.5');
  let exBody = ex.querySelector('.ex-body');
  let exCode = ex.querySelector('.ex-code');

  let sweeties = exBody.querySelector('.sweeties');
  let toggleList = exBody.querySelector('.toggle-list');

  toggleList.onclick = function() {
    sweeties.classList.toggle('closed');
  };

  function execution() {}
  htmlOut(exCode,
      exFour.toString(),
      execution);
}
exFour();
