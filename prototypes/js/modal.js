$(document).ready(function(){

  // open target modal
  $('.modal-link').click(function () {
    var target = $(this).data('modal-target');
    $('#' + target).addClass('current-modal');
    $('.modal').addClass('show-modal');
    $('.modal').css({'visibility':'visible'});
  });

  function closeModal() {
    $('.modal').removeClass('show-modal');
    setTimeout(function(){
      $('.modal').css({'visibility':'hidden'});
        $('.current-modal').removeClass('current-modal');
    }, 300);
  }

  //close with button or clicking outside modal
  $('.modal-close-button, .modal-close-area').click(function () {
    closeModal();
  });

  // close with esc key
  $(document).keyup(function(e) {
    if (e.keyCode === 27) {
      closeModal();
    }
  });

});
