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

// 1 Алгоритм для поиска

function exOne() {
  var head = {
    glasses: 1
  };
  
  var table = {
    pen: 3
  };
  table.__proto__ = head;
  
  var bed = {
    sheet: 1,
    pillow: 2
  };
  bed.__proto__ = table;

  var pockets = {
    money: 2000
  };
  pockets.__proto__ = bed;

  console.log(pockets.pen == 3);
  console.log(bed.glasses == 1);
  console.log(table.money == undefined);


  htmlOut('Добавить метод и свойство кофеварке', exOne.toString(),true , 'https://learn.javascript.ru/task/search-algorithm' );
}

// 2 Создать объект тем же конструктором

function exTwo() {
  var animal = {
    name: 'Cat'
  }
  function ObjCon(name){
    this.name = name;
  }
  ObjCon.prototype = animal; // Без - верно. С - неверно 
  var obj = new ObjCon('vasya');
  console.log(obj.name);
  console.log(obj.constructor);

  var obj2 = new obj.constructor('petya');
  console.log(obj2);

  htmlOut('Создать объект тем же конструктором', exTwo.toString(),true , 'https://learn.javascript.ru/task/new-object-same-constructor' );
}

// 3 Добавить функциям defer

function exThree() {
  Function.prototype.defer = function(time) {
    var savedThis = this;
    setTimeout(savedThis,time);
  }

  function f() {
    console.log( "привет" );
  }
  
  f.defer(1000); // выведет "привет" через 1 секунду
  // обавьте всем функциям в прототип метод defer(ms), который откладывает вызов функции на ms миллисекунд.
  // После этого должен работать такой код:

  htmlOut('Добавить функциям defer', exThree.toString(), 'привет', 'https://learn.javascript.ru/task/defer-to-prototype' );
}

// 4 Добавить функциям defer с аргументами

function exFour() {
  Function.prototype.defer = function(time) {
    var savedThis = this;

    return function(a,b) {
      setTimeout(function(){
        savedThis(a,b);
      },time);
    }
  }

  function f(a, b) {
    console.log( a + b );
  }
  
  f.defer(1000)(1,2); 
  htmlOut('Добавить функциям defer с аргументами', exFour.toString(), true, 'https://learn.javascript.ru/task/defer-to-prototype-extended' );
}

// 5 Создать сеттер для onReady

function exFive() {

  htmlOut('Создать сеттер для onReady', exFive.toString(), 'Кофе готов: 150 мл', 'https://learn.javascript.ru/task/setter-onready' );
}

// 6 Добавить метод isRunning

function exSix() {

  htmlOut('Добавить метод isRunning', exSix.toString(), 'Кофе готов: 150 мл', 'https://learn.javascript.ru/task/coffeemachine-add-isrunning' );
}

// 7 Запускать только при включённой кофеварке

function exSeven() {

  htmlOut('Запускать только при включённой кофеварке', exSeven.toString(), 'True', 'https://learn.javascript.ru/task/coffeemachine-fix-run' );
}

// 8 Останавливать кофеварку при выключении

function exEight() {

  htmlOut('Останавливать кофеварку при выключении', exEight.toString(), 'True', 'https://learn.javascript.ru/task/coffeemachine-disable-stop' );
}

// 9 Унаследуйте холодильник

function exNine() {

  htmlOut('Унаследуйте холодильник', exNine.toString(), 'True', 'https://learn.javascript.ru/task/inherit-fridge' );
}

// 10 Добавьте методы в холодильник

function exTen() {

  htmlOut('Добавьте методы в холодильник', exTen.toString(), 'True', 'https://learn.javascript.ru/task/add-methods-fridge' );
}


// 11 Переопределите disable

function exEleven() {

  htmlOut('Переопределите disable', exEleven.toString(), 'True', 'https://learn.javascript.ru/task/override-disable' );
}

