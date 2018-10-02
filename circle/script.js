
	var circle = document.querySelector('.circle');
	var dot = document.querySelector('.dot');

	function showCircle(){
		var circleValue = document.querySelector('#circle-value').value*2;
		circle.style.width = circleValue * 10 + 'px';
		circle.style.height = circleValue * 10 + 'px';
	}

	function showDot(){
		var xValue = document.querySelector('#x-value').value;
		var yValue = document.querySelector('#y-value').value;
		var r = parseInt(circle.style.width)/2;
		var dotState = document.querySelector('.dot-state h1');
		dot.style = '';
		dotState.innerHTML = '';

		if(xValue > 0){
			dot.style.left = r + xValue*10 - 5 + 'px';
		}
		else{
			dot.style.right = r + xValue*-10 - 5 + 'px';
		}

		if(yValue > 0){
			dot.style.bottom = r + yValue*10 - 5 + 'px';
		}
		else{
			dot.style.top = r + yValue*-10 - 5+ 'px';
		}
		var hypotenuse = Math.sqrt(xValue*xValue + yValue*yValue);
		if(hypotenuse*10 < r){
			dotState.innerHTML = 'Точка принадлежит кругу';
		}else{
			dotState.innerHTML = 'Точка не принадлежит кругу';
		}
		dot.style.display = 'inline-block';

	}

