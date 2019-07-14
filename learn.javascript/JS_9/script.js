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

// 5 Перепишите в виде класса

function exFive() {
  function CoffeeMachine(power) {
    this._waterAmount = 0;
    this._WATER_HEAT_CAPACITY = 4200;
    this._power = power;
  }
  // свойства и методы для всех объектов класса
  // CoffeeMachine.prototype.WATER_HEAT_CAPACITY = 4200;
  
  CoffeeMachine.prototype.getTimeToBoil = function(){
    return this._waterAmount * this._WATER_HEAT_CAPACITY * 80 / this._power;
  }
  CoffeeMachine.prototype.run = function(){
    setTimeout(function() {
      alert( 'Кофе готов!' );
    }, this.getTimeToBoil());
  }
  CoffeeMachine.prototype.setWaterAmount = function(amount){
    this._waterAmount = amount;
  }
  
  var coffeeMachine = new CoffeeMachine(10000);
  coffeeMachine.setWaterAmount(50);
  coffeeMachine.run();

  htmlOut('Перепишите в виде класса', exFive.toString(), 'Кофе готов', 'https://learn.javascript.ru/task/rewrite-by-class' );
}

// 6 Хомяки с __proto__

function exSix() {
  function Hamster() {
    this.food = [];
  }

  // Hamster.prototype.food = []; // пустой "живот"
  
  Hamster.prototype.found = function(something) {
    this.food.push(something);
  };
  
  // Создаём двух хомяков и кормим первого
  var speedy = new Hamster();
  var lazy = new Hamster();
  
  speedy.found("яблоко");
  speedy.found("орех");
  
  alert( speedy.food.length ); // 2
  alert( lazy.food.length ); // 2 (!??)
  htmlOut('Хомяки с __proto__', exSix.toString(), 'Кофе готов: 150 мл', 'https://learn.javascript.ru/task/hamsters-with-proto' );
}

// 7 Класс "часы"

function exSeven() {
  function Clock(options){
    this._template = options.template;
  }

  Clock.prototype._render = function(now) {
    var options = {
      hour: 'numeric',
      minute: 'numeric',
      second: 'numeric'
    };
    var now = new Date();
    var toLocal = now.toLocaleString('ru', options);
    var splitedDate = toLocal.split(':');
    var output = this._template.replace('h', splitedDate[0]).replace('m', splitedDate[1]).replace('s', splitedDate[2]);
    console.log(output);
  }
  Clock.prototype.start = function(){
    this._render();
    var self = this;
    var timerId = setTimeout(function tick(){
      self._render();
      timerId = setTimeout(tick, 1000);
    },1000);
  };

  var clock = new Clock({
    template: 'h:m:s'
  });
  clock.start();

  htmlOut('Класс часы', exSeven.toString(), 'True', 'https://learn.javascript.ru/task/clock-class' );
}

// 8 Класс "расширенные часы"

function exEight() {
  function Clock(options){
    this._template = options.template;
  }

  Clock.prototype._render = function(now) {
    var options = {
      hour: 'numeric',
      minute: 'numeric',
      second: 'numeric'
    };
    var now = new Date();
    var toLocal = now.toLocaleString('ru', options);
    var splitedDate = toLocal.split(':');
    var output = this._template.replace('h', splitedDate[0]).replace('m', splitedDate[1]).replace('s', splitedDate[2]);
    console.log(output);
  }
  Clock.prototype.start = function(){
    this._render();
    var self = this;
    var timerId = setTimeout(function tick(){
      self._render();
      timerId = setTimeout(tick, 1000);
    },1000);
  };

  function ExtendedClock(options){
    Clock.apply(this, arguments);
    this._precision = +options.precision || 1000;
  }

  ExtendedClock.prototype = Object.create(Clock.prototype);
  ExtendedClock.prototype.constructor = ExtendedClock;
  ExtendedClock.prototype.start = function(){
    var savedThis = this;
    this._render();
    var timerId = setTimeout(function tick(){
      savedThis._render();
      timerId = setTimeout(tick, savedThis._precision);
    },this._precision);
  }


  var extendedClock = new ExtendedClock({
      template: 'h:m:s',
      precision: 2000
  });

  extendedClock.start();
  htmlOut('Класс "расширенные часы"', exEight.toString(), 'True', 'https://learn.javascript.ru/task/clock-class-extended' );
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

