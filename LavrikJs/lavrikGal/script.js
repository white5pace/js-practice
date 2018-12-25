var btn_prev = document.querySelector('#gallery .buttons .prev'),
		btn_next = document.querySelector('#gallery .buttons .next'),
		images 	 = document.querySelectorAll('#gallery .photos img');

var i = 0;

// btn_prev.onclick = function(){
// 	images[i].style.display = 'none';
// 	i--;
// 	console.log(i);
// 	if(i < 0){
// 		i = images.length - 1;
// 	}
// 	images[i].style.display = 'block';
// }

// btn_next.onclick = function(){
// 	images[i].style.display = 'none';
// 	i++;
// 	if(i >= images.length){
// 		i = 0;
// 	}
// 	images[i].style.display = 'block';
//}

btn_prev.onclick = function(){
	images[i].className = '';
	i--;
	console.log(i);
	if(i < 0){
		i = images.length - 1;
	}
	images[i].className = 'showed';
}

btn_next.onclick = function(){
	images[i].className = '';
	i++;
	if(i >= images.length){
		i = 0;
	}
	images[i].className = 'showed';
}