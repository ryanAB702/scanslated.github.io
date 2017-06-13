$(document).ready(function(){
  
  $('#summary *[data-finding]').hover(function(){
    //  console.log($(this).data('finding'));
     var currentFinding = $(this).data('finding');
    $('#summary *[data-finding=' + currentFinding + ']').toggleClass('highlight');
  });

});
