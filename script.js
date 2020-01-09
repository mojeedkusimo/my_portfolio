$(function (){
    $(window).on("load resize", function () {
        $(".fs").css("height", window.innerHeight).css("width", window.innerWidth);
    });

    // $("#video-wallpaper").wallpaper({
    //     source: {
    //         poster: "Jellyfish.jpg",
    //         mp4: "demo-video.mp4",
    //         video: "//www.youtube.com/embed/VIDEO_ID"
    //     }
    // });

    // add Bootstrap's scrollspy
    $('body').scrollspy({
        target: '.navbar',
        offset: 200
    });

    // smooth scrolling
    $('nav a, .down-button a').bind('click', function () {
        $('html, body').stop().animate({
            scrollTop: $($(this).attr('href')).offset().top - 60
        }, 1500, 'easeInOutExpo');
        event.preventDefault();
    });

    // initializing wow.js
    new WOW().init();

    //initializing nanogallery
    $(document).ready(function () {
        $("#projects").nanoGallery();
    });
}); 