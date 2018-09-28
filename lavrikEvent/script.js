/*
	свойства 
	события 
	методы
*/


var text = document.querySelector('#text'); // Получение по тегу
 
text.onclick = function(){
	text.style.color = 'red';
	text.innerHTML = 'ура'; 
}
console.log(text);

var butt = document.getElementById('buttonDOM');

 function print_ofject(obj){
	var res = '<ul>';

	for (i in obj)
	res += '<li><b>' + i + '</b>:' + obj[i] + '</li>';

	res += '</ul>';
	document.write(res); 
}
	print_ofject(text);
	

