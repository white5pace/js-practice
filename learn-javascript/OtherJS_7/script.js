'use strict';

function htmlOut(hOne, pOne, output, link) {
  document.getElementById('hOne').innerHTML = hOne;
  if (link) {
    document.getElementById('linkTo').href = link;
    document.getElementById('linkTo').style.display = 'block';
  } else {
    document.getElementById('linkTo').style.display = 'none';
  }
  document.getElementById('Output').innerHTML = 'Выходящее значение: ' + output;
  const codeOut = document.getElementById('pOne');

  if (pOne) {
    codeOut.style.display = 'block';
    document.getElementsByClassName('pOne__desc')[0].style.display = 'block';
    codeOut.innerHTML = pOne;
    Prism.highlightElement(codeOut);
  } else {
    document.getElementById('pOne__desc').style.display = 'none';
    codeOut.style.display = 'none';
  }
};

// 2.1.1 Соедините типизированные массивы

function exOne() {
  function kus() {
    let here = document.querySelector('.task__code code');
    // console.log(here);
    here.innerHTML = exOne.toString();
    Prism.highlightElement(here);
  };
  function kus() {
    let here = document.querySelector('.task__code code');
    // console.log(here);
    here.innerHTML = exOne.toString();
    Prism.highlightElement(here);
  };
}
document.onload = function() {

};
let here = document.querySelector('.task__code code');

here.innerHTML = exOne.toString();
