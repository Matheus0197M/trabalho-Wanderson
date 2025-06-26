// spk.js

document.addEventListener('DOMContentLoaded', function () {
    // --- Lógica do Menu Hambúrguer ---
    const menuToggle = document.getElementById('menu-toggle');
    const mobileMenu = document.getElementById('mobile-menu');
    const navLinks = document.querySelectorAll('#mobile-menu .nav-link'); // Seleciona todos os links dentro do menu

    if (menuToggle && mobileMenu) {
        menuToggle.addEventListener('click', function () {
            mobileMenu.classList.toggle('active');
            // Acessibilidade: atualiza o estado do aria-expanded
            const isExpanded = this.getAttribute('aria-expanded') === 'true';
            this.setAttribute('aria-expanded', !isExpanded);
        });

        // Fechar o menu quando um link é clicado (para navegação suave)
        navLinks.forEach(link => {
            link.addEventListener('click', function () {
                if (mobileMenu.classList.contains('active')) {
                    mobileMenu.classList.remove('active');
                    menuToggle.setAttribute('aria-expanded', 'false'); // Atualiza o aria-expanded do botão
                }
            });
        });
    }

    // --- Lógica do Header Fixo (esconder/mostrar ao rolar) ---
    const header = document.getElementById("main-header");
    let lastScrollY = window.scrollY;
    let scrollTimeout;

    window.addEventListener("scroll", () => {
        const currentScrollY = window.scrollY;

        clearTimeout(scrollTimeout); // Limpa qualquer timeout existente

        // Se o usuário está rolando para baixo E não está no topo da página
        if (currentScrollY > lastScrollY && currentScrollY > header.offsetHeight) {
            // Esconde o header com um pequeno atraso
            scrollTimeout = setTimeout(() => {
                header.style.top = "-350px"; // Ajuste este valor se seu header for mais alto
            }, 300);
        }
        // Se o usuário está rolando para cima OU está no topo da página
        else if (currentScrollY < lastScrollY || currentScrollY <= 0) {
            header.style.top = "0"; // Mostra o header imediatamente
        }

        lastScrollY = currentScrollY; // Atualiza a última posição de rolagem
    });
});