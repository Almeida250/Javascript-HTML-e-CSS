//tabela para armazenar a pontuação
let score = JSON.parse(localStorage.getItem('score')) || {
  vitorias: 0,
  derrotas: 0,
  empates: 0
};

let autoPlayLigado = false;
let idIntervalo;

function attPontuacao() {
  document.querySelector('.js-pontuacao')
    .innerHTML = `Vitórias: ${score.vitorias}, Derrotas: ${score.derrotas}, Empates: ${score.empates}`;
}

//hoisting: a função está sendo chamada, mas a sua função é declarada depois
//Não é possivel fazer hoisting com Arrow Functions
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

//ao invés de usar "onclick" no HTML, atribui uma classe pros botões e usei o "addEventListener" 
// com o parametro click e o parametro de função que chama a função "playGame" de cada botão
document.querySelector('.js-botao-pedra')
  .addEventListener('click', () => {
    playGame('rock');
  });

document.querySelector('.js-botao-papel')
  .addEventListener('click', () => {
    playGame('paper')
  })

document.querySelector('.js-botao-tesoura')
  .addEventListener('click', () => {
    playGame('scissors')
  })

  
document.body.addEventListener('keydown', () => {
  console.log('tecla pressionada')
})

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
    .innerHTML = ` Você >  
    <img src="/10/imagens/${playerMove}-emoji.png" class="icone-escolha">
    <img src="/10/imagens/${computerMove}-emoji.png" class="icone-escolha">
    < Computador </p>
    `;
}

//escolha do computador
function pickComputerMove() {

  //vai escolher um numero aleatorio entre 0 e 1
  const randomNumber = Math.random();

  //escolha do computador (está com nada pois vai ser atribuido pelo numero aleatório)
  let computerMove = '';

  //se o numero aleatorio for maior e igual que 0 e menor que 1/3 (0,3), escolhe pedra,
  //se >= 1/3 && 2/3 (0,6), escolhe papel
  //se >= 2/3 && 3/3 (1), escolhe tesoura
  if (randomNumber >= 0 && randomNumber < 1 / 3) {
    computerMove = 'rock';
  } else if (randomNumber >= 1 / 3 && randomNumber < 2 / 3) {
    computerMove = 'paper';
  } else if (randomNumber >= 2 / 3 && randomNumber < 1) {
    computerMove = 'scissors';
  }

  //retorna a escolha do computador
  return computerMove;
}