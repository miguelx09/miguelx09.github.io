// Função genérica para alternar classes
function toggleClass(element, className) {
    element.classList.toggle(className);
}

// Função para rolar suavemente até um elemento
function smoothScrollTo(selector) {
    document.querySelector(selector).scrollIntoView({ behavior: 'smooth' });
}

// Slider para "Upcoming Matches"
document.querySelector('.match-list').addEventListener('wheel', (event) => {
    event.preventDefault();
    event.currentTarget.scrollBy({
        left: event.deltaY < 0 ? -200 : 200,
        behavior: 'smooth',
    });
});

// Expandir/Contrair Resumo de Notícias
const newsSummaries = document.querySelectorAll('.main-news .news-summary');
newsSummaries.forEach((summary) => {
    summary.addEventListener('click', () => {
        toggleClass(summary, 'expanded');
        summary.style.maxHeight = summary.classList.contains('expanded') 
            ? `${summary.scrollHeight}px` 
            : '50px';
    });
});

// Botão para Modo Escuro
const toggleTheme = document.createElement('button');
toggleTheme.textContent = 'Toggle Dark Mode';
Object.assign(toggleTheme.style, {
    position: 'fixed',
    bottom: '10px',
    right: '10px',
    padding: '10px',
    backgroundColor: '#333',
    color: '#fff',
    border: 'none',
    borderRadius: '5px',
    cursor: 'pointer',
});

document.body.appendChild(toggleTheme);

toggleTheme.addEventListener('click', () => {
    toggleClass(document.body, 'dark-mode');
});

// Efeito Hover nos Cartões dos Clubes
const clubs = document.querySelectorAll('.club');
clubs.forEach((club) => {
    club.addEventListener('mouseenter', () => {
        club.style.transform = 'scale(1.1)';
    });
    club.addEventListener('mouseleave', () => {
        club.style.transform = 'scale(1)';
    });
});

// Funcionalidade de Busca de Notícias
const searchInput = document.getElementById('search');
if (searchInput) {
    searchInput.addEventListener('input', (event) => {
        const query = event.target.value.toLowerCase();
        document.querySelectorAll('.news-item').forEach((newsItem) => {
            const title = newsItem.querySelector('.news-title').textContent.toLowerCase();
            newsItem.style.display = title.includes(query) ? 'block' : 'none';
        });
    });
}

// Scroll Suave Entre Seções
document.querySelectorAll('a[href^="#"]').forEach((anchor) => {
    anchor.addEventListener('click', (e) => {
        e.preventDefault();
        smoothScrollTo(anchor.getAttribute('href'));
    });
});

// Pop-Up ao Clicar em Notícias
const newsItems = document.querySelectorAll('.news-item');
newsItems.forEach((news) => {
    news.addEventListener('click', () => {
        const title = news.querySelector('.news-title').textContent;
        alert(`Mais detalhes sobre: ${title}`);
    });
});

// Botão de "Scroll to Top"
const scrollTopBtn = document.createElement('button');
scrollTopBtn.id = 'scrollTop';
scrollTopBtn.textContent = '↑ Top';
Object.assign(scrollTopBtn.style, {
    display: 'none',
    position: 'fixed',
    bottom: '20px',
    right: '20px',
    backgroundColor: '#6e8784',
    color: '#fff',
    border: 'none',
    borderRadius: '50%',
    width: '40px',
    height: '40px',
    justifyContent: 'center',
    alignItems: 'center',
    cursor: 'pointer',
    zIndex: '1000',
    boxShadow: '0 4px 6px rgba(0, 0, 0, 0.2)',
});

document.body.appendChild(scrollTopBtn);

window.addEventListener('scroll', () => {
    scrollTopBtn.style.display = window.scrollY > 300 ? 'flex' : 'none';
});

scrollTopBtn.addEventListener('click', () => {
    window.scrollTo({ top: 0, behavior: 'smooth' });
});
