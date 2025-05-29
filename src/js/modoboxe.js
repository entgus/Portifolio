document.addEventListener('click', () => {
  const elementos = document.querySelectorAll('body, button, a, .btn');

  elementos.forEach(el => {
    el.style.cursor = 'url("/Portifolio/src/imagens/click.cur"), auto';
  });

  setTimeout(() => {
    elementos.forEach(el => {
      el.style.cursor = "url('/Portifolio/src/imagens/cursor.cur'), auto";
    });
  }, 1000);
});

  const botoes = document.querySelectorAll('.button');

const secoes = document.querySelectorAll('.secao');
botoes.forEach(botao => {
  botao.addEventListener('click', () => {
    const alvo = botao.getAttribute('data-bs-target');

    secoes.forEach(secao => secao.classList.remove('ativa'));
    document.querySelector(alvo).classList.add('ativa');
  });
});
function efeitoSoco() {
  document.body.classList.add('soco');
  setTimeout(() => {
    document.body.classList.remove('soco');
  }, 500);
}

botoes.forEach(botao => {
  botao.addEventListener('click', efeitoSoco);
});
let segundos = 0, minutos = 0, intervalo;

function atualizarTempo() {
  segundos++;
  if (segundos === 60) {
    minutos++;
    segundos = 0;
  }
  document.getElementById('tempoTreino').textContent = 
    `${minutos < 10 ? '0' + minutos : minutos}:${segundos < 10 ? '0' + segundos : segundos}`;
}

function iniciarTreino() {
  clearInterval(intervalo);
  intervalo = setInterval(atualizarTempo, 1000);
}

function pausarTreino() {
  clearInterval(intervalo);
}

function zerarTreino() {
  clearInterval(intervalo);
  minutos = 0;
  segundos = 0;
  document.getElementById('tempoTreino').textContent = '00:00';
}
const sons = {
  ringue: new Audio('/Portifolio/src/sons/soco.mp3'),
  bastidores: new Audio('/Portifolio/src/sons/fotos.mp3'),
  golpes: new Audio('/Portifolio/src/sons/sino.mp3'),
  treinamentos: new Audio('/Portifolio/src/sons/corda.mp3'),
  lutas: new Audio('/Portifolio/src/sons/aplausos.mp3'),
  social: new Audio('/Portifolio/src/sons/assobio.mp3'),
  desafio: new Audio('/Portifolio/src/sons/tambor.mp3')
};

botoes.forEach(botao => {

  botao.addEventListener('click', () => {
    const classe = botao.classList[1]; // pega a segunda classe, ex: 'ringue'
    if (sons[classe]) {
      sons[classe].currentTime = 0;
      sons[classe].play();
    }
  });
});


