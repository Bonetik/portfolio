"use strict";

//=require ../blocks/**/*.js
$(document).ready(function () {
  // open modal
  $('.js-open-swap').click(function () {
    $('.js-modal-swap').fadeIn();
    $('.js-mask').fadeIn();
    $('body').addClass('overflov');
  }); //close modal

  $('.js-mask, .js-modal-close').click(function () {
    $('.js-modal').fadeOut();
    $('.js-mask').fadeOut();
    $('body').removeClass('overflov');
  }); //yak scroll

  $(document).ready(function () {
    $(".menu").on("click", "a", function (event) {
      event.preventDefault();
      var id = $(this).attr('href'),
          top = $(id).offset().top;
      $('body,html').animate({
        scrollTop: top
      }, 1500);
    });
    $(document).ready(function () {
      $('.header__menu-burger').click(function () {
        $('.header__menu-burger').toggleClass('menu__open');
        $('.menu').toggleClass('menu__open');
      });
    });
  });
});