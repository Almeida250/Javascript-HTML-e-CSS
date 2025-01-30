let score = JSON.parse(localStorage.getItem('score')) || {
  vitorias: 0,
  derrotas: 0,
  empates: 0
};

let autoPlayLigado = false;
let idIntervalo;

function attPontuacao() {
  document.querySelector('.js-pontuacao')
    .innerHTML = `Vitórias ${score.vitorias}, Derrotas: ${score.derrotas}, Empates: ${score.empates}`;
}

attPontuacao();

function autoPlay() {
  if (!autoPlayLigado) {
    idIntervalo = setInterval(() => {
      const playerMove = pickComputerMove();
      playGame(playerMove);
    }, 1000);
    autoPlayLigado = true;
  } else {
    clearInterval(idIntervalo);
    autoPlayLigado = false;
  }
}

function playGame(playerMove) {
  const computerMove = pickComputerMove();

  let result = '';

  if (playerMove === 'scissors') {
    if (computerMove === 'rock') {
      result = 'Você perdeu.';
    } else if (computerMove === 'paper') {
      result = 'Você ganhou.';
    } else if (computerMove === 'scissors') {
      result = 'Empate.';
    }

  } else if (playerMove === 'paper') {
    if (computerMove === 'rock') {
      result = 'Você ganhou.';
    } else if (computerMove === 'paper') {
      result = 'Empate.';
    } else if (computerMove === 'scissors') {
      result = 'Você perdeu.';
    }
    
  } else if (playerMove === 'rock') {
    if (computerMove === 'rock') {
      result = 'Empate.';
    } else if (computerMove === 'paper') {
      result = 'Você perdeu.';
    } else if (computerMove === 'scissors') {
      result = 'Você ganhou.';
    }
  }

  if (result === 'Você ganhou.') {
    score.vitorias += 1;
  } else if (result === 'Você perdeu.') {
    score.derrotas += 1;
  } else if (result === 'Empate.') {
    score.empates += 1;
  }

  localStorage.setItem('score', JSON.stringify(score));

  attPontuacao();

  document.querySelector('.js-resultado')
    .innerHTML = result;

  document.querySelector('.js-escolha')
    .innerHTML = ` Você  
    <img src="/10/imagens/${playerMove}-emoji.png" class="icone-escolha">
    <img src="/10/imagens/${computerMove}-emoji.png" class="icone-escolha">
    </p>
    `;
}

function pickComputerMove() {
  const randomNumber = Math.random();

  let computerMove = '';

  if (randomNumber >= 0 && randomNumber < 1 / 3) {
    computerMove = 'rock';
  } else if (randomNumber >= 1 / 3 && randomNumber < 2 / 3) {
    computerMove = 'paper';
  } else if (randomNumber >= 2 / 3 && randomNumber < 1) {
    computerMove = 'scissors';
  }

  return computerMove;
}