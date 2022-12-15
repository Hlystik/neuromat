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
  if ($(window).width() <= '990') {
    //dark headera
    $(window).on("scroll", function () {
      if ($(this).scrollTop() >= 1) {
        $('.menu').addClass("menu_color");
      }
    });
    $(window).on("scroll", function () {
      if ($(this).scrollTop() < 1) {
        $('.menu').removeClass("menu_color");
      }
    });
  }
  $("a[href*='#']").on("click", function (e) {
    const anchor = $(this);
    $('html, body').stop().animate({
      scrollTop: $(anchor.attr('href')).offset().top-58
    }, 777);
    e.preventDefault();
    return false;
  });
});



function getBrowserId () {
  let browsers = ["Opera", "Chrome", "Safari", "Firefox", "MSIE"];
  let userAgent = navigator.userAgent;
  let idBrowser = 0;

  for (idBrowser; idBrowser < browsers.length && userAgent.indexOf(browsers[idBrowser]) === -1; idBrowser++);
  return idBrowser;
}
let div = document.querySelectorAll('.dark');
for(let i = 0; i < div.length; i++) {
  if (getBrowserId() == 2) {
    div[i].classList.add("none");
  }
}