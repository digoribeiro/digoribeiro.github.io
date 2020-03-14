$('.ver-mais').on('click', function() {
  $('.resto-curriculo').show();
  $('.ver-mais').hide();
});

$('input, textarea').blur(function() {
  if ($(this).val() === '') {
    $(this).addClass('erro');
  } else {
    $(this).removeClass('erro');
  }
});
