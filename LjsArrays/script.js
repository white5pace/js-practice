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
function camelize(str){
	var words = str.split('-');

	for(var i = 1; i < words.length; i++){
		words[i] = words[i].charAt(0).toUpperCase() + words[i].slice(1);
	}
				
	return words.join('');

}

console.log(camelize("list-style-image"));


