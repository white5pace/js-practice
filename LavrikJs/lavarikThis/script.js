window.onload = function(){
	 var items = document.querySelectorAll('.click .items .item');

		for(var i = 0; i < items.length; i++){
			items[i].onclick = activeItem;
		}



function activeItem(){
	this.classList.toggle('item-active');
}


var div = document.querySelector('.timer .items .item');
var minute = document.querySelector('.timer .items .minute');
var	timer = new Timer(60, div, minute);

		function Timer(time, elem, div2){
			var minuteCounter = 0;
			this.elem = elem;
			this.time = time;
			this.div2 = div2;

			this.tick = function(){
			
				this.time--;
				this.elem.innerHTML = this.time;
				if(this.time == 0){
					this.time = 60;
					minuteCounter++;
					this.div2.innerHTML = minuteCounter;
					
				}
			};
		}
	
	setInterval( function(){
		timer.tick();
	}	, 1000);


var flItem = document.querySelectorAll('.flicker .items .item');

function flicker(){
	this.classList.toggle('item-active');
}

setInterval(function(){
	var rand = mtRand(0, flItem.length - 1);
	flicker.call(flItem[rand]);
}, 500);

function mtRand(min, max){
	return Math.floor(Math.random() * (max - min + 1));
}





	var fadeIt = document.querySelectorAll('.fader .items .item');

	for (i = 0; i < fadeIt.length; i++){
		fadeIt[i].onclick = function(){
			fade(this, 1000, function(){
				this.style.display = 'none';
			});
		}
	}

	function fade(elem, t, f){
		var fps = 50;
		var time = t || 500;
		var steps = time / fps; 
		var op = 1; 
		var d0 = op / steps;

		var callback = f || function(){};

		var timer = setInterval(function(){
			op -= d0;
			elem.style.opacity = op;
			steps--;

			if(steps === 0){
				clearInterval(timer);
				callback.call(elem);
			}
		}, (1000 / fps));
	}


};
