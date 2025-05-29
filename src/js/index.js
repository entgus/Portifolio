const botao = document.getElementById('modoboxe');

botao.addEventListener('click', () => {
    const atual = window.location.pathname;

    if (atual.endsWith('/') || atual.endsWith('/index.html')) {
        // Está na home, vai para modoboxe
        window.location.href = 'modoboxe.html';
    } else if (atual.includes('modoboxe.html')) {
        // Está em modoboxe, volta para home
        window.location.href = 'index.html';
    } else {
        console.error('Página atual desconhecida:', atual);
    }
});


window.addEventListener('scroll', function() {
  const navbar = document.querySelector('.custom-navbar');
  if (window.scrollY > 50) {
    navbar.classList.add('scrolled');
  } else {
    navbar.classList.remove('scrolled');
  }
});
 
  
