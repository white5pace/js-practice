//1 Сложение с преобразованием
// var a = +prompt('Enter a number', ''),
// b = +prompt('Enter another number', '');
// alert(a + b);

// 2 Числа после точки 
// function getDecimal(a){
// 	var b = a ^ 0;
// 	 return Math.abs(((a * 100000) - (b *100000))/100000);
//  }
//  console.log(getDecimal(-12.345));

// 3 Случайное число до Max
// function random(max){
// 	return Math.round(Math.random() * max);
// }
//  console.log(random(100));

// 4 Случайное от min до max
// function random(min, max){
// 	return Math.round(Math.random() * (max - min) + min);
// }
//  console.log(random(5, 10));

 // 5 Случайное от min до max включительно
// function random(min, max){
// 	return Math.round(Math.random() * (max - min + 1) + min - 1);
// }
//  console.log(random(5, 10));

//6 Формула Бине числа Фибоначчи
// function fibBinet(n){
// 	return Math.round(Math.pow(((1 + Math.sqrt(5))/2), n) / Math.sqrt(5));
// }
// console.log(fibBinet(8));




// Строки 

// 1 Первый заглавный символ
// function ucFirst(str){
// 	var fs = str.charAt(0).toUpperCase();
// 	return fs + str.slice(1);
// }
// console.log(ucFirst('вася'));

// 2 Спам фильтер
// function checkSpam(str){
// 	var sl = str.toLowerCase(), 
// 			v = 'viagra',
// 			x = 'xxx';

// 	return !!(~sl.indexOf(v) || ~sl.indexOf(x));
// }
// console.log(checkSpam("innocent rabbit"));

// 3 Длинная строка
// function truncate(str, maxL){
// 	if(str.length > maxL){
// 		return str.slice(0,maxL) + '…'; 
// 	}
// 	else{
// 		return str;
// 	}
// }
// console.log(truncate("Вот, что мне хотелось бы сказать на эту тему:", 20));

//4 Выделить число
// function extractCurrencyValue(str){
// 	return +str.slice(1);
// }
// console.log(extractCurrencyValue("$120"));



// Объекты 

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
// var menu = {
//     width: 200,
//     height: 300,
//     title: "My menu"
//   };
  
//   for(key in menu){
//       if(!(isNaN(menu[key])))menu[key] *= 2; 
//   }
  
//   console.log(menu);







//От масивов и до конца четвертой 
// // 1,2 Вывод и добавление последнего элемента
// var fruits = ["Яблоко", "Груша", "Слива"];
// console.log(fruits[fruits.length - 1]);
// fruits.push('Компьютер');
// console.log(fruits);

// // 3 Создание массива
// var styles = ['Джаз', 'Блюз'];
// styles.push('Рок-н-ролл');
// console.log(styles);
// styles[styles.length - 2] = 'Классика';
// console.log(styles);
// alert(styles.shift());
// styles.unshift('Рэп', 'Регги');
// console.log(styles);

// // 4 Случайное значение из массива
// var arr = ["Яблоко", "Апельсин", "Груша", "Лимон"],
// 	min = 0,
// 	max = arr.length - 1;
// rand = min + Math.floor(Math.random() * (max + 1 - min));

// console.log(arr[rand]);

// // 5 Калькулятор для массива
// var arr = [];

// while (true) {
// 	var a = prompt('Введите число', 0);

// 	if (a === '' || a === null || isNaN(a)) break;

// 	arr.push(+a);
// }

// var sum = 0;
// for (var i = 0; i < arr.length; i++) {
// 	sum += arr[i];
// }
// console.log(sum);

// // 6 Поиск в массиве 
// var arr = [1, 2, 3];

// function find(arr, value) {
// 	for (var i = 0; i < arr.length; i++) {
// 		if (arr[i] === value) return i;
// 	}
// 	return -1;
// }
// console.log(find(arr, 3));

// 7 Фильтр диапазона 
// var arr = [5, 4, 3, 8, 0];

// function filterRange(arr, a, b) {
// 	var filtred = [];

// 	for (var i = 0; i < arr.length; i++) {
// 		if (arr[i] >= a && arr[i] <= b) filtred.push(arr[i]);
// 	}

// 	return filtred;
// }
// console.log(filterRange(arr, 3, 5));

// 8 Решето Эратосфена
// function sieve(n) {
// 	var numbers = [];
// 	for (var i = 2; i <= n; i++) {
// 		numbers.push(i);
// 	}
// 	var p = 0;
// 	for (var g = 0; (p * p) < n; g++) {
// 		if (numbers[g] !== 0 && numbers[g] > p){ 
// 			p = numbers[g];
// 		}

// 		for (var z = 2; z <= Math.floor(n / p); z++) {

// 			for (i = 0; i < numbers.length; i++) {
// 				if (p * z === numbers[i]) {
// 					numbers[i] = 0;
// 				}
// 			}

// 		}
// 	}
// 	var primes = [];
// 	for(var q = 0; q < numbers.length; q++){
// 		if(numbers[q] !== 0){
// 			primes.push(numbers[q]);
// 		}
// 	}

// 	return primes;
// }
// console.log(sieve(100));

//9 Поиск подотрезка массива с максимальной суммой

//10 Добавить класс в строку 
// var obj = {
// 	className: 'open menu'
// };
// function addClass(obj, name){
// 	classes = obj.className ? obj.className.split(' ') : [];

// 	//Вернее использовать
// 	// for (var i = 0; i < classes.length; i++) {
//   //   if (classes[i] == cls) return; // класс уже есть
//   // }

// 	if(obj.className.indexOf(name) >= 0){
// 		return;
// 	}else{
// 		classes.push(name);
// 	}
// 	obj.className = classes.join(' ');
// 	return obj.className;
// }
// console.log(addClass(obj, 'open'));

//11 Camelize
// function camelize(str){
// 	var words = str.split('-');

// 	for(var i = 1; i < words.length; i++){
// 		words[i] = words[i].charAt(0).toUpperCase() + words[i].slice(1);
// 	}
				
// 	return words.join('');

// }

// console.log(camelize("list-style-image"));

// 12 Remove class
// var obj={
// 	className:'open menu'
// };

// function removeClass(obj, cls){

// 	var arr = obj.className.split(' ');
// 	var elem = arr.indexOf(cls);

// 	if(elem < 0){
// 		console.log(obj);
// 	}else{
// 		arr.splice(elem, 1);
// 		obj.className = arr.join(' ');
// 		console.log(obj);
// 	}
	
// }
// removeClass(obj, 'menu');

// 13 Фильтрация массива "на месте"

// var arr = [5, 3, 8, 1];

// function filterRangeInPlace(arr, a, b){
// 	for(var i = 0; i < arr.length; i++){
// 		if(arr[i] < a || arr[i] > b){
// 			arr.splice(i--, 1);
// 		}
// 	}
// 	console.log(arr);
// }

// filterRangeInPlace(arr, 1, 4);

//14 Сотритовка в обратном порядке

// var arr = [5, 2, 1, -10, 8];

// console.log(arr.sort(revSort));

// function revSort(a, b){
// 	return b-a;
// }

// 15 Скопировать и отсортировать массив
// var arr = ["HTML", "JavaScript", "CSS"];

// var arrSorted = arr.slice().sort();

// console.log(arr);
// console.log(arrSorted);

//16 Случайная сотрировка

// var arr = [1, -2, 15, 2, 0, 8];

// function compareRandom(a, b){
// 	return Math.random() - 0.5;
// }
// arr.sort(compareRandom);
// console.log(arr);

// 17 Сотрировка объектов

// var vasya = { name: 'Вася', age: 23 };
// var masha = { name: 'Маша', age: 18 };
// var vovochka = { name: 'Вовочка', age: 6 };

// var people = [vasya, masha, vovochka ];

// function sortAge(a,b){
// 	return a.age - b.age;
// }
// people.sort(sortAge);

// console.log(people);

// 18 Вывести односвязный список

var list = {
	value: 1,
	next: {
		value: 2,
		next: {
			value: 3,
			next: {
				value: 4,
				next: null
			}
		}
	}
};


// printList loop 18.1
// function printList(list){
// 	var a = list;
// 	 while(a){
// 	 	console.log(a.value);
// 	 	a = a.next;
// 	 }
// }
// printList(list);

 // printList recursion 18.2
// function printList(list){
// 	console.log(list.value);
// 	if(list.next){
// 		printList(list.next);
// 	}
// }
// printList(list);

//printReverseList recursion 18.3 
// function printReverseList(list){
// 	if(list.next){
// 		printRerverseList(list.next);
// 	}
// 	console.log(list.value);
// }
// printReverseList(list);

//printReverseList loop 18.4
// function printReverseList(list){
// 	var a = list;
// 	var b = [];
// 	 while(a){
// 	 	b.push(a.value);
// 	 	a = a.next;
// 	 }
// 	 for(var i = b.length - 1; i >= 0; i--){
// 		 console.log(b[i]);
// 	 }
// }
// printReverseList(list);

// 19 Отфильтровать анаграммы 
// function aClean(arr){
// 	var obj = {};

// 	for(var i = 0; i < arr.length; i++){
// 		var sorted = arr[i].toLowerCase().split('').sort().join('');
// 		obj[sorted] = arr[i];
// 	}
// 	var result = [];
// 	for(var key in obj) result.push(obj[key]);
// 	return result;
// }
// var arr = ['воз', 'киборг', 'коресет','ЗОВ', 'гробик' , 'костер',
// 'сектор'];

// console.log(aClean(arr));

// 20 Оставить уникальные элементы

// 20.1 Перебор через циклы
// function unique(arr){
// 	uArr = [];
// 	nextInput:
// 		for(var i = 0; i < arr.length; i++){
// 			var str = arr[i];
// 			for(var z = 0; z < uArr.length; z++){
// 				if(uArr[z] == str) continue nextInput;
// 			}
// 			uArr.push(str);
// 		}
// 		return uArr;
// }
// var strings = ["кришна", "кришна", "харе", "харе",
// "харе", "харе", "кришна", "кришна" ,"8‐()"];

// console.log(unique(strings));

// 20.2 Перебор через объект

// function unique(arr){
// 	obj = {};

// 	for (var i = 0; i < arr.length; i++) {
// 		var str = arr[i];
// 		obj[str] = true;
// 	}
// 	return Object.keys(obj);
// }
// var strings = ["кришна", "кришна", "харе", "харе",
// "харе", "харе", "кришна", "кришна" ,"8‐()"];

// console.log(unique(strings));


// 21 Переписать цикл через map

// var arr=["Есть", "жизнь", "на", "Марсе"];
// var arrLength = arr.map(function(word) {
// 	return word.length;
// });
// console.log(arrLength);

// 22 Массив частичных сумм

// var arr = [1, 2, 3, 4, 5];

// function getSums(arr){
// 	var result = [];
// 	 arr.reduce(function(current, next){
// 		result.push(current + next);
// 		return current + next;
// 	}, 0);
// 	return result;
// }
// console.log(getSums(arr));

// 23 Проверка на аргумент undefined 
// function f(x) {
// 	console.log(arguments.length ? 1 : 0);
// }

// f(undefined); 
// f();

//24 Сумма аргументов

// function sum(){
// 	var result = 0;
// 		for(i = 0; i < arguments.length; i++){
// 			result += arguments[i];
// 		}
// 		return console.log(result);
// 	}
// 	sum();
// 	sum(1);
// 	sum(1, 2);
// 	sum(1, 2, 3);
// 	sum(1, 2, 3, 4);

// Дата и время

// 25 Создайте дату
// var d = new Date(2012, 1, 20, 3, 12);

// console.log(d);

// 26 Имя дня недели

// var date = new Date(2012,0,3);  

// function getWeekDay(date){
// 	var week = ['вс','пн','вт','ср','чт','пт','сб']
// 	console.log(week[date.getDay()]);
// }
// getWeekDay(date);

// 27 День недели в европейской нумерации

// var date = new Date(2012, 0, 3);

// function getLocalDay(date){
// 	var day = date.getDay();
// 	if(day == 0){
// 		return 7;
// 	}else{
// 		return day;
// 	}
// }
// console.log(getLocalDay(date));

// 28 День указанное количество дней назад

// var date = new Date(2015, 0, 2);

// function getDateAgo(date, days){
// 	var dateCopy = new Date(date);
// 	dateCopy.setDate(dateCopy.getDate() - days);
// 	return dateCopy.toDateString();
// }

// console.log(getDateAgo(date, 1));
// console.log( getDateAgo(date, 2) ); 
// console.log( getDateAgo(date, 365) );

//29 Последний день месяца

// function getLastDayOfMonth(year, month){
// 	var date = new Date(year, month + 1, 0);
	
// 	 return date.getDate();
// }

// console.log(getLastDayOfMonth(2012, 1));

// 30 Сколько секунд уже прошло сегодня?

// function getSecondsToday(){
// 	var now = new Date();
// 	var today = new Date(now.getFullYear(), now.getMonth(), now.getDate());
// 	var diff = now - today;
// 	return Math.floor(diff / 1000);
// }

// console.log(getSecondsToday());

// 31 Сколько секунд - до завтра? 

// function getSecondsToTomorrow(){
// 	var now = new Date();
// 	var tomorrow = new Date(now.getFullYear(), now.getMonth(), now.getDate() + 1);
// 	var diff = tomorrow - now;
// 	return Math.floor(diff / 1000);
// }
// console.log(getSecondsToTomorrow());


// 32 Вывести дату в формате дд.мм.гг

// var d = new Date(2014, 0, 30);

// function formatDate(d){
// 	options = {
// 		day: '2-digit',
// 		month: '2-digit',
// 		year: '2-digit'
// 	};
// 	return d.toLocaleString('ru', options);
// }

// console.log(formatDate(d));

//33 Относительное форматирование даты

// function formatDate(date) {
// 	var now = new Date();
// 	var diff = (now - date) / 1000;
// 	var	options = {
// 		day: '2-digit',
// 		month: '2-digit',
// 		year: '2-digit', 
// 		hour: 'numeric',
//   	minute: 'numeric',
// 	};

// 	if (diff <= 1){
// 		return 'только что';
// 	}else if(diff <= 30) {
// 		return '30 сек. назад';
// 	}else if(diff <= 300){
// 		return '5 мин. назад';
// 	}else {
// 		return date.toLocaleString('ru', options) ;
// 	}
//  }

// console.log( formatDate(new Date(new Date - 86400 * 1000))	 );