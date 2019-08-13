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

// 4.1.1 Привет, object

function exOne() {
  
  htmlOut( 'Привет, object',
   exOne.toString(),
   true,
    'https://learn.javascript.ru/variables#tasks' 
  );
}
