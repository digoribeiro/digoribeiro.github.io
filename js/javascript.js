$('.ver-mais').on('click', function() {
  $('.resto-curriculo').show();
  $('.ver-mais').hide();
});

$('.nome').blur(function() {
  if ($('.nome').val() === '') {
    $(this).addClass('erro');
    $('.validacao.nome').show();
  } else {
    $(this).removeClass('erro');
    $('.validacao.nome').hide();
  }
});

$('.email').blur(function() {
  if ($('.email').val() === '') {
    $(this).addClass('erro');
    $('.validacao.email').show();
  } else {
    $(this).removeClass('erro');
    $('.validacao.email').hide();
  }
});

$('.telefone').blur(function() {
  if ($('.telefone').val() === '') {
    $(this).addClass('erro');
    $('.validacao.telefone').show();
  } else {
    $(this).removeClass('erro');
    $('.validacao.telefone').hide();
  }
});

$('.mensagem').blur(function() {
  if ($('.mensagem').val() === '') {
    $(this).addClass('erro');
    $('.validacao.mensagem').show();
  } else {
    $(this).removeClass('erro');
    $('.validacao.mensagem').hide();
  }
});
