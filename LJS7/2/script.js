'use strict';

var outputs = [];
var writeTo = document.getElementById('outputvalue'); 

// 1

var leader = {
    name: "Василий Иванович",
    age: 35
  };

var inJson = JSON.stringify(leader);

outputs.push(inJson);
console.log(inJson);

var jsonOut = JSON.parse(inJson);

console.log(jsonOut);
outputs.push(jsonOut);

// 2 

var leader1 = {
    name: "Василий Иванович"
  };
  
  var soldier = {
    name: "Петька"
  };

  function getClass(obj) {
    return {}.toString.call(obj).slice(8, -1);
  }


  
  // эти объекты ссылаются друг на друга!
  leader1.soldier = soldier;
  soldier.leader1 = leader1;

outputs.push(getClass(soldier.leader1) );
console.log(getClass(leader1.name));

  console.log(JSON.stringify(leader1, function(key, value){
    if (key == 'soldier') return soldier.name;
    return value;
  }));

  var str = JSON.stringify(leader1, function(key, value){
    if (getClass(value) === "Object") return "pisa";
    return value;
  });

  console.log(str)
  
  var team = [leader, soldier];
outputs.forEach(function(item){
    writeTo.innerHTML += item + "<hr>";
});

