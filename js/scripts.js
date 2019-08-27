new WOW().init();

$('.slider-wrap').slick({
   infinite: true,
   slidesToShow: 2,
   slidesToScroll: 1,
   arrows: true,
   prevArrow: '.arrow-prev',
   nextArrow: '.arrow-next',
   responsive: [
     {
       breakpoint: 1045,
       settings: {
         slidesToShow: 1,
         slidesToScroll: 1,
       }
    }
   ]
 });
 $(document).ready(function(){
   var form = $('.formresult');
   var overlay = $('.overlay');
   var close = $('.formresult-close');

   close.click(function(){
     form.css("display", "none");
     overlay.css("display", "none");
   });
   overlay.click(function(){
     form.css("display", "none");
     overlay.css("display", "none");
   });
 });

$('.slider-item .footer').on('click', function(){
  $(this).parent().toggleClass('review_active');
  $(this).parent().find('.review .hide-text').slideToggle();
});
// <!-- анимация якорей -->
$(function () {
      $('a[href*="#"]:not([href="#"])').click(function () {
          if (location.pathname.replace(/^\//, '') === this.pathname.replace(/^\//, '') && location.hostname === this.hostname) {
              var target = $(this.hash);
              target = target.length ? target : $('[name=' + this.hash.slice(1) + ']');
              if (target.length) {
                  $('html, body').animate({
                      scrollTop: target.offset().top - 50
                  }, 1000);
                  return false;
              }
          }
      });
  });
$(document).ready(function() {
  $(".form").submit(function() {
    $.ajax({
      type: "POST",
      url: "/mailers/form.php",
      data: $(this).serialize()
    }).done(function() {
      $(this).find("input").val("");
      $(".formresult").css("display", "flex");
      $(".overlay").css("display", "block");
      $(".form").trigger("reset");
    });
    return false;
  });
});