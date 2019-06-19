 $(window).scroll(function () {
   if ($(this).scrollTop() > 100) {
     $('#header').addClass('white-header');
   }
   else{
     $('#header').removeClass('white-header');
   }
 });

$('.header-menu ul li').hover(function(){
  $(this).children(".header-submenu").slideToggle();
  $(this).children(".header-submenu").toggleClass('header-submenu_active');
  $(this).children(".header-submenu").addClass('header-submenu_active');
});

 $('.slider-wrap').slick({
   infinite: true,
   slidesToShow: 2,
   slidesToScroll: 1,
   arrows: true,
   prevArrow: '.arrow-prev',
   nextArrow: '.arrow-next'
 });

 $(document).ready(function(){
   var button = $('.thanks-btn');
   var form = $('.thanks-popup');
   var overlay = $('.overlay');
   var close = $('.thanks-close');
   var body = $('body');

   button.click(function(){
     form.css("display", "flex");
     overlay.css("display", "block");
     body.css("overflow", "hidden");
   });
   close.click(function(){
     form.css("display", "none");
     overlay.css("display", "none");
     body.css("overflow", "scroll");
   });
   overlay.click(function(){
     form.css("display", "none");
     overlay.css("display", "none");
     body.css("overflow", "scroll");
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
                  }, 500);
                  return false;
              }
          }
      });
  });