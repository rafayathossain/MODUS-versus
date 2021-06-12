(function($){
'use strict'

//Sticky menu starts
$(window).scroll(function(){

    var counter = $(window).scrollTop();

    if(counter>450){
        $('.header').css({ 
            "position": "fixed", 
            "z-index":"99",
            "background": "#485460",
            "padding-top":"0",
            "padding-bottom":"0",
         });

        $('.menu').css({
            "top":"40px",
        });

        $('.top').fadeIn()

    }

    else{
        $('.header').css({ 
            "position": "relative", 
            "background": "#76c7c0",
            "padding-top":"10px",
            "padding-bottom":"10px",
         });

         $('.menu').css({
            "top":"60px",
        });

        $('.menu').removeAttr('style');

        $('.top').removeAttr('style');
    }

});

//Sticky menu ends

//Menu button starts
$(".menu-button i").on('click', function(){
    $('.menu').toggle("slow");
});
//Menu button ends

//happy client Owl Carousel Area Starts
$('.happyclient-owlcarousel').owlCarousel({
    loop:true,
    margin:10,
    autoplay:true,
    dots:false,
    nav:true,
    responsive:{
        0:{
            items:1
        },
        757:{
            items:2
        },
        992:{
            items:3
        },
        1200:{
            items:5
        }
    }
});
//happy client Owl Carousel Area Ends

//blog Owl Carousel Area starts

$('.blog-owlcarousel').owlCarousel({
    loop:true,
    margin:10,
    autoplay:true,
    dots:false,
    nav:true,
    responsive:{
        0:{
            items:1
        },
        600:{
            items:1
        },
        1000:{
            items:1
        }
    }
});
//blog Owl Carousel Area ends

//mix it up area starts
$(document).ready(function(){
    var mixer = mixitup('.pgallery');
});
//mix it up area ends

//portfolio Owl Carousel Area starts
$('.port-owlcarousel').owlCarousel({
    loop:true,
    margin:30,
    autoplay:true,
    dots:false,
    nav:true,
    responsive:{
        0:{
            items:1
        },
        600:{
            items:2
        },
        1000:{
            items:4
        }
    }
});
//portfolio Owl Carousel Area ends

//BS carousel button make active on click starts
    $('.menu ul li').on('click', function(){
        $(this).addClass('active-menu').siblings().removeClass('active-menu');
    });
//BS carousel button make active on click ends


//Progressbar Area Starts
$('.circlechart').circlechart();
//Progressbar Area Ends

}) (jQuery);

