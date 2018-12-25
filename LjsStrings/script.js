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
function extractCurrencyValue(str){
	return +str.slice(1);
}
console.log(extractCurrencyValue("$120"));
