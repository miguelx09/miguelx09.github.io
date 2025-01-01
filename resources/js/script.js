// Slider for "Upcoming Matches"
document.querySelector('.match-list').addEventListener('wheel', (event) => {
    event.preventDefault();
    const container = event.currentTarget;
    container.scrollBy({
        left: event.deltaY < 0 ? -200 : 200,
        behavior: 'smooth'
    });
});

// Expand/Collapse News Summary
document.querySelectorAll('.main-news .news-summary').forEach((summary) => {
    summary.addEventListener('click', () => {
        summary.classList.toggle('expanded');
        summary.style.maxHeight = summary.classList.contains('expanded') 
            ? `${summary.scrollHeight}px` 
            : '50px';
    });
});

// Dark Mode Toggle
const toggleTheme = document.createElement('button');
toggleTheme.textContent = 'Toggle Dark Mode';
toggleTheme.style.position = 'fixed';
toggleTheme.style.bottom = '10px';
toggleTheme.style.right = '10px';
toggleTheme.style.padding = '10px';
toggleTheme.style.backgroundColor = '#333';
toggleTheme.style.color = '#fff';
toggleTheme.style.border = 'none';
toggleTheme.style.borderRadius = '5px';
toggleTheme.style.cursor = 'pointer';
document.body.appendChild(toggleTheme);

toggleTheme.addEventListener('click', () => {
    document.body.classList.toggle('dark-mode');
});

// Hover Effect on Club Cards
document.querySelectorAll('.club').forEach((club) => {
    club.addEventListener('mouseenter', () => {
        club.style.transform = 'scale(1.1)';
    });
    club.addEventListener('mouseleave', () => {
        club.style.transform = 'scale(1)';
    });
});

// Search News Functionality
const searchInput = document.getElementById('search');
searchInput.addEventListener('input', (event) => {
    const query = event.target.value.toLowerCase();
    document.querySelectorAll('.news-item').forEach((newsItem) => {
        const title = newsItem.querySelector('.news-title').textContent.toLowerCase();
        newsItem.style.display = title.includes(query) ? 'block' : 'none';
    });
});

// Smooth Scroll Between Sections
document.querySelectorAll('a[href^="#"]').forEach(anchor => {
    anchor.addEventListener('click', function (e) {
        e.preventDefault();
        document.querySelector(this.getAttribute('href')).scrollIntoView({
            behavior: 'smooth'
        });
    });
});

// Pop-Up on News Click
document.querySelectorAll('.news-item').forEach((news) => {
    news.addEventListener('click', () => {
        const title = news.querySelector('.news-title').textContent;
        alert(`More details about: ${title}`);
    });
});

// Scroll to Top Button
const scrollTopBtn = document.createElement('button');
scrollTopBtn.id = 'scrollTop';
scrollTopBtn.textContent = '↑ Top';
scrollTopBtn.style.display = 'none';
document.body.appendChild(scrollTopBtn);

window.addEventListener('scroll', () => {
    scrollTopBtn.style.display = window.scrollY > 300 ? 'block' : 'none';
});

scrollTopBtn.addEventListener('click', () => {
    window.scrollTo({
        top: 0,
        behavior: 'smooth'
    });
});
