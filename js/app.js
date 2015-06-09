$(document).ready(function() {
	setMeImage();
	window.onscroll = resizeLogo;

	$('.navbar-inverse .navbar-nav > li > a').click(function(e) {
		// Prevent a page reload when a link is pressed
	    e.preventDefault(); 
	    // Call the scroll function
	    goToByScroll($(this).attr("alt"));
	})
});

// Rotates the opactity of the 'regularMe' picture and then calls itself again for an infinite loop.
function setMeImage() {
	$('#regularMePic').fadeOut(500).delay(2000).fadeIn(1000, function() { setMeImage() });
}


function resizeLogo(ev) {
	if ( window.pageYOffset > 175  && window.innerWidth > 768 ) {
		$("#logo h1").animate({"font-size":"2vmax"}, 100);	
	} else if (window.pageYOffset <= 174 && window.innerWidth > 768) {
		$("#logo h1").animate({"font-size":"5vw"}, 100);
	}
};

 // This is a functions that scrolls to #{blah}link
function goToByScroll(id){
      // Remove "link" from the ID
   	id = id.replace("link", "");
      // Scroll
    $('html,body').animate({ scrollTop: $("#"+id).offset().top},
        'slow');
}