$(document).ready(function () {
    $('.slider_section').slick({
        dots: true,
        infinite: true,
        speed: 300,
        slidesToShow: 1,
        arrows: true,
        prevArrow: '<button class="slick-prev" aria-label="Previous" type="button">Previous</button>',
        nextArrow: '<button class="slick-next" aria-label="Next" type="button">Next</button>',
        // autoplay: true,
        autoplaySpeed: 3000,
        adaptiveHeight: true
    });
    $('.latest_news_slider').slick({
        dots: true,
        infinite: true,
        speed: 300,
        slidesToShow: 3,
        arrows: true,
        prevArrow: '<button class="slick-prev" aria-label="Previous" type="button">Previous</button>',
        nextArrow: '<button class="slick-next" aria-label="Next" type="button">Next</button>',
        // autoplay: true,
        autoplaySpeed: 3000,
        adaptiveHeight: true
    });
    
});