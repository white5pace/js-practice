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

// 1 Добавить метод и свойство кофеварке

function exOne() {
  function CoffeeMachine(power) {
    this.waterAmount = 0;
    
    var WATER_HEAT_CAPACITY = 4200;
    var timerId;
    var self = this;
  
    function getBoilTime() {
      console.log(self.waterAmount * WATER_HEAT_CAPACITY * 80 / power);
      return self.waterAmount * WATER_HEAT_CAPACITY * 80 / power;
    }
  
    function onReady() {
      alert( 'Кофе готово!' );
    }
  
    this.run = function() {
      timerId = setTimeout(onReady, getBoilTime());
    };

    this.stop = function() {
      clearTimeout(timerId);
    }
  
  }
  var coffeeMachine = new CoffeeMachine(50000);
  coffeeMachine.waterAmount = 200;

  coffeeMachine.run();
  coffeeMachine.stop();


  htmlOut('Добавить метод и свойство кофеварке', exOne.toString(),true, 'https://learn.javascript.ru/class-instanceof#polimorfnaya-funktsiya-formatdate' );
}

// 2 Написать объект с геттерами и сеттерами

function exTwo() {
  function User() {
    var firstName, surname;
    this.setFirstName = function(a) {
      firstName = a;
    }
    this.setSurname = function(a) {
      surname = a;
    }
    this.getFullName = function() {
      return firstName + ' ' + surname;
    }
  }
  
  var user = new User();
  user.setFirstName("Петя");
  user.setSurname("Иванов");
  
  alert( user.getFullName() ); // Петя Иванов

  htmlOut('Написать объект с геттерами и сеттерами', exTwo.toString(), user.getFullName(), 'https://learn.javascript.ru/task/object-with-getters-setters' );
}

// 3 Добавить геттер для power

function exThree() {
  function CoffeeMachine(power, capacity) {
    var waterAmount;
    this.setWaterAmount = function(amount) {
      if (amount < 0) {
        throw new Error("Значение должно быть положительным");
      }
      if (amount > capacity) {
        throw new Error("Нельзя залить воды больше, чем " + capacity);
      }
  
      waterAmount = amount;
    };
  
    this.getWaterAmount = function() {
      return waterAmount;
    };
    this.getPower = function() {
      return power;
    };
  
  }
  var CoffeeMachine = new CoffeeMachine(200, 500);
  console.log(CoffeeMachine.getPower());
  htmlOut('Добавить геттер для power', exThree.toString(), CoffeeMachine.getPower(), 'https://learn.javascript.ru/task/getter-power' );
}

// 4 Добавить публичный метод кофеварке

function exFour() {
  function CoffeeMachine(power, capacity) {
    var waterAmount = 0;
  
    var WATER_HEAT_CAPACITY = 4200;
  
    function getTimeToBoil() {
      return waterAmount * WATER_HEAT_CAPACITY * 80 / power;
    }
  
    this.setWaterAmount = function(amount) {
      if (amount < 0) {
        throw new Error("Значение должно быть положительным");
      }
      if (amount > capacity) {
        throw new Error("Нельзя залить больше, чем " + capacity);
      }
  
      waterAmount = amount;
    };

    this.addWater = function(amount) {
      if (amount < 0) {
        throw new Error("Значение должно быть положительным");
      }
      if (waterAmount + amount > capacity) {
        throw new Error("На данный момент в кофеварке: "+ waterAmount + " Вы пытаетесь залить: " + amount + " Нельзя залить больше, чем " + capacity);
      }

      waterAmount += amount;
      // this.setWaterAmount(waterAmount + amount); Решение короче
    }
  
    function onReady() {
      alert( 'Кофе готов!' );
    }
  
    this.run = function() {
      setTimeout(onReady, getTimeToBoil());
    };
  
  }
  var coffeeMachine = new CoffeeMachine(100000, 400);
  coffeeMachine.addWater(200);
  coffeeMachine.addWater(100);
  coffeeMachine.addWater(300); // Нельзя залить больше, чем 400
  coffeeMachine.run();

  htmlOut('Добавить публичный метод кофеварке', exFour.toString(), true, 'https://learn.javascript.ru/task/add-public-coffeemachine' );
}

// 5 Создать сеттер для onReady

function exFive() {
  function CoffeeMachine(power, capacity) {
    var waterAmount = 0;
    var self = this;
    var WATER_HEAT_CAPACITY = 4200;
  
    function getTimeToBoil() {
      return waterAmount * WATER_HEAT_CAPACITY * 80 / power;
    }
  
    this.setWaterAmount = function(amount) {
      // ... проверки пропущены для краткости
      waterAmount = amount;
    };
  
    this.getWaterAmount = function(amount) {
      return waterAmount;
    };
  
    function onReady() {
      alert( 'Кофе готов!' );
    }

    this.setOnReady = function(func){
      onReady = func;
    }
  
    this.run = function() {
      setTimeout(function(){
        onReady();
      }, getTimeToBoil());
    };
  
  }

  var coffeeMachine = new CoffeeMachine(20000, 500);
  coffeeMachine.setWaterAmount(150);
  coffeeMachine.run();

  coffeeMachine.setOnReady(function() {
    var amount = coffeeMachine.getWaterAmount();
    alert( 'Готов кофе: ' + amount + 'мл' ); // Кофе готов: 150 мл
  });


  htmlOut('Создать сеттер для onReady', exFive.toString(), 'Кофе готов: 150 мл', 'https://learn.javascript.ru/task/setter-onready' );
}

// 6 Добавить метод isRunning

function exSix() {
  function CoffeeMachine(power, capacity) {
    var waterAmount = 0;
    var self = this;
    var isRunning = false;
    var WATER_HEAT_CAPACITY = 4200;
    // var timerId;

    // this.isRunning = function() {
    //   return !!timerId;
    // };

    this.isRunning = function(){
      return isRunning;
    }
    function getTimeToBoil() {
      return waterAmount * WATER_HEAT_CAPACITY * 80 / power;
    }
  
    this.setWaterAmount = function(amount) {
      // ... проверки пропущены для краткости
      waterAmount = amount;
    };
  
    this.getWaterAmount = function(amount) {
      return waterAmount;
    };
  
    function onReady() {
      alert( 'Кофе готов!' );
    }

    this.setOnReady = function(func){
      onReady = func;
    }
  
    this.run = function() {
      isRunning = true;
      setTimeout(function(){
        isRunning = false;
        onReady();
      }, getTimeToBoil());

      // timerId = setTimeout(function() {
      //   timerId = null;
      //   onReady();
      // }, getTimeToBoil());
    };
    
  }

  var coffeeMachine = new CoffeeMachine(20000, 500);
  coffeeMachine.setWaterAmount(100);
  
  console.log( 'До: ' + coffeeMachine.isRunning() ); // До: false
  
  coffeeMachine.run();
  console.log( 'В процессе: ' + coffeeMachine.isRunning() ); // В процессе: true
  
  coffeeMachine.setOnReady(function() {
    alert( "После: " + coffeeMachine.isRunning() ); // После: false
  });


  htmlOut('Добавить метод isRunning', exSix.toString(), 'Кофе готов: 150 мл', 'https://learn.javascript.ru/task/coffeemachine-add-isrunning' );
}

