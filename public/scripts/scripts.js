// Smooth Scroll

$(document).ready(function(){

    $('.main-carousel').flickity({
        // options
        cellAlign: 'left',
        contain: true
      });

	$('.smooth').on('click', function(e){
		var linkHref = $(this).attr('href');

		$('html, body').animate({
			scrollTop: $(linkHref).offset().top
		}, 1500);

		e.preventDefault();
    });

    // document ready, establish smallScreen state

    if($(window).width() < 766) {
        smallScreen = true;
    };
});


// Variables for Nav Bar

var didScroll;
var lastScrollTop = 0;
var delta = 5;
var navbarHeight = $('nav').outerHeight();

// Variables for screen size conditional

var smallScreen = false;

// on scroll, let interval know that scroll has occurred

$(window).scroll(function(event){
	didScroll = true;
});


// run hasScrolled() and reset didScroll status

setInterval(function(){
	if (didScroll) {
		hasScrolled();
		didScroll = false;
	}
}, 250);


function hasScrolled(){
    var scrollTop = $(this).scrollTop();
    
    if(smallScreen) {
        console.log("smallscren")
    }
    else {
        if(Math.abs(lastScrollTop - scrollTop) <= delta)
		return;

        if(scrollTop < 100){
            $('nav').removeClass('nav-down').addClass('nav-up');
        }
        else{
            if (scrollTop > navbarHeight){
                $('nav').removeClass('nav-up').addClass('nav-down');
            }
        }
    }
	lastScrollTop = scrollTop;
}

// Window resize function

$(window).resize(function() {
    if($(window).width() < 766) {
        smallScreen = true;
        // console.log("smallscreen")
    } else {
        smallScreen = false;
        // console.log("bigscreen")
        
    }
});

// Hamburger

$('.hamburger').click(function(){
    $('.black').addClass('black-show');
    $('.nav').addClass('mobile-nav-show');
});

$('.black').click(function(){
    $('.black').removeClass('black-show');
    $('.nav').removeClass('mobile-nav-show');
})

$('.smooth').click(function(){
    $('.black').removeClass('black-show');
    $('.nav').removeClass('mobile-nav-show');
})





// var hamburger = document.querySelector(".hamburger");
// hamburger.addEventListener("click", showMenu, false);
// var hamburgerCollapse = document.querySelector(".hamburger--collapse")

// var flyoutMenu = document.querySelector("#nav");
// flyoutMenu.addEventListener("click", showMenu, false);

// function showMenu(e) {
// 	flyoutMenu.classList.toggle("show");
// 	hamburgerCollapse.classList.toggle("is-active");
// }

// Screen Resize



// $(document).ready(function() {
//     if($(window).width() < 770) {
//         smallScreen = true;
//     }
// });



