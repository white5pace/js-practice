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

var kusa = {
  name: "Петька",
  hui: 23
};

// эти объекты ссылаются друг на друга!
leader1.soldier = soldier;
soldier.leader1 = leader1;

var team = [leader, soldier];

function getClass(obj) {
  return {}.toString.call(obj).slice(8, -1);
}


console.log(getClass(soldier.name));
console.log(JSON.stringify(kusa, function(key, value){
  if(getClass(value) === 'String') getClass(value);
  return value;
}));  

// ne resheno otvet >>

// var leader = {
//   id: 12,
//   name: "Василий Иванович"
// };

// var soldier = {
//   id: 51,
//   name: "Петька"
// };

// // поменяли прямую ссылку на ID
// leader.soldierId = 51;
// soldier.leaderId = 12;

// var team = {
//   12: leader,
//   51: soldier
// };

