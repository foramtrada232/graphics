$(document).ready(function () {
    $('.header_slider').slick({
        // dots: trule,
        infinite: true,
        // speed: 300,
        slidesToShow: 1,
        arrows: true,
        prevArrow: '<button class="slick-prev" aria-label="Previous" type="button">Previous</button>',
        nextArrow: '<button class="slick-next" aria-label="Next" type="button">Next</button>',
        autoplay: true,
        autoplaySpeed: 3000,
        // adaptiveHeight: true,
    });
    
    $('.latest_news_slider').slick({
        dots: true,
        // infinite: true,
        // speed: 300,
        slidesToShow: 3,
        arrows: true,
        prevArrow: false,
        nextArrow: false,
        // autoplay: true,
        // centerMode: true,
        infinite: true,
        centerPadding: '10px',
        autoplaySpeed: 3000,
        // adaptiveHeight: true,
        responsive: [
            {
              breakpoint: 1200,
              settings: {
                slidesToShow: 3,
                slidesToScroll: 1,
              }
            },
            {
              breakpoint: 992,
              settings: {
                slidesToShow: 2,
                slidesToScroll: 1,
              }
            },
            {
              breakpoint: 768,
              settings: {
                slidesToShow: 1,
                slidesToScroll: 1
              }
            },
            {
              breakpoint: 577,
              settings: {
                slidesToShow: 1,
                slidesToScroll: 1
              }
            }
          ]
    });
    $('.center').on('beforeChange', function(event, slick, currentSlide, nextSlide){
      console.log('beforeChange', currentSlide, nextSlide);
    });
    $('.center').on('afterChange', function(event, slick, currentSlide){
      console.log('afterChange', currentSlide);
    });
});