// //1
// alert('Я - JavaScript!');

// 2 
// var name = prompt('What is your name?', '');
// (name == '')?alert('Pls, write your name'):alert('Hello ' + name );

'use strict';
//3 
// var question = prompt('What is real name of JavaScript', '');

// if(question == 'EcmaScript'){
// 	alert('Yes, it\'s right');
// }else{
// 	alert('Pls, learn harder');
// }

//4 
// var number = prompt('Write a number', '');

// if(number > 0){
// 	alert(1);
// }else if(number < 0){
// 	alert(-1);
// }else{
// 	alert(0);
// }

// 5 Admin

// var userName = prompt('Who is there?', '');

// if (userName == 'Admin') {
// 	var pass =	prompt('What is password?', '');

// 	if( pass == 'Dark lord'){
// 		alert('Hello, fellow');
// 	} else if(pass == null){
// 		alert('Are you scary?');
// 	}else {
// 		alert('Password was wrong');
// 	}

// } else if (userName == null) {
// 	alert('Vhod otmenen!');	
// }else {
// 	alert('I dono you, you now dewey?');
// }

// 6 ?
// var login = prompt('What is you login', '');

// (login == 'Vasya')? alert('Hello there'): 
// (login == 'Director')? alert('Greetings'):
//  (login == '') ? alert('No login') :
//   alert('Login is wrong');

// 7 age

// var age = prompt('Write your age', '');

// if (age >= 14 && age <= 90){
// 	console.log(age);
// }else{ 
// 	console.log('Access dined');
// }
// 8 ||
// console.log(null || -1 && 1);

// 9 for continue
// for(var i = 2; i < 10; i++){
// 	if(i % 2 != 0) continue;
// 	console.log(i);
// }

//10 while 
// var i = 2;

// while(i < 10){
// 	if(i % 2 == 0){
// 		console.log(i);
// 	}
// 	i++;
// }

// 11 while 
// var i = 0;

// while(i < 3){
// 	console.log('Number ' + i + '!');
// 	i++;
// }

//12 loop prompt
// do{
// 	var number = prompt('Pls enter a number greater than 100', '');
// }while(number <= 100 && number != null);

//13 simple number
// out: for (var i = 2; i <= 50; i++){
// 	for(var z = i-1; z > 1; z--){
// 		if(i % z == 0) continue out;
// 	}
// 	console.log(i);
// }

// 14 Browser from switch in if
// var browser = prompt('What is your browser?', '');
// if(browser === 'IE'){
// 	alert('Ohhh, you hava IE!');
// }else if(browser === 'Chrome' 
// || browser === 'Firefox' 
// || browser === 'Safari' 
// || browser === 'Opera'){
// 	alert('Yes, that we support too');
// }else{
// 	alert('We hope,that everything in your browser ok too ');
// }

//15 from if to switch
// var a =  +prompt('a?', '');

//  switch(a){
// 	 case 0:
// 	 alert(0);
// 	 break;

// 	 case 1:
// 	 alert(1);
// 	 break;

// 	 case 2:
// 	 case 3:
// 	 alert('2,3');
// 	 break;
//  }

// 16 checkAge
// function checkAge(age) {
// 	return (age>18) || confirm('Родители разрешили?');
// }
// checkAge(+prompt('Введите ваш возраст?',''));

//17 min
// function min(x, a){
// 	return (x > a) ? x : a;
// }
// console.log(min(1,1));

//18 x from n
// function pow(x, n){
// 	var a = 1;
// 	for(var i = 0; i < n; i++){
// 		 a *= x;
// 	}
// 	return a;
// }

// console.log(pow(3, 4));

// 19 sumTO() recusrsion
// function sumTo(n){
// 	if(n != 1){
// 		return n + sumTo(n-1);
// 	}else {
// 		return n;
// 	}
// }
// console.log(sumTo(100));

//20 sumTo() loop
// function sumTo(n){
// 	var x = n;
// 	while(n > 1){
// 		x += n-1;
// 		n--;
// 	}
// 	return x;
// }
// console.log(sumTo(100));

// 21 sumTo() formula arithmetic progression
// function sumTo(n) {
// 	return (( 2 + (n - 1))/ 2 )*n;
// }
// console.log(sumTo(4)); 

// 22 Facrorial reccursion
// function factorial(n){
// 	if(n == 1) return 1;
// 	return n * factorial(n - 1);
// }
// console.log(factorial(5));

// 23 Fibonachi reccursion
// function fib(n){
// 	return n <= 1 ? n : fib(n - 1) + fib(n - 2);
// }
// console.log(fib(77));

// 24 Fibonachi loop
function fib(n){
 var a = 1,
		 b = 1,
		 c;
		 for(var i = 3; i <= n; i++){
			c = a + b;
			a = b;
			b = c;
		 }
		 
		 return b;
}
console.log(fib(77));

