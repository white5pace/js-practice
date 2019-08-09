'use strict';

// Замыкание и область видемости 

//1 Сумма через замыкание 
function one() {
  function sum(a){
    return function(b){
      return a + b;
    }
  }
  console.log(sum(1)(10));
}

//2 Строковый буфер 

function two(){
  function makeBuffer() { 
    var string = '';
     
    function buffer(word){
      if(arguments.length < 1){
        return string;
      }else{
        return string += word;
    }
  }
    buffer.clear = function(){
      string = '';
    };
      return buffer;
  }
  
  var buffer = makeBuffer();
  
  buffer("Тест");
  buffer(" тебя не съест ");
  console.log( buffer() ); // Тест тебя не съест
  
  buffer.clear();
  
  console.log( buffer() ); // ""
}



//3 Сортировка 
function three() {
  var users = [{
    name: "Вася",
    surname: 'Иванов',
    age: 20
  }, {
    name: "Петя",
    surname: 'Чапаев',
    age: 25
  }, {
    name: "Маша",
    surname: 'Медведева',
    age: 18
  }];
  
  function byField(field){
    var g = field;
    return function(a, b){
      return a[g] > b[g] ? 1 : -1;
    }
  }
  users.sort(byField('name'));
  
  byField('age');
  users.forEach(function(user) {
    console.log( user.name );
  }); // Вася, Маша, Петя
  
  // Пример порядка вызова 
  // users.sort(function byField(field){
  //   var g = field;
  //   return function(a, b) {
  //     return a[g] > b[g] ? 1 : -1;
  //   }
  // });
}


// 4 Фильтрация через функцию
function four() {
  function filter(arr, func) {
    var mas = [];
    arr.forEach(function(i){
      if(func(i)){
        mas.push(i);
      }
    });
    return mas;
  }
  function debil(a) {
    return a == 1;
  }

  function inBetween(a, b) {
    return function(i){
      if (i <= b && i >= a){
        return true;
      }
    }
  }

  function inArray(a) {
    return function(i){
     return a.some(function(c){
        return c == i;
      });
    }
  }

  var arr = [1, 2, 3, 4, 5, 6, 7];

  console.log(filter(arr, function(a){
    return a == 1;
  }));


  console.log(filter(arr, function(a) {
    return a % 2 == 0
  })); // 2,4,6

  console.log( filter(arr, inBetween(3, 4)) ); // 3,4,5,6

  console.log( filter(arr, inArray([1, 2, 10])) ); // 1,2
  // console.log(inArray([1, 2, 3, 10]));
}

// 5 Армия функций 
function five(){
  function makeArmy() {

    var shooters = [];
  
    for (var i = 0; i < 10; i++) {
      var shooter = function me() { // функция-стрелок]
        console.log(me.i);
      };
      shooter.i = i;
      shooters.push(shooter);
    }
    return shooters;

  }
  
  var army = makeArmy();
  
  army[0](); // стрелок выводит 10, а должен 0
  army[5](); // стрелок выводит 10...
}
five();


