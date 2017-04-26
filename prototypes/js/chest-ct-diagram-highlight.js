$(document).ready(function(){

  $('.red-fill').hover(function(){
    $('.red-fill').toggleClass('highlight');
    $('.region-label p').text($('.solid-button.red-fill').data('region-name'));
    $('.region-label').toggleClass('show-label');
  });
  $('.yellow-fill').hover(function(){
    $('.yellow-fill').toggleClass('highlight');
    $('.region-label p').text($('.solid-button.yellow-fill').data('region-name'));
    $('.region-label').toggleClass('show-label');
  });
  $('.green-fill').hover(function(){
    $('.green-fill').toggleClass('highlight');
    $('.region-label p').text($('.solid-button.green-fill').data('region-name'));
    $('.region-label').toggleClass('show-label');
  });

  $('g[data-region-name]:not(.red-fill, .yellow-fill, .green-fill)').hover(function(){
    $('.region-label p').text($(this).data('region-name'));
    $('.region-label').toggleClass('show-label');
  });

});
