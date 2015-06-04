$(document).ready(function() {
	setMeImage();
	window.onscroll = resizeLogo;
});

// Rotates the opactity of the 'regularMe' picture and then calls itself again for an infinite loop.
function setMeImage() {
	$('#regularMePic').fadeOut(500).delay(2000).fadeIn(1000, function() { setMeImage() });
}


function resizeLogo(ev) {
	var bigText = true;

	if (window.pageYOffset > 250) {
		bigText = false;
	} else if (window.pageYOffset <= 250) {
		bigText = true;
	}

	if( bigText ) {
		$(".logo h1").animate({"font-size":"4em"}, 100);
		$(".header").animate({"height": "100px"}, 100);		
	}else{
		$(".logo h1").animate({"font-size":"2.2em"}, 100);
		$(".header").animate({"height": "50px"}, 100);		
	}


};