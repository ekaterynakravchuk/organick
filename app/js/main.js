$(function() {
  $('.header__burger').on('click', function(event) {
      event.preventDefault();
      $('.header__menu').toggleClass('open');
  })
})