$(document).ready(function () {
    $('.home-slider').owlCarousel({
        loop:true,
        nav:true,
        dots: true,
        items:1,
        margin:0
    });
    $('.about-slider').owlCarousel({
        loop:true,
        nav:true,
        navText: ["<img src='img/arrow-slider1_grey.svg' alt='arrow'>","<img src='img/arrow-slider2_grey.svg' alt='arrow'>"],
        dots: false,
        items:1,
        margin:0
    });
    $('.owl-pr-images').owlCarousel({
        loop:true,
        nav:true,
        navText: ["<img src='img/arrow-slider1_black.svg' alt='arrow'>","<img src='img/arrow-slider2_black.svg' alt='arrow'>"],
        dots: false,
        items:3,
        margin:20,
        responsive : {
            0 : {
                items:2,
            },
            768 : {
                items:2,
            },
            993 : {
                items:3,
            },
        }
    });
});
