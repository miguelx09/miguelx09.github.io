// Dados dos clubes
const clubs = {
    sporting: {
        name: "Sporting Clube de Portugal",
        description: "Fundado em 1906, é um dos maiores clubes de Portugal.",
        logo: "/resources/images/clubs/sporting.png",
        points: 33
    },
    porto: {
        name: "Futebol Clube do Porto",
        description: "Fundado em 1893, conhecido como os Dragões.",
        logo: "/resources/images/clubs/porto.png",
        points: 27
    },
    benfica: {
        name: "Sport Lisboa e Benfica",
        description: "Fundado em 1904, conhecido como as Águias.",
        logo: "/resources/images/clubs/benfica.png",
        points: 35
    }
};

// Aguarda o carregamento do DOM
document.addEventListener('DOMContentLoaded', () => {
    const urlParams = new URLSearchParams(window.location.search);
    const clubName = urlParams.get('club'); // Obtém o valor do parâmetro 'club'
    const clubInfoContainer = document.getElementById('club-info');

    // Se um clube específico for selecionado
    if (clubName && clubs[clubName]) {
        const club = clubs[clubName];
        clubInfoContainer.innerHTML = `
            <div class="club-card">
                <h1>${club.name}</h1>
                <img src="${club.logo}" alt="${club.name}">
                <p>${club.description}</p>
                <p><strong>Pontos:</strong> ${club.points}</p>
                <a href="clubs.html" class="back-button">Voltar para todos os clubes</a>
            </div>
        `;
    } else {
        // Se nenhum clube for selecionado, mostra todos
        clubInfoContainer.innerHTML = `<h1>Todos os Clubes</h1>`;
        Object.values(clubs).forEach(club => {
            clubInfoContainer.innerHTML += `
                <div class="club-card">
                    <h3>${club.name}</h3>
                    <img src="${club.logo}" alt="${club.name}">
                    <p>${club.description}</p>
                    <p><strong>Pontos:</strong> ${club.points}</p>
                    <a href="clubs.html?club=${Object.keys(clubs).find(key => clubs[key].name === club.name)}" class="view-button">Ver Detalhes</a>
                </div>
            `;
        });
    }
});
