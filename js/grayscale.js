/*!
 * Start Bootstrap - Grayscale Bootstrap Theme (http://startbootstrap.com)
 * Code licensed under the Apache License v2.0.
 * For details, see http://www.apache.org/licenses/LICENSE-2.0.
 */

// jQuery to collapse the navbar on scroll
$(window).scroll(function() {
    if ($(".navbar").offset().top > 50) {
        $(".navbar-fixed-top").addClass("top-nav-collapse chili-red-bg");
        $(".logo").addClass("logo-mini");
        $(".logo-label").fadeOut();
    } else {
        $(".navbar-fixed-top").removeClass("top-nav-collapse chili-red-bg");
        $(".logo").removeClass("logo-mini");
        $(".logo-label").fadeIn();
    }
});

// jQuery for page scrolling feature - requires jQuery Easing plugin
$(function() {
    $('a.page-scroll').bind('click', function(event) {
        var $anchor = $(this);
        $('html, body').stop().animate({
            scrollTop: $($anchor.attr('href')).offset().top
        }, 1500, 'easeInOutExpo');
        event.preventDefault();
    });
});

// Closes the Responsive Menu on Menu Item Click
$('.navbar-collapse ul li a').click(function() {
    $('.navbar-toggle:visible').click();
});


// add image cover on css header:after
var bgImages = window.getComputedStyle(
    document.querySelector('header'), ':after').
        getPropertyValue('content').split(' ');

// bg changer
var bgChange = function (elem, images) {
    index = Math.floor(Math.random() * images.length);
    if(!index || index == 'undefined') {
        image = images[0];
    }

    elem.css('background-image', images[index]);
}

// bg change every 3 secs randomly
setInterval(function () {
    bgChange($('.intro'), bgImages);
}, 3000);