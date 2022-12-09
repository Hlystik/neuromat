$(function () {
   /*  $('.acc__head').on('click', function () {
        console.log = (this);
        $(this).toggleClass('acc__head_active').next().slideToggle();
        $('.acc__head').not(this).removeClass('acc__head_active').next().slideUp();
      });
      $('#acc .acc__head:first').click(); */
      $('.accordion-list > li > .answer').hide();
    
  $('.accordion-list > li').click(function() {
    if ($(this).hasClass("active")) {
      $(this).removeClass("active").find(".answer").slideUp();
    } else {
      $(".accordion-list > li.active .answer").slideUp();
      $(".accordion-list > li.active").removeClass("active");
      $(this).addClass("active").find(".answer").slideDown();
    }
    return false;
  });
  


})