'use strict';

var $window = $(window);
var $nav = $('nav');
$(document).ready(function () {
  Materialize.updateTextFields();
  $('.preloader').fadeOut(1000);

  $window.scroll(function () {
    console.log($window.scrollTop());
    if ($window.scrollTop() > 60) {
      $nav.addClass('nav-sticky', 1000);
    } else {
      $nav.removeClass('nav-sticky', 1000);
    }
  });

  $('.parallax').parallax();
});
//# sourceMappingURL=app.js.map
