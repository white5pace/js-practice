var myVar, doSomething;

doSomething = function(){
	if(myVar === undefined){
		alert('Pls write smthg');
	}else{
	alert('You typed: '+ myVar);}
}

// Координаты мыши
// window.addEventListener('mousemove', function(e){
// 	console.log('x: '+ e.offsetX, 'y: ' + e.offsetY);
// });

// Счетчик каждые 0.2 секунды с остановкой при нажатие на экран 
// var i = 0;

// var timer = setInterval(function(){
// 	console.log(i++);
// }, 200);

// window.onclick = function(){
// 	clearInterval(timer);

// Сonfirm с логичиским оператором И
// var start = function(){
// 	console.log('Started!');
// };

// confirm('Start?') && start();

// console.log(
// 	prompt('Your age?') >= 18 
// 	? 'Access granted'
// 	: 'Access denied'
// );


// Объект Location 
// console.log(window.location);

// location.hash = 'anything';

// console.log('Current URL is: ' + location);

//Navigator, screen, history

console.log(screen.width, screen.height);
console.log(screen.availWidth, screen.availHeight);
console.log(screen.colorDepth); // Глубина цвета кол-во бит на px

console.log(navigator);

console.log(history.length);


var links, updatestate, contentEl, navEl;

contentEl = document. querySelector('.content');
navEl = document.querySelector('.nav');

links = {
	main: "This is the <strong>main</strong> page",
	about: "This is the <strong>about</strong> page",
	dowloads: "This is the <strong>dowloads</strong> page"
}

updatestate = function(state){
	if(!state) return;
	contentEl.innerHTML = links[state.page];
}

navEl.addEventListener('click', function(e){
	var state;
	if(e.target.tagName !== 'A') return;
	state = {
		page: e.target.getAttribute('href')
	};
	history.pushState(state, '', state.page);
	updatestate(state);
	e.preventDefault();
});

window.addEventListener('hashchange', updatestate);
window.addEventListener('load', updatestate);