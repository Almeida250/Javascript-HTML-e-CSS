function off (selector) {
  const botao = document.querySelector(selector);
  if (!botao.classList.contains('off')) {

    desligarOutroBotao();

    botao.classList.add('off');
  } else {
    botao.classList.remove('off')
  }
}

function desligarOutroBotao() {
  const previousButton = document.querySelector('.off');
  if (previousButton) {
    previousButton.classList.remove('off');
  }
}