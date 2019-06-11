'use strict';

// Некоторые другие возможности


function htmlOut(hOne, pOne, output, link) {
  document.getElementById('hOne').innerHTML = hOne;
  if (link) {
    document.getElementById('linkTo').href = link;
    document.getElementById('linkTo').style.display = "block";
  } else {
    document.getElementById('linkTo').style.display = "none";
  }
  document.getElementById('pOne').innerHTML = "<b>Код решения:</b> <br><br>" + pOne;
  document.getElementById('Output').innerHTML = "Выходящее значение: " + output;
};

// 1 Полиморфная функция formatDate

function exOne() {
  function formatDate(date) {
    var parsed;
    var options = {
      day: '2-digit',
      month: '2-digit',
      year: '2-digit',
    };
    function checkType() {
      return {}.toString.call(date).slice(8, -1);
    };

    if(checkType() == 'String'){
      parsed = new Date(Date.parse(date));
    }else if(checkType() == 'Number'){
      parsed = new Date(date);
    }else if(checkType() == 'Array'){
      parsed = new Date(date[0], date[1], date[2]);
    }else if(checkType() == 'Date'){
      parsed = date;
    }
    return parsed.toLocaleString("ru", options);
  }
  console.log(formatDate('2011-10-02')); // 02.10.11
  console.log( formatDate(1234567890) ); // 14.02.09
  console.log( formatDate([2014, 0, 1]) ); // 01.01.14
  console.log( formatDate(new Date(2014, 0, 1)) ); // 01.01.14

  htmlOut('Полиморфная функция formatDate', exOne.toString(),formatDate(new Date(2014, 0, 1)), 'https://learn.javascript.ru/class-instanceof#polimorfnaya-funktsiya-formatdate' );
}
