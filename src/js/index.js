const botao = document.getElementById('modoboxe');

botao.addEventListener('click', () => {
    const atual = window.location.pathname;

    if (atual.endsWith('/') || atual.endsWith('index.html')) {
        // Está na página inicial
        window.location.href = `${window.location.origin}${getBasePath()}/modoboxe.html`;
    } else if (atual.endsWith('modoboxe.html')) {
        // Está na página modoboxe
        window.location.href = `${window.location.origin}${getBasePath()}/index.html`;
    } else {
        console.error('Página atual desconhecida:', atual);
    }
});

// Função para obter o caminho base do repositório no GitHub Pages
function getBasePath() {
    const pathParts = window.location.pathname.split('/');
    // Se o site estiver hospedado em /usuario.github.io/repositorio/
    // então o path base será "/repositorio"
    if (pathParts.length > 1 && pathParts[1] !== '') {
        return '/' + pathParts[1];
    }
    return '';  // caso esteja na raiz
}

window.addEventListener('scroll', function() {
    const navbar = document.querySelector('.custom-navbar');
    if (window.scrollY > 50) {
        navbar.classList.add('scrolled');
    } else {
        navbar.classList.remove('scrolled');
    }
});

  
