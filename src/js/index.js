const botao = document.getElementById('modoboxe');

botao.addEventListener('click', () => {
    const base = window.location.origin + window.location.pathname.split('/')[1];

    if (window.location.pathname.endsWith('/') || window.location.pathname.endsWith('index.html')) {
        window.location.href = base + '/modoboxe.html';
    } else if (window.location.pathname.includes('modoboxe.html')) {
        window.location.href = base + '/index.html';
    } else {
        console.error('Página atual desconhecida.');
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
 
  
