// Função para inverter as cores
document.getElementById('invert-colors').addEventListener('click', () => {
    document.body.classList.toggle('dark-mode');
});

// Estilo adicional para dark mode
const style = document.createElement('style');
style.textContent = `
    .dark-mode {
        background-color: #333 !important;
        color: #fff !important;
    }
    .dark-mode a {
        color: #ddd !important;
    }
    .dark-mode .header {
        background-color: #222 !important;
        color: #fff !important;
    }
    .dark-mode .footer {
        background-color: #222 !important;
        color: #ddd !important;
    }
`;
document.head.appendChild(style);


const scrollToTopButton = document.getElementById('scroll-to-top');

// Mostrar ou esconder o botão ao rolar
window.addEventListener('scroll', () => {
    if (window.scrollY > 200) { // Mostra o botão quando o scroll é maior que 200px
        scrollToTopButton.style.display = 'flex';
    } else {
        scrollToTopButton.style.display = 'none';
    }
});

// Scroll suave para o topo ao clicar no botão
scrollToTopButton.addEventListener('click', () => {
    window.scrollTo({
        top: 0,
        behavior: 'smooth'
    });
});

