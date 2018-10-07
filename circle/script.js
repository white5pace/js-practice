
	var circle = document.querySelector('.circle');
	var dot = document.querySelector('#dot-iput');
	var dotState = document.querySelector('.dot-state h1');	
	var r = 0;

	function showCircle(){
		var circleValue = document.querySelector('#circle-value').value*2;
		circle.style.width = circleValue * 10 + 'px';
		circle.style.height = circleValue * 10 + 'px';
		r = parseInt(circle.style.width)/2;

	}

	function showDot(){
		var xInputValue = document.querySelector('#x-value').value;
		var yInputValue = document.querySelector('#y-value').value;
		var xValue	= xInputValue *10;
		var yValue	= yInputValue *10;
		dot.style = '';

		if(xValue > 0){
			dot.style.left = r + xValue - 5 + 'px';
		}else{
			dot.style.right = r + xValue*-1 - 5 + 'px';
		}

		if(yValue > 0){
			dot.style.bottom = r + yValue - 5 + 'px';
		}else{
			dot.style.top = r+ yValue*-1 - 5 + 'px';
		}

		isBelongs(xValue, yValue);
		dot.style.display = 'inline-block';

	}
	function isBelongs(x, y){

		dotState.innerHTML = '';
		var hypotenuse = Math.sqrt(x*x + y*y);
		if(hypotenuse < r){
			dotState.innerHTML = 'Точка принадлежит кругу';
		}else{
			dotState.innerHTML = 'Точка не принадлежит кругу';
		}
	}

	document.querySelector('.objects').onclick = function(e) {
		dot = document.querySelector('#dot-mouse');
		var x = e.offsetX==undefined?e.layerX:e.offsetX;
		var y = e.offsetY==undefined?e.layerY:e.offsetY;
		dot.style.top = y + 'px';
		dot.style.left = x + 'px';
		dot.style.display = 'inline-block';
	}

	document.querySelector('.objects').addEventListener('click', function(e) {
		var	click = document.elementFromPoint(e.clientX, e.clientY).className;
		console.log(click);
		if(click == 'circle'){
			dotState.innerHTML = 'Точка принадлежит кругу';
		}else{
			dotState.innerHTML = 'Точка не принадлежит кругу';
		}

	}, false);

