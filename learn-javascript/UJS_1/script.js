'use strict';

// ООП в прототипном стиле


function htmlOut(hOne, pOne, output, link) {
  document.getElementById('hOne').innerHTML = hOne;
  if (link) {
    document.getElementById('linkTo').href = link;
    document.getElementById('linkTo').style.display = "block";
  } else {
    document.getElementById('linkTo').style.display = "none";
  }
  document.getElementById('Output').innerHTML = "Выходящее значение: " + output;
  var codeOut = document.getElementById('pOne');

  if (pOne) {
    codeOut.style.display = 'block';
    document.getElementsByClassName('pOne__desc')[0].style.display = 'block';
    codeOut.innerHTML = pOne;
    Prism.highlightElement(codeOut);
  } else {
    document.getElementById('pOne__desc').style.display = 'none';
    codeOut.style.display = "none";
  }
};

// 2.1.1-2 Вызвать alert с помощью внешнего скрипта

function exOne() {
  alert('Привет, мир');
  htmlOut('Вызвать alert с помощью внешнего скрипта', exOne.toString(),true , 'https://learn.javascript.ru/task/hello-alert-ext' );
}

// 2.1.1-2 Работа с переменными

function exTwo() {
  let admin, name;
  name = 'Джон';
  admin = name;
  console.log(admin);
  let Earth;
  let newUser;
  const BIRTHDAY = '17.10.1996';

  htmlOut('Работа с переменными', exTwo.toString(),admin , 'https://learn.javascript.ru/variables#tasks' );
}
