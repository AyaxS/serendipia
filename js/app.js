$( document ).ready(function() {
    var windowHeight = $(window).height();
    $(".s_content-banner").css('height', windowHeight);

    $('.your-class').slick({
        slidesToShow: 3,
        arrows: false,
        dots:false,
        centerMode: true
    });
});