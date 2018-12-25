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
function fibBinet(n){
	return Math.round(Math.pow(((1 + Math.sqrt(5))/2), n) / Math.sqrt(5));
}
console.log(fibBinet(8));