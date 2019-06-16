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

// 2 Превратите объект в JSON

function exTwo() {
  var leader = {
    name: "Василий Иванович",
    age: 35
  };
  leader = JSON.stringify(leader);
  leader = JSON.parse(leader);

  htmlOut('Превратите объект в JSON', exTwo.toString(),leader.age, 'https://learn.javascript.ru/json#prevratite-obekt-v-json' );
}


// 3 Превратите объекты со ссылками в JSON

function exThree() {
  var leader = {
    name: "Василий Иванович"
  };
  
  var soldier = {
    name: "Петька"
  };
  
  // эти объекты ссылаются друг на друга!
  leader.soldier = soldier;
  soldier.leader = leader;
  
  var team = [leader, soldier];
  var str = JSON.stringify(team, function(key, value) {
    if (key == 'leader' || key == 'soldier') return value.name     ;
    return value;
  });
  console.log(str);

  htmlOut('Превратите объекты со ссылками в JSON', exThree.toString(),str, 'https://learn.javascript.ru/json#prevratite-obekty-so-ssylkami-v-json' );
}


// 4 Вывод чисел каждые 100 мс

function exFour() { 
  var i = 1;
  var timerId = setInterval(function(){
    console.log(i)
    i++;
    if(i > 20){
      clearInterval(timerId);
    }
  },100);

  htmlOut('Вывод чисел каждые 100 мс', exFour.toString(),i, 'https://learn.javascript.ru/settimeout-setinterval#vyvod-chisel-kazhdye-100-ms' );
}


// 5 Вывод чисел каждые 100 мс, через setTimeout

function exFive() { 
  var i = 1;
  var timerId = setTimeout(function run(){
    console.log(i)
    if(i != 20){
      timerId = setTimeout(run, 100);
    }
    i++;
  }, 100);

  htmlOut('Вывод чисел каждые 100 мс, через setTimeout', exFive.toString(),i , 'https://learn.javascript.ru/settimeout-setinterval#vyvod-chisel-kazhdye-100-ms-cherez-settimeout' );
}


// 6 Функция-задержка

function exSix() { 
  function delay(f, ms){
    return function(){
      var arg = [].slice.call(arguments);
      var g = f.bind(this);
      // better solution
      // var savedArg = arguments;
      // var savedThis = this;
      setTimeout(function(){
        g.apply(null, arg);
        // better solution
        // f.apply(savedThis, savedArg);
      },ms)
    }
  }
  function f(x) {
    console.log( x );
  }
  var user = {
    name: 'Vasya',
    sayHi: function(phrase, who){
      console.log(this.name + ' : ' + phrase, who);
    }
  };

  var f1000 = delay(f, 100);
  var f1500 = delay(f, 1500);
  user.sayHi = delay(user.sayHi, 150);
  user.sayHi('Привет', 'Петян');
  f1000("тест"); 
  f1500("тест2"); 

  htmlOut('Функция-задержка', exSix.toString(), true , 'https://learn.javascript.ru/settimeout-setinterval#funktsiya-zaderzhka' );
}

// 7 Вызов не чаще чем в N миллисекунд

function exSeven() { 
  function debounce(f, ms) { 
    var timer;

    return function(){
      var saveThis = this;
      var savedArg = arguments;
      if(timer){
        clearTimeout(timer);
      }
      timer = setTimeout(function(){
        f.apply(saveThis, savedArg);
        timer = false;
      }, ms);
    }
  }
  let log = "";
  function f(a) {
    log += a;
  }
  setTimeout(function(){
    console.log(log);
  }, 3600);

  f = debounce(f, 1000);
  f(1)
  f(2); 
  setTimeout( function() { f(3) }, 1100); 
  setTimeout( function() { f(4) }, 1200);
  setTimeout(function() { f(5) }, 2500); 
  
  htmlOut('Вызов не чаще чем в N миллисекунд', exSeven.toString(), 245, 'https://learn.javascript.ru/task/debounce' );
}

// 8 Тормозилка

function exEight() { 
  function throttle(f,ms){
    var lastValue, 
        Interval, 
        started, 
        lastCalled;
    return function(a){
      var savedThis = this;
      if(!started){
        f(a);
        started = true;
      }
      if(!Interval){
        Interval = setInterval(function(){
          if(lastCalled != lastValue){
            f.call(savedThis, lastValue);
            lastCalled = lastValue;
          }
        }, ms);
      }
      lastValue = a;
    }
  }
  var f = function(a) {
    console.log(a);
  };

  var f1000 = throttle(f, 1000);
  
  f1000(1); 
  f1000(2); 
  f1000(3); 
  setTimeout( function() { f1000(4); }, 1100);
  setTimeout( function() { f1000(5); }, 1200);
  setTimeout( function() { f1000(6); }, 1900);
  
  htmlOut('Тормозилка', exEight.toString(), 136, 'https://learn.javascript.ru/task/throttle' );
}

