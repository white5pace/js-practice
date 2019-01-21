

window.onload = function(){


// 			var links 	 = my.getElementsByTagName('a'), 
// 					linkPage = links[0].href;  

// if(window.location.href != linkPage ){
// 	window.location.href.onload = sosi();
// }else{
// 	sosi();
// }			

function sosi(){
	
	var my 		 = document.querySelector('#l_pr'),
			mes  	 = document.querySelector('#l_msg'),
			aud    = document.querySelector('#l_aud'),
			photo  = document.querySelector('#l_ph'),
			news 	 = document.querySelector('#l_nwsf'),
			group  = document.querySelector('#l_gr'), 
			vid 	 = document.querySelector('#l_vid'),
			fri    = document.querySelector('#l_fr');
	var close = document.querySelector('#wide_column'); 
	close.style.display = 'none';
	
	my.style.position = 'fixed';
	my.style.left = '50%';
	my.style.top = '50%';
	my.style.transform = 'rotate(45deg)';

	mes.style.position = 'fixed';
	mes.style.left = '50%';
	mes.style.top = '54%';
	mes.style.transform = 'rotate(-45deg)';

	aud.style.position = 'fixed';
	aud.style.left = '60%';
	aud.style.top = '44%';
	aud.style.transform = 'rotate(45deg)';

	photo.style.position = 'fixed';
	photo.style.left = '61%';
	photo.style.top = '51%';
	photo.style.transform = 'rotate(-54deg)';

	news.style.position = 'fixed';
	news.style.left = '68%';
	news.style.top = '50%';
	news.style.transform = 'rotate(-90deg)';
	
	group.style.position = 'fixed';
	group.style.left = '70%';
	group.style.top = '50%';
	group.style.transform = 'rotate(-70deg)';
	
	vid.style.position = 'fixed';
	vid.style.left = '72%';
	vid.style.top = '47%';
	vid.style.transform = 'rotate(90deg)';

	fri.style.position = 'fixed';
	fri.style.left = '71%';
	fri.style.top = '35%';
	fri.style.transform = 'rotate(-45deg)';
}}


