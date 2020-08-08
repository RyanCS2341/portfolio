$(document).ready(function(){
    var mainbottom = $('.header').offset().top + $('.header').height();

    // on scroll, 
    $(window).on('scroll', function() {

    // we round here to reduce a little workload
    stop = Math.round($(window).scrollTop());
    if (stop > mainbottom) {
        $('.header').addClass('header-light');
        $('.nav-link').addClass('nav-link-light');
    } else {
        $('.header').removeClass('header-light');
        $('.nav-link').removeClass('nav-link-light');
    }

    });
});