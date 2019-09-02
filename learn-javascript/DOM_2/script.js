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

// 2.1.6 Добавить кнопку закрытия

function exFive() {
  let ex = document.getElementById('2.1.6');
  let exBody = ex.querySelector('.ex-body');
  let exCode = ex.querySelector('.ex-code');
  let removeButtons = exBody.querySelectorAll('.remove-button');

  for (let button of removeButtons) {
    button.onclick = function() {
      this.parentElement.remove();
    };
  }

  function execution() {}
  htmlOut(exCode,
      exFive.toString(),
      execution);
}
exFive();

// 2.1.7 Карусель

function exSix() {
  let ex = document.getElementById('2.1.7');
  let exBody = ex.querySelector('.ex-body');
  let exCode = ex.querySelector('.ex-code');

  let carousel = exBody.querySelector('.carousel');
  let images = carousel.querySelector('ul');
  let imagesSize = parseInt(getComputedStyle(carousel.querySelector('img')).width);
  let buttonLeft = carousel.firstElementChild;
  let buttonRight = carousel.lastElementChild;

  let carouselScreenSize = imagesSize * 3;
  let imgAmount = images.children.length;
  let maxRight = - (imgAmount * imagesSize - carouselScreenSize);

  buttonRight.onclick = function() {
    let translated = + getComputedStyle(images).getPropertyValue('transform').match(/(-?[0-9\.]+)/g).slice(-2, -1);
    let step = -carouselScreenSize + translated;
    if (step > maxRight) {
      images.style.transform = `translate(${step}px, 0)`;
    } else {
      images.style.transform = `translate(${maxRight}px, 0)`;
    }
  };

  buttonLeft.onclick = function() {
    let translated = + getComputedStyle(images).getPropertyValue('transform').match(/(-?[0-9\.]+)/g).slice(-2, -1);
    let step = carouselScreenSize + translated;
    images.style.transform = `translate(${step}px, 0)`;
    if (step < 0) {
      images.style.transform = `translate(${step}px, 0)`;
    } else {
      images.style.transform = `translate(${0}px, 0)`;
    }
  };

  function execution() {}
  htmlOut(exCode,
      exSix.toString(),
      execution);
}
exSix();

// 2.3.1 Спрячьте сообщения с помощью делегирования

function exSeven() {
  let ex = document.getElementById('2.3.1');
  let exBody = ex.querySelector('.ex-body');
  let exCode = ex.querySelector('.ex-code');

  exBody.addEventListener('click', function(event) {
    if (event.target.tagName == 'BUTTON') {
      event.target.parentElement.remove();
    }
    // let pane = event.target.closest('.pane');
    // pane.remove();
  });
  function execution() {}
  htmlOut(exCode,
      exSeven.toString(),
      execution);
}
exSeven();

// 2.3.2 Раскрывающееся дерево

function exEight() {
  let ex = document.getElementById('2.3.2');
  let exBody = ex.querySelector('.ex-body');
  let exCode = ex.querySelector('.ex-code');

  let tree = exBody.querySelector('.tree');

  function styling() {
    let allLI = exBody.querySelectorAll('li');
    for (let li of allLI) {
      if (li.children[0]) {
        let span = document.createElement('span');
        li.prepend(span);
        span.append(span.nextSibling);
      }
    }
  }
  styling();

  tree.addEventListener('click', function(event) {
    let targetInnerList = event.target.nextSibling;

    if (event.target.tagName != 'SPAN') return;

    targetInnerList.hidden = !targetInnerList.hidden;
  });

  function execution() {}
  htmlOut(exCode,
      exEight.toString(),
      execution);
}
exEight();
