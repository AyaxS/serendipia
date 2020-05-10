$( document ).ready(function() {
    var windowHeight = $(window).height();
    $(".s_content-banner").css('height', windowHeight);

    $('.s_logo-partners').slick({
        arrows: true,
        cssEase: 'cubic-bezier(0.7, 0, 0.3, 1)',
        prevArrow: '<span class="slick-prev"><img src="./img/1x/arrow-left.png" alt=""></span>',
      	nextArrow: '<span class="slick-next"><img src="./img/1x/arrow-right.png" alt=""></span>',
        slidesToShow: 4,
        slidesToScroll: 1,
        infinite: true,
        autoplay: true,
  		autoplaySpeed: 5000,
		//fade: false,
        dots: false
    });

    $('.ancla').click(function(e){				
		e.preventDefault();		//evitar el eventos del enlace normal
		var strAncla=$(this).attr('href'); //id del ancla
        $('body,html').stop(true,true).animate({				
            scrollTop: $(strAncla).offset().top
        },1000);
    });
});