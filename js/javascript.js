$('.ver-mais').on('click', function() {
  $('.resto-curriculo').show();
  $('.ver-mais').hide();
});

function validarCampo(campo, mensagemErro) {
  if (campo.val() === '') {
    campo.addClass('erro');
    $(mensagemErro).show();
  } else {
    campo.removeClass();
    $(mensagemErro).hide();
  }
}

$('#nome').blur(function() {
  validarCampo($(this), $('.validacao.nome'));
});

$('#email').blur(function() {
  validarCampo($(this), $('.validacao.email'));
});

$('#telefone').blur(function() {
  validarCampo($(this), $('.validacao.telefone'));
});

$('#mensagem').blur(function() {
  validarCampo($(this), $('.validacao.mensagem'));
});

$('.telefone').mask('(00) 0000-0000');
