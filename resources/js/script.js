document.getElementById('invert-colors').addEventListener('click', () => {
    document.body.classList.toggle('dark-mode');
});

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

window.addEventListener('scroll', () => {
    if (window.scrollY > 200) {
        scrollToTopButton.style.display = 'flex';
    } else {
        scrollToTopButton.style.display = 'none';
    }
});

scrollToTopButton.addEventListener('click', () => {
    window.scrollTo({
        top: 0,
        behavior: 'smooth'
    });
});

