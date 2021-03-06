'use strict';

// ООП в функциональном стиле


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

// 7 Запускать только при включённой кофеварке

function exSeven() {
  function Machine(power) {
    this._enabled = false;

    this.enable = function() {
      this._enabled = true;
    };

    this.disable = function() {
      this._enabled = false;
    };
  }

  function CoffeeMachine(power) {
    Machine.apply(this, arguments);

    var waterAmount = 0;

    this.setWaterAmount = function(amount) {
      waterAmount = amount;
    };

    function onReady() {
      alert('Кофе готово!');
    }

    this.run = function() {
      if(this._enabled){
        setTimeout(onReady, 1000);
      } else {
        throw Error('ошибка, кофеварка выключена');
      }
    };

  }
  var coffeeMachine = new CoffeeMachine(10000);
  coffeeMachine.run(); // ошибка, кофеварка выключена!

  htmlOut('Запускать только при включённой кофеварке', exSeven.toString(), 'True', 'https://learn.javascript.ru/task/coffeemachine-fix-run' );
}

// 8 Останавливать кофеварку при выключении

function exEight() {
  function Machine(power) {
    this._enabled = false;

    this.enable = function() {
      this._enabled = true;
    };

    this.disable = function() {
      this._enabled = false;
    };
  }

  function CoffeeMachine(power) {
    Machine.apply(this, arguments);
    var timerId;

    var waterAmount = 0;

    this.setWaterAmount = function(amount) {
      waterAmount = amount;
    };

    function onReady() {
      alert('Кофе готово!');
    }

    this.run = function() {
      if(this._enabled){
        timerId = setTimeout(onReady, 1000);
      } else {
        throw Error('ошибка, кофеварка выключена');
      }
    };
    var parentDisable = this.disable;
    this.disable = function() {
      parentDisable.call(this);
      if(!!timerId) {
        clearTimeout(timerId);
      }

    }

  }
  var coffeeMachine = new CoffeeMachine(10000);
  coffeeMachine.enable();
  coffeeMachine.run();
  coffeeMachine.disable(); // остановит работу, ничего не выведет

  htmlOut('Останавливать кофеварку при выключении', exEight.toString(), 'True', 'https://learn.javascript.ru/task/coffeemachine-disable-stop' );
}

// 9 Унаследуйте холодильник

function exNine() {
  function Machine(power) {
    this._power = power;
    this._enabled = false;
  
    var self = this;
  
    this.enable = function() {
      self._enabled = true;
    };
  
    this.disable = function() {
      self._enabled = false;
    };
  }
  function Fridge(power) {
    Machine.apply(this, arguments);
    var food = [];
    var capacity = this._power / 100;
    this.addFood = function() {
      if(!this._enabled){
        throw Error('Вы не можете добвать еду, холодильник выключен');
      }
      if(food.length + arguments.length > capacity) {
        throw Error('слишком много еды');
      }
      for(var i of arguments) {
        food.push(i);
      }
    }
    this.getFood = function(){
      var foodrevision = [];
      for(var i of food){
        foodrevision.push(i);
      }
      return foodrevision;
      // return food.slice();
    }
  }
  var fridge = new Fridge(500);
  fridge.enable();
  fridge.addFood("котлета");
  fridge.addFood("сок", "варенье");
  
  var fridgeFood = fridge.getFood();
  console.log( fridgeFood ); // котлета, сок, варенье
  
  // добавление элементов не влияет на еду в холодильнике
  fridgeFood.push("вилка", "ложка");
  
  console.log( fridge.getFood() ); // внутри по-прежнему: котлета, сок, варенье

  htmlOut('Унаследуйте холодильник', exNine.toString(), 'True', 'https://learn.javascript.ru/task/inherit-fridge' );
}

// 10 Добавьте методы в холодильник

function exTen() {
  function Machine(power) {
    this._power = power;
    this._enabled = false;
  
    var self = this;
  
    this.enable = function() {
      self._enabled = true;
    };
  
    this.disable = function() {
      self._enabled = false;
    };
  }
  function Fridge(power) {
    Machine.apply(this, arguments);
    var food = [];
    var capacity = this._power / 100;
    this.addFood = function() {
      if(!this._enabled){
        throw Error('Вы не можете добвать еду, холодильник выключен');
      }
      if(food.length + arguments.length > capacity) {
        throw Error('слишком много еды');
      }
      for(var i of arguments) {
        food.push(i);
      }
    }
    this.getFood = function(){
      return food.slice();
    }
    this.removeFood = function(item){
      for(var i = 0; i < food.length; i++){
        if(food[i] == item){
          food.splice(i, 1);
        }
      }
      // var idx = food.indexOf(item);
      // if (idx != -1) food.splice(idx, 1);
    }
    this.filterFood = function(func) {
      var filteredFood = [];
      for(var i of food){
        if(func(i)){
          filteredFood.push(i);
        }
      }
      //  return food.filter(filter);
      return filteredFood;
    }
  }
  var fridge = new Fridge(500);
  fridge.enable();
  fridge.addFood({
    title: "котлета",
    calories: 100
  });
  fridge.addFood({
    title: "сок",
    calories: 30
  });
  fridge.addFood({
    title: "зелень",
    calories: 10
  });
  fridge.addFood({
    title: "варенье",
    calories: 150
  });

  fridge.removeFood("нет такой еды"); // без эффекта
  console.log( fridge.getFood().length ); // 4
  console.log(fridge.getFood());

  var dietItems = fridge.filterFood(function(item) {
    return item.calories < 50;
  });

  dietItems.forEach(function(item) {
    console.log( item.title ); // сок, зелень
    fridge.removeFood(item);
  });
  
  console.log( fridge.getFood().length ); // 2

  htmlOut('Добавьте методы в холодильник', exTen.toString(), 'True', 'https://learn.javascript.ru/task/add-methods-fridge' );
}


// 11 Переопределите disable

function exEleven() {
  function Machine(power) {
    this._power = power;
    this._enabled = false;
  
    var self = this;
  
    this.enable = function() {
      self._enabled = true;
    };
  
    this.disable = function() {
      self._enabled = false;
    };
  }
  function Fridge(power) {
    Machine.apply(this, arguments);
    var food = [];
    var capacity = this._power / 100;

    this.addFood = function() {
      if(!this._enabled){
        throw Error('Вы не можете добвать еду, холодильник выключен');
      }
      if(food.length + arguments.length > capacity) {
        throw Error('слишком много еды');
      }
      for(var i of arguments) {
        food.push(i);
      }
    }
    this.getFood = function(){
      return food.slice();
    }
    var parentDisable = this.disable;
    this.disable = function() {
      if(food.length){
        throw Error('ошибка, в холодильнике есть еда');
      }
      parentDisable();


    }
  }
  var fridge = new Fridge(500);
  fridge.enable();
  fridge.addFood("кус-кус");
  fridge.disable(); // ошибка, в холодильнике есть еда
  htmlOut('Переопределите disable', exEleven.toString(), 'True', 'https://learn.javascript.ru/task/override-disable' );
}

