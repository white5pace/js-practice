// 1 Создать объект
// var user = {};

// user.name = 'Вася';
// user.surname = 'Петров';
// user.name = 'Сергей';
// delete user.name;
// console.log(user);

// 2 Is empty
// function isEmpty(obj) {
// 	var counter = 0;
//   for(key in obj){
// 		counter++;
// 	}
// 	return !(!!counter);
// }

// var schedule = {};

// alert( isEmpty(schedule) ); // true

// schedule["8:30"] = "подъём";

// alert( isEmpty(schedule) ); // false

// 3 Сумма зарплат
// "use strict";

// var salaries = {
//   "Вася": 100,
//   "Петя": 300,
//   "Даша": 250
// };
// var a = 0; 

// for(var key in salaries){
// 	a += salaries[key];
// }
// alert(a);

// 4 Свойства с наибольшим значением
// "use strict";

// var salaries = {
//   "Вася": 100,
//   "Петя": 300,
//   "Даша": 250
// };

// var a = 0,b = '';

// for(var key in salaries){
// 	(salaries[key] >= a)?((a = salaries[key]) && (b = key)) : a = a;
// }
// console.log(b || 'Нет сотрудников');

//5 Умножить численные свойства на 2
var menu = {
  width: 200,
  height: 300,
  title: "My menu"
};

for(key in menu){
	if(!(isNaN(menu[key])))menu[key] *= 2; 
}

console.log(menu);

