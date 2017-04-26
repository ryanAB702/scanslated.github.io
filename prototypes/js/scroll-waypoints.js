$(document).ready(function(){

  var navHeight = $('nav').outerHeight();
  var resizeTimer;
  $(window).resize(function() {
    clearTimeout(resizeTimer);
    resizeTimer = setTimeout(function() {
      navHeight = $('nav').outerHeight();
    }, 300);
  });

  $('section:first-of-type').waypoint(function() {
      $('header').toggleClass('fixed-header');
      $('section:first-of-type').toggleClass('section-top-space');
  }, { offset: navHeight.toString() });

});
