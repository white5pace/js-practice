'use strict';

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

function elevenOneOne() {
  let ex = document.getElementById('11.1.1');
  let exBody = ex.querySelector('.ex-body');
  let exCode = ex.querySelector('.ex-code');

  exBody.querySelector('Button').onclick = function() {
    showCircle(0, 0, 100);
  };

  let circle = null;
  function showCircle(cx, cy, radius) {
    if (circle) return;
    let div = document.createElement('div');
    div.style.width = 0;
    div.style.height = 0;
    div.style.left = cx + 'px';
    div.style.top = cy + 'px';
    div.className = 'circle';
    exBody.append(div);
    circle = div;
    setTimeout(() => {
      div.style.width = radius * 2 + 'px';
      div.style.height = radius * 2 + 'px';
    }, 0);
  }

  function execution() {}
  htmlOut(exCode,
      elevenOneOne.toString(),
      execution);
}
elevenOneOne();
