// preloader
$(window).load(function(){
    $('.preloader').fadeOut(1000); // set duration in brackets    
});

$(function() {
    new WOW().init();
    $('.templatemo-nav').singlePageNav({
    	offset: 70
    });

    /* Hide mobile menu after clicking on a link
    -----------------------------------------------*/
    $('.navbar-collapse a').click(function(){
        $(".navbar-collapse").collapse('hide');
    });
})

    function updateHighlight() {
      const slides = document.querySelectorAll('.swiper-slide');
      slides.forEach((slide) => slide.classList.remove('highlight'));

      const activeSlide = document.querySelector('.swiper-slide-active');
      if (activeSlide) {
        activeSlide.classList.add('highlight');
      }
    }
