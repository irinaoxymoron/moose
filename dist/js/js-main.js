$(document).ready(function(){

  $(".menu-trigger").click(function () {
    $(".ul-trigger").slideToggle();
    $(".menu-trigger").toggleClass('menu_state_open');
  });
  
  $('.menu-trigger').click(function(){
    if($(this).hasClass('menu_state_open')){
      $('body').css('overflow', 'hidden');
    }else{
      $('body').css('overflow', 'auto');
    }
  });

  $(window).resize(function(){
    if ($(window).width() > 1024) {
      $('.ul-trigger').removeAttr('style');
    };
  });

});

$('.center').slick({
  centerMode: true,
  centerPadding: '60px',
  slidesToShow: 1,
  arrows: true,
  autoplay: true,
  autoplaySpeed: 3000,
  responsive: [
  {
    breakpoint: 1024,
    settings: "unslick"
  }
  ]
});

$(function () { 
  $('.menu a').each(function () {
    var location = window.location.href;
    var link = this.href;
    if(location == link) {
      $(this).addClass('active');
    }
  });
});