document.addEventListener('DOMContentLoaded', () => {
    document.querySelectorAll('.club').forEach(club => {
        club.addEventListener('click', () => {
            const clubName = club.getAttribute('data-club');
            console.log(`Redirecionando para: /pages/clubs.html?club=${clubName}`);
            window.location.href = `/pages/clubs.html?club=${clubName}`;
        });
    });
});
