'use strict';

// Методы объектов и контекст вызова 

// 1 Создайте калькулятор 

function htmlOut(hOne, pOne, output) {
  document.getElementById('hOne').innerHTML = hOne;
  document.getElementById('pOne').innerHTML = "<b>Код решения:</b> <br><br>" + pOne;
  document.getElementById('Output').innerHTML =  "Выходящее значение: " + output;
};

function exOne(){

  var calculator = {
    read: function() {
      this.a = +prompt('a?', 0);
      this.b = +prompt('b?', 0);
    }, 
    sum: function() {
      return (this.a + this.b);
    },
    mul: function() {
      return (this.a * this.b);
    }
  }
  
  calculator.read();
  console.log( calculator.sum() );
  console.log( calculator.mul() );

  htmlOut('Создайте калькулятор', exOne.toString(), calculator.sum() + ' ' + calculator.mul());

}


// 2 Цепочка вызова 

function exTwo(){
  var ladder = {
    step: 0,
    up: function() { // вверх по лестнице\
      this.step++;
      return this;
    },
    down: function() { // вниз по лестнице]
  
      this.step--;
      return this;
    },
    showStep: function() { // вывести текущую ступеньку
      console.log( this.step );
      return this;
    }
  };
  ladder.up().up().down().up().down().showStep();

  htmlOut('Цепочка вызова ', exTwo.toString(), ladder.step);
  
}


// 3 Сумма произвольного количества скобок

function exThree() {
  function sum(a) {
    var currentSum = a;

    function f(b) {
      currentSum += b;
      return f;
    };

    f.toString = function(){
      return currentSum;
    };
    return f;
  }
  console.log(sum(1)(2) == 3 );
  console.log(sum(1)(2)(3) == 6);
  console.log(sum(5)(-1)(2) == 6);
  console.log(sum(6)(-1)(-2)(-3) == 0);
  console.log(sum(0)(1)(2)(3)(4)(5) == 15);

  htmlOut('Сумма произвольного количества скобок', exThree.toString(), sum(1)(2) == 3);
}

// 4 Создать Calculator при помощи конструктора

function exFour() {
  var calculator = {
    read: function() {
      this.a = +prompt('a?', 0);
      this.b = +prompt('b?', 0);
    }, 
    sum: function() {
      return (this.a + this.b);
    },
    mul: function() {
      return (this.a * this.b);
    }
  }

  function Calculator() {
    this.read = function() {
      this.a = +prompt('a?', 0);
      this.b = +prompt('b?', 0);
    };
    this.sum = function() {
      return (this.a + this.b);
    };
    this.mul = function() {
      return (this.a * this.b);;
    };

  }

  var calculator = new Calculator();
  calculator.read();

  console.log( "Сумма = " + calculator.sum() );
  console.log( "Произведение = " + calculator.mul() );

  htmlOut('Создать Calculator при помощи конструктора', exFour.toString(), ("Сумма = " + calculator.sum() + " " + "Произведение = " + calculator.mul()));

}

// 5 Создать Accumulator при помощи конструктора

function exFive() {
  function Accumulator(startingValue) {
    this.value = startingValue;

    this.read = function(){
      this.value += +prompt('Прибавить', 0);
    }
  }
  var accumulator = new Accumulator(1); // начальное значение 1
  accumulator.read(); // прибавит ввод prompt к текущему значению
  accumulator.read(); // прибавит ввод prompt к текущему значению
  console.log( accumulator.value ); // выведет текущее значение
  htmlOut('Создать Accumulator при помощи конструктора', exFive.toString(), accumulator.value );

}

// 6 Создайте калькулятор

function exSix() {
  function Calculator() {
    var operation = {
      '+': function(a, b){
        return a + b;
      }, 
      '-': function(a, b) {
        return a - b;
      }
    }

    this.addMethod = function(name, func){
      operation[name] = func;
    };

    this.calculate = function(str) {
      this.spaces = [];
      for(var i = 0; i < str.length; i++) {
        if(str[i] == ' '){
          this.spaces.push(i);
        }
      }
      this.a = +str.slice(0, this.spaces[0]);
      var op = str.slice(this.spaces[0] + 1, this.spaces[1] );
      this.b = +str.slice(this.spaces[1] + 1, str.length);

      if (!operation[op] || isNaN(a) || isNaN(b)) {
        return NaN;
      }

      return operation[op](this.a, this.b);
    };
    
  }
  var calc = new Calculator;

  console.log( calc.calculate("1 + 1"));
  console.log( calc.calculate("1 + 2"));
  console.log( calc.calculate("8 - 4"));


  var powerCalc = new Calculator;
  powerCalc.addMethod("*", function(a, b) {
    return a * b;
  });

  powerCalc.addMethod("/", function(a, b) {
    return a / b;
  });

  powerCalc.addMethod("**", function(a, b) {
    return Math.pow(a, b);
  });
  
  var result = powerCalc.calculate("2 ** 3");
  console.log(result)

  htmlOut('Создайте калькулятор', exSix.toString(), result );

}

// 7 Добавить get/set-свойства

function exSeven() {
  function User(fullName) {
    this.fullName = fullName;

    Object.defineProperty(this, "firstName", {
      get: function() {
        var spl = this.fullName.split(' ');
        return spl[0];
      },
      set: function(value) {
        var spl = this.fullName.split(' ');
        this.fullName =  value + ' ' + spl[1] ;
      }
    });
    Object.defineProperty(this, "lastName", {
      get: function() {
        var spl = this.fullName.split(' ');
        return spl[1];
      },
      set: function(value) {
        var spl = this.fullName.split(' ');
        this.fullName = spl[0] + ' ' + value;
      }
    });
  }
  
  var vasya = new User("Василий Попкин");
  console.log( vasya.firstName ); // Василий
  console.log( vasya.lastName ); // Попкин
  vasya.lastName = 'Сидоров';

  console.log( vasya.fullName ); // Василий Сидоров

  vasya.firstName = 'Алексей';
  console.log( vasya.fullName ); 

  htmlOut('Добавить get/set-свойства', exSeven.toString(), vasya.fullName);

}

// 8 Счетчик объектов 

function exEight() {
  function Article() {
    this.created = new Date();
    Article.count++;
    Article.last = this.created;
  }
  
  Article.count = 0;
  Article.showStats = function(){
    console.log(this.count + ', ' + this.last);
    return this.count + ', ' + this.last;
    
  };
  
  new Article();
  new Article();
  
  
  Article.showStats(); // Всего: 2, Последняя: (дата)
  
  for(var i = 0; i < 1000; i++){
    var c = 0;
    c++;
  }
  new Article();
  
  Article.showStats(); // Всего: 3, Последняя: (дата)
  htmlOut('Счетчик объектов ', exEight.toString(), Article.showStats());

}

// 9 Перепишите суммирование аргументов

function exNine() {
  function sumArgs() {
    // arguments.reduce = [].reduce;
    // return arguments.reduce(function(a, b){
    //   return a + b;
    // });
    var arg = [].reduce.call(arguments, function(a, b){
      return a + b;
    });
    return arg;
  }
  
  console.log( sumArgs(1, 2, 3) ); 

  htmlOut('Перепишите суммирование аргументов ', exNine.toString(), sumArgs(1, 2, 3));


}

// 10 Примените функцию к аргументам

function exTen() {

  function applyAll() {
    var args = [];
    var func = arguments[0];
    for(var i = 1; i < arguments.length; i++){
      args.push(arguments[i]);
    }
    return func.apply(null, args);
  }

  function sum() { // суммирует аргументы: sum(1,2,3) = 6
    return [].reduce.call(arguments, function(a, b) {
      return a + b;
    });
  }
  function mul() { // перемножает аргументы: mul(2,3,4) = 24
    return [].reduce.call(arguments, function(a, b) {
      return a * b;
    });
  }  
  console.log( applyAll(Math.max, 2, -2, 3, 6, 10, 5, 20, 26) ); 
  console.log( applyAll(Math.min, 2, -2, 3) ); 
  console.log( applyAll(sum, 1, 2, 3) ); 
  console.log( applyAll(mul, 2, 3, 4) );
  htmlOut('Примените функцию к аргументам ', exTen.toString(), applyAll(mul, 2, 3, 4));

}


// 11 Кросс-браузерная эмуляция bind

function exEleven() {
  function bind(func, context /*, args*/) {
    var bindArgs = [].slice.call(arguments, 2); // (1)
    console.log(bindArgs);
    function wrapper() {                        // (2)
      var args = [].slice.call(arguments);
      console.log(args);
      var unshiftArgs = bindArgs.concat(args);  // (3)
      console.log(unshiftArgs);

      return func.apply(context, unshiftArgs);  // (4)

    }
    return wrapper;
  }
  function mul(a, b) {
    return a * b;
  };
  var double = mul.bind(null, 2);
  var sDouble = bind(mul, null, 2);
  console.log(sDouble(12));

  console.log(double(2));

  htmlOut(' Кросс-браузерная эмуляция bind ', exEleven.toString(), sDouble(12));
}

// 12 Использование функции вопросов

function exTwelve() {
  var localOutput = '';

  function ask(question, answer, ok, fail) {
    var result = prompt(question, '');
    if (result.toLowerCase() == answer.toLowerCase()) ok();
    else fail();
  }
  
  var user = {
    login: 'Василий',
    password: '12345',
  
    loginOk: function() {
      alert( this.login + ' вошёл в сайт' );
      localOutput = 'вошёл в сайт';
    },
  
    loginFail: function() {
      alert( this.login + ': ошибка входа' );
      localOutput = 'ошибка входа';
    },
  
    checkPassword: function() {
      ask("Ваш пароль?", this.password, this.loginOk.bind(this), this.loginFail.bind(this));
    }
  };
  // var a = user.loginOk.bind(user);
  // console.log(a());
  user.checkPassword();
  htmlOut('Использование функции вопросов', exTwelve.toString(), localOutput);
}

// 13 Использование функции вопросов с каррингом

function exThirteen() {
  var localOutput = '';

  function ask(question, answer, ok, fail) {
    var result = prompt(question, '');
    if (result.toLowerCase() == answer.toLowerCase()) ok();
    else fail();
  }

  var user = {
    login: 'Василий',
    password: '12345',

    // метод для вызова из ask
    loginDone: function(result) {
      alert( this.login + (result ? ' вошёл в сайт' : ' ошибка входа') );
      if(result){
        localOutput = 'вошёл в сайт';
      }else {
        localOutput = 'ошибка входа';
      }
    },

    checkPassword: function() {
      ask("Ваш пароль?", this.password,
        this.loginDone.bind(this, true),
        this.loginDone.bind(this, false),
      );
    }
  };
  var vasya = user;
  user = null;
  vasya.checkPassword();
  htmlOut('Использование функции вопросов с каррингом', exThirteen.toString(), localOutput);
}



























































// var calculator = {
// 	a: 0,
// 	b: 0,
// 	read: function(){
// 	this.a = +prompt('a?', 0);
// 	this.b = +prompt('b?', 0);
// 	},
// 	sum: function(){
// 		return this.a + this.b;
// 	},
// 	mul: function(){
// 	return this.a * this.b;
// 	}
// };

// calculator.read();
// alert( calculator.sum() );
// alert( calculator.mul() );

// 2 Цепочка вызова


// (function ladder() {
// var ladder = {
//   step: 0,
//   up: function() { // вверх по лестнице
// 		this.step++;
// 		return this;
//   },
//   down: function() { // вниз по лестнице
// 		this.step--;
// 		return this;
//   },
//   showStep: function() { // вывести текущую ступеньку
// 		alert( this.step );
// 		return this;
//   }
// };
// ladder.up().up().down().up().down().showStep().up().up().down().up().down().showStep();
// })();


//3 Сумма произвольно количества скобок 
// function sum(a){
// 	currentSum = a;

// 	function f(b){
// 		currentSum += b;
// 		return f;
// 	}

// 	f.toString = function(){
// 		return currentSum;
// 	};

// 	return f;
// }

// console.log(sum(1)(2));
// console.log( sum(5)(-1)(2) ); 
// console.log( sum(6)(-1)(-2)(-3) );
// console.log( sum(0)(1)(2)(3)(4)(5) );

//4 Калькулятор при помощи конструктора 
// function Calculator(){

// 	this.read = function(){
// 		this.a = +prompt('a?', 0);
// 		this.b = +prompt('b?', 0);
// 	};

// 	this.sum = function(){
// 		return this.a + this.b;
// 	};

// 	this.mul = function(){
// 		return this.a * this.b;
// 	}
// }
// var calculator = new Calculator();
// calculator.read();

// alert( "Сумма=" + calculator.sum() );
// alert( "Произведение=" + calculator.mul() );


//5 Создать Accumulator при помощи конструктора 

// function Accumulator(startingValue){
// 	this.value = startingValue;

// 	this.read = function(){
// 		this.value += +prompt('Сколько', 0);
// 	}
// }

// var accumulator = new Accumulator(1); // начальное значение 1
// accumulator.read(); // прибавит ввод prompt к текущему значению
// accumulator.read(); // прибавит ввод prompt к текущему значению
// alert( accumulator.value ); // выведет текущее значение


//6 Power Calculator

// function Calculator(){
// 	var method = {
// 		'+': function(a, b){
// 			return	a + b;
// 		},
// 		'-': function(a, b){
// 			return	a - b;
// 		}
// 	};

// 	this.calculate = function(str){
// 		var arr	= str.split(' ');
// 		var a = +arr[0];
// 		var b = +arr[2];
// 		var op = arr[1];

// 		if(!method[op] || isNaN(a) || isNaN(b)){
// 			return NaN;
// 		}
// 		return method[op](a, b);

// 	};
// 	this.addMethod = function(name, func){
// 		method[name] = func;

// 	}
// }
// var calc = new Calculator();

// console.log( calc.calculate("23 + 74") );

// var powerCalc = new Calculator();
// powerCalc.addMethod("*", function(a, b) {
//   return a * b;
// });
// powerCalc.addMethod("/", function(a, b) {
//   return a / b;
// });
// powerCalc.addMethod("**", function(a, b) {
//   return Math.pow(a, b);
// });

// var result = powerCalc.calculate("2 ** 3");
// console.log(result);


//7 Добавить get\set свойства

// function User(fullName) {
// 	this.fullName = fullName;

// 	Object.defineProperties(this, {

// 		firstName:{

// 			get: function(){
// 				return this.fullName.split(' ')[0];
// 			},

// 			set: function(newFirstName){
// 				this.fullName = newFirstName + ' ' + this.lastName;
// 			}

// 		},

// 		lastName:{
// 			get:function(){
// 				return this.fullName.split(' ')[1];
// 			},

// 			set: function(newLastName){
// 				this.fullName = this.firstName + ' ' + newLastName;
// 			}

// 		}

// 	});

// }

// var vasya = new User("Василий Попкин");

// // чтение firstName/lastName
// alert( vasya.firstName ); // Василий
// alert( vasya.lastName ); // Попкин

// // запись в lastName
// vasya.lastName = 'Сидоров';

// alert( vasya.fullName ); // Василий Сидоров


// 8 Счетчик объектов 

// function Article() {
// 	this.created = new Date();
// 	Article.count++;
// 	Article.last = this.created;
	
// }
// Article.count = 0;

// Article.showStats = function(){
// 	console.log('Всего:' + this.count + ', Последняя' + this.last);
// };

// new Article();
// new Article();

// Article.showStats(); // Всего: 2, Последняя: (дата)

// new Article();

// Article.showStats(); // Всего: 3, Последняя: (дата)


// 9 Переписования сумирования аргументов 

// function sumArgs() {
// 	return [].reduce.call(arguments, function(a, b){
// 		return a + b;
// 	});
// }

// console.log( sumArgs(1, 2, 3) );


//10 Функция к аргументам 

// function sum() { // суммирует аргументы: sum(1,2,3) = 6
//   return [].reduce.call(arguments, function(a, b) {
//     return a + b;
//   });
// }

// function mul() { // перемножает аргументы: mul(2,3,4) = 24
//   return [].reduce.call(arguments, function(a, b) {
//     return a * b;
//   });
// }
// function applyAll(func){
// 	return func.apply(this, [].slice.call(arguments, 1));
// }

// console.log(applyAll(Math.min, 2, -2, 3) );
// console.log(applyAll(sum, 2, -2, 3) );
// console.log(applyAll(mul, 2, -2, 3) );

// function ask(question, answer, ok, fail) {
//   var result = prompt(question, '');
//   if (result.toLowerCase() == answer.toLowerCase()) ok();
//   else fail();
// }

// ask("Выпустить птичку?", "да", fly, die);

// function fly() {
//   alert( 'улетела :)' );
// }

// function die() {
//   alert( 'птичку жалко :(' );
// }


//50 Кросс-браузерная эмуляция bind 

// function mul(a, b) {
//   return a * b;
// };

// function bind(func, context /*, args*/) {
//   var bindArgs = [].slice.call(arguments, 2); // (1)
//   function wrapper() {                        // (2)
//     var args = [].slice.call(arguments);
//     var unshiftArgs = bindArgs.concat(args);  // (3)
//     return func.apply(context, unshiftArgs);  // (4)
//   }
//   return wrapper;
// }

// var double = mul.bind(null, 2);
// var doubleBind = bind(mul, null, 2);

// console.log(doubleBind(2));

//51 Использования функции вопросов 

// "use strict";

// function ask(question, answer, ok, fail) {
//   var result = prompt(question, '');
//   if (result.toLowerCase() == answer.toLowerCase()) ok();
//   else fail();
// }

// var user = {
//   login: 'Василий',
//   password: '12345',

//   loginOk: function() {
//     alert( this.login + ' вошёл в сайт' );
//   },

//   loginFail: function() {
//     alert( this.login + ': ошибка входа' );
//   },

//   checkPassword: function() {
//     ask("Ваш пароль?", this.password, this.loginOk.bind(this), this.loginFail.bind(this));
//   }
// };

// var vasya = user;
// user = null;
// vasya.checkPassword();


//52 Использование функции вопросов с каррингом 

// "use strict";

// function ask(question, answer, ok, fail) {
//   var result = prompt(question, '');
//   if (result.toLowerCase() == answer.toLowerCase()) ok();
//   else fail();
// }

// var user = {
//   login: 'Василий',
//   password: '12345',

//   // метод для вызова из ask
//   loginDone: function(result) {
//     alert( this.login + (result ? ' вошёл в сайт' : ' ошибка входа') );
//   },

//   checkPassword: function() {
// 		var self = this;
//     ask("Ваш пароль?", this.password,
//       function() {
//         self.loginDone(true);
//       },
//       function() {
//         self.loginDone(false);
//       }
//     );
//   }
// };

// var vasya = user;
// user = null;
// vasya.checkPassword();

// 53 Логирующий декоратор

// function work(a) {
//   /*...*/ // work - произвольная функция, один аргумент
// }

// function makeLogging(f, log) {

//   function wrapper(a) {
//       log.push(a);
//       return f.call(this, a);
//     }

//   return wrapper;
// }

// var log = [];
// work = makeLogging(work, log);

// work(1); // 1
// work(5); // 5

// for (var i = 0; i < log.length; i++) {
// 	alert( 'Лог:' + log[i] ); // "Лог:1", затем "Лог:5"
	

// 54 Логирующий декоратор много аргументов 

// function work(a, b) {
//   alert( a + b ); // work - произвольная функция
// }

// function makeLogging(f, log) {

//   function wrapper() {
//       log.push([].slice.call(arguments));
//       return f.apply(this, arguments);
//     }

//   return wrapper;
// }

// var log = [];
// work = makeLogging(work, log);

// work(1, 2); // 3
// work(4, 5); // 9

// for (var i = 0; i < log.length; i++) {
//   var args = log[i]; // массив из аргументов i-го вызова
//   alert( 'Лог:' + args.join() ); // "Лог:1,2", "Лог:4,5"
// }

// 55 Кеширующий декоратор 

// function f(x) {
//   return Math.random()*x;
// }

// function makeCaching(f) {
//   var cache = {};

//   return function(x) {
//     if (!(x in cache)) {
//       cache[x] = f.call(this, x);
//     }
//     return cache[x];
//   };

// }

// f = makeCaching(f);

// var a = f(1);
// var b = f(1);
// alert( a == b ); // true (значение закешировано)

// b = f(2);
// alert( a == b ); // false, другой аргумент => другое значение

// 38 

// var users = [{
//   name: "Вася",
//   surname: 'Иванов',
//   age: 20
// }, {
//   name: "Петя",
//   surname: 'Чапаев',
//   age: 25
// }, {
//   name: "Маша",
//   surname: 'Медведева',
//   age: 18
// }];

// function byField(field){
//   var g = field;
//   return function(a, b){
//     return a[g] > b[g] ? 1 : -1;
//   }
// }
// users.sort(byField('name'));

// byField('age');
// users.forEach(function(user) {
//   console.log( user.name );
// }); // Вася, Маша, Петя

// // Пример порядка вызова 
// users.sort(function byField(field){
//   var g = field;
//   return function(a, b) {
//     return a[g] > b[g] ? 1 : -1;
//   }
// });
