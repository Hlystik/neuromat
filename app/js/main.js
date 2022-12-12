$(function () {
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
  $('.menu__hamburger').on('click', function () {
    $('.menu__hamburger').toggleClass('menu__hamburger--active');
    $('.menu__list').toggleClass('menu__list--active');
    //$('.subheader__img').toggleClass('subheader__img--active');
  });
});