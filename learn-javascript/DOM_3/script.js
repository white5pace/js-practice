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

// 3.1.1 Скрыть элемент по нажатию кнопки

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

// 3.2.1 Улучшенная подсказка

function exTwo() {
  let ex = document.getElementById('3.2.1');
  let exBody = ex.querySelector('.ex-body');
  let exCode = ex.querySelector('.ex-code');

  let tooltip;
  exBody.onmouseover = function(e) {
    let target = e.target.closest('[data-tooltip]');

    if (!target) return;

    showTooltip(target);
  };

  exBody.onmouseout = function(e) {
    if (tooltip) {
      tooltip.remove();
      tooltip = false;
    }
  };
  function showTooltip(target) {
    tooltip = document.createElement('div');
    tooltip.className = 'my-tooltip';
    tooltip.innerHTML = target.dataset.tooltip;
    exBody.append(tooltip);

    let coords = target.getBoundingClientRect();

    tooltip.style.top = coords.y - tooltip.offsetHeight + 'px';
    tooltip.style.left = coords.x + coords.width / 2
      - tooltip.offsetWidth / 2 + 'px';

    if (coords.y < tooltip.offsetHeight) {
      tooltip.style.top = coords.bottom + 'px';
    }
  }
  function execution() {}
  htmlOut(exCode,
      exTwo.toString(),
      execution);
}
exTwo();
