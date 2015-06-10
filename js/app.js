$(document).ready(function() {
	setMeImage();
	window.onscroll = resizeLogo;

	$('.navbar-inverse .navbar-nav > li > a').click(function(e) {
		// Prevent a page reload when a link is pressed
	    e.preventDefault(); 
	    // Call the scroll function
	    goToByScroll($(this).attr("class"));
	})

});

$(document).scroll(changeNavColor);

// Changes the background of the nav links as the user scrolls through website.
function changeNavColor() {
    var x = $(this).scrollTop(),
    	myPic = $('#myPic'),
        about = $('#about'),
        projects = $('#projects'),
        social = $('#social'),
        contact = $('#contact');

  	if (x >= myPic.offset().top && x < (myPic.offset().top + myPic.height())) {
  		//Reset all nav links
  		$('.about').css("background-color", "#2E0927");
        $('.projects').css("background-color", "#2E0927");
        $('.social').css("background-color", "#2E0927");
        $('.contact').css("background-color", "#2E0927");
  	}
    if (x >= about.offset().top - 1 && x < (about.offset().top + about.height())) {
        $('.about').css("background-color", "#04756F");
        // Reset other nav link colors
        $('.projects').css("background-color", "#2E0927");
        $('.social').css("background-color", "#2E0927");
        $('.contact').css("background-color", "#2E0927");
    }
    if (x >= projects.offset().top - 1 && x < (projects.offset().top + projects.height())) {
        $('.projects').css("background-color", "#04756F");
        // Reset other nav link colors
        $('.about').css("background-color", "#2E0927");
        $('.social').css("background-color", "#2E0927");
        $('.contact').css("background-color", "#2E0927");
    }
    if (x >= social.offset().top - 1 && x < (social.offset().top + social.height() / 2)) {
        $('.social').css("background-color", "#04756F");
        // Reset other nav link colors
        $('.projects').css("background-color", "#2E0927");
        $('.about').css("background-color", "#2E0927");
        $('.contact').css("background-color", "#2E0927");
    }
    if (x > (social.offset().top - 1 + social.height() / 5)) {
    	$('.contact').css("background-color", "#04756F");
    	// Reset other nav link colors
        $('.projects').css("background-color", "#2E0927");
        $('.social').css("background-color", "#2E0927");
        $('.about').css("background-color", "#2E0927");
    }
};

// Rotates the opactity of the 'regularMe' picture and then calls itself again for an infinite loop.
function setMeImage() {
	$('#regularMePic').fadeOut(500).delay(2000).fadeIn(1000, function() { setMeImage() });
};

function resizeLogo(ev) {
	if ( window.pageYOffset > 175  && window.innerWidth > 768 ) {
		// Shrink logo
		$("#logo h1").animate({"font-size":"2vmax"}, 100);	
	} else if (window.pageYOffset <= 174 && window.innerWidth > 768) {
		// Expand logo
		$("#logo h1").animate({"font-size":"5vw"}, 100);
	}

};

// This is a function that scrolls to #{blah}link
function goToByScroll(id){
    // Remove "link" from the ID
   	id = id.replace("link", "");
    // Scroll
    $('html,body').animate({ scrollTop: $("#" + id).offset().top},
        'slow');
    // Change nav link background
    changeNavColor();
    // Reset nav text color
    $("." + id).css("color: #D90000");
    // Close menu drop down if screen is small enough
    if (window.innerWidth < 768) {
    	document.getElementById("navButton").click();
    }
};