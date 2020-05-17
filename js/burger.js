$(function () {

   $('.navicon').on('click', function () {
      $('.menu-list ul').slideToggle();
      $('body').toggleClass('no-scroll');
      $('.header, .navicon').toggleClass('active');
      
   });

});