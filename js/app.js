$(document).ready(function() {
    // If the user is on a mobile device...
    if (window.innerWidth < 768) {
       // Set my-pic image opacity rotation
	   setMeImage();
       // Remove grayscale from social media images
       $( "#stack-overflow-logo, #git-hub-logo, #twitter-logo").removeClass("grayscale");
    }

    // Mouse hover event handler for My Picture
    $( "#regularMePic" ).hover(
        function() {
            if (window.innerWidth > 768) {
                $( this ).fadeTo(500, 0);
            }
        }, function() {
            if (window.innerWidth > 768) {
                $( this ).fadeTo(500, 1);
            }
        }
    );

    // Mouse hover event handler for Social Media logos
    $( "#stack-overflow-logo, #git-hub-logo, #twitter-logo").hover(
        function() {
            if (window.innerWidth > 768) {
                $( this ).removeClass("grayscale");
            }
        }, function() {
            if (window.innerWidth > 768) {
                $( this ).addClass("grayscale");
            }
    });

    // Everytime the window scrolls, run this function
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
    	myPic = $('#my-pic'),
        about = $('#about'),
        projects = $('#projects'),
        social = $('#social'),
        contact = $('#contact');

    // Offset Y section detection by 41 pixels because that is roughly how many pixels tall the navbar is.
    // A user scrolling to that section wouldn't be able to see the top 41 pixels otherwise.
  	if (x >= myPic.offset().top && x < (myPic.offset().top + myPic.height())) {
  		//Reset all nav links
  		$('.about').css("background-color", "#2E0927");
        $('.projects').css("background-color", "#2E0927");
        $('.social').css("background-color", "#2E0927");
        $('.contact').css("background-color", "#2E0927");
  	}
    if (x >= about.offset().top - 41 && x < (about.offset().top + about.height())) {
        $('.about').css("background-color", "#04756F");
        // Reset other nav link colors
        $('.projects').css("background-color", "#2E0927");
        $('.social').css("background-color", "#2E0927");
        $('.contact').css("background-color", "#2E0927");
    }
    if (x >= projects.offset().top - 41 && x < (projects.offset().top + projects.height())) {
        $('.projects').css("background-color", "#04756F");
        // Reset other nav link colors
        $('.about').css("background-color", "#2E0927");
        $('.social').css("background-color", "#2E0927");
        $('.contact').css("background-color", "#2E0927");
    }
    if (x >= social.offset().top - 41 && x < (social.offset().top + social.height() / 2)) {
        $('.social').css("background-color", "#04756F");
        // Reset other nav link colors
        $('.projects').css("background-color", "#2E0927");
        $('.about').css("background-color", "#2E0927");
        $('.contact').css("background-color", "#2E0927");
    }
    if (x > (social.offset().top - 41 + social.height() / 5)) {
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
    // Do not run function if screen is small
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
    $('html,body').animate({ scrollTop: $("#" + id).offset().top - 40},
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