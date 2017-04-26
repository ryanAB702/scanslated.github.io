$(document).ready(function(){

  $('nav a').click(function () {
    var target = $(this);

    $('nav').addClass('movingToTarget');
    target.addClass('nav-target');

    setTimeout(function(){
      $('nav').removeClass('movingToTarget');
    }, 750);
    setTimeout(function(){
      target.removeClass('nav-target');
      target.addClass('nav-active');
    }, 750);
  });


  var aChildren = $("nav li").children();
  var aArray = [];
  for (var i=0; i < aChildren.length; i++) {
    var aChild = aChildren[i];
    var ahref = $(aChild).attr('href');
    aArray.push(ahref);
  }

  $(window).scroll(function(){
    var windowPos = $(window).scrollTop();
    if($('#nav-list').css('display') != 'none') {
      windowPos = $(window).scrollTop() + $('#nav-list').outerHeight();
    }
    var windowHeight = $(window).outerHeight();
    var docHeight = $(document).outerHeight();

    for (var i=0; i < aArray.length; i++) {
      var theID = aArray[i];
      var divPos = $(theID).offset().top;
      var divHeight = $(theID).outerHeight();
      if (windowPos >= divPos && windowPos < (divPos + divHeight) && !$('nav').hasClass('movingToTarget')) {
        $("a[href='" + theID + "']").addClass("nav-active");
      } else {
        $("a[href='" + theID + "']").removeClass("nav-active");
      }
    }

    if(windowPos + windowHeight >= docHeight) {
      if (!$("nav li:last-child a").hasClass("nav-active")) {
        var navActiveCurrent = $(".nav-active").attr("href");
        $("a[href='" + navActiveCurrent + "']").removeClass("nav-active");
        $("nav li:last-child a").addClass("nav-active");
      }
    }
  });

});
