$(document).ready(function(){

  $('a[href*="#"]:not([href="#"])').click(function() {
    if (location.pathname.replace(/^\//, '') == this.pathname.replace(/^\//, '') && location.hostname == this.hostname) {
      var target = $(this.hash);
      var offsetAmt = 0;

      if($('#nav-list').css('display') != 'none') {
        offsetAmt = $('#nav-list').outerHeight() - 128 + 32;
        if (typeof target.attr("data-scrolloffset") != 'undefined') {
          offsetAmt = $('#nav-list').outerHeight() + target.data("scrolloffset");
        }
      }

      target = target.length ? target : $('[name=' + this.hash.slice(1) + ']');
      if (target.length) {
        $('html, body').animate({
          scrollTop: target.offset().top - offsetAmt
        }, 700);
        return false;
      }
    }
  });

});
