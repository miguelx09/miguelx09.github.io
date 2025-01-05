const clubs = {
    sporting: {
        name: "Sporting Clube de Portugal",
        description: "Fundado em 1906, é um dos maiores clubes de Portugal.",
        logo: "/resources/images/clubs/svg-clubs/sporting1.svg",
        points: 33,
        details: {
            stadium: "Estádio José Alvalade",
            coach: "Rúben Amorim",
            titles: ["Primeira Liga", "Taça de Portugal", "Supertaça Cândido de Oliveira"],
        }
    },
    porto: {
        name: "Futebol Clube do Porto",
        description: "Fundado em 1893, conhecido como os Dragões.",
        logo: "/resources/images/clubs/svg-clubs/porto1.svg",
        points: 27,
        details: {
            stadium: "Estádio do Dragão",
            coach: "Sérgio Conceição",
            titles: ["Primeira Liga", "Taça de Portugal", "Liga dos Campeões"],
        }
    },
    benfica: {
        name: "Sport Lisboa e Benfica",
        description: "Fundado em 1904, conhecido como as Águias.",
        logo: "/resources/images/clubs/svg-clubs/benfica1.svg",
        points: 35,
        details: {
            stadium: "Estádio da Luz",
            coach: "Roger Schmidt",
            titles: ["Primeira Liga", "Taça de Portugal", "Liga Europa"],
        }
    },
};


document.addEventListener('DOMContentLoaded', () => {
    const urlParams = new URLSearchParams(window.location.search);
    const clubName = urlParams.get('club');
    const clubInfoTitle = document.getElementsByClassName('nav-buttons')[0];
    const clubInfoContainer = document.getElementById('club-info');

    if (clubName && clubs[clubName]) {
        const club = clubs[clubName];

        clubInfoContainer.innerHTML += `
            <div class="club-detail-container">
                <img src="${club.logo}" alt="${club.name}" class="club-logo">
                <h1>${club.name}</h1>        
                <p>${club.description}</p>
                <p><strong>Pontos:</strong> ${club.points}</p>
                <p><strong>Estádio:</strong> ${club.details.stadium}</p>
                <p><strong>Treinador:</strong> ${club.details.coach}</p>
                <p><strong>Títulos:</strong> ${club.details.titles.join(", ")}</p>
                <a href="clubs.html" class="back-button"><svg xmlns="http://www.w3.org/2000/svg" width="24" height="24"><path d="m12.718 4.707-1.413-1.415L2.585 12l8.72 8.707 1.413-1.415L6.417 13H20v-2H6.416l6.302-6.293z"/></svg> Voltar para todos os clubes</a>
            </div>
        `;
    } else {
        clubInfoTitle.outerHTML += `<h1>Todos os Clubes</h1>`;
        clubInfoContainer.classList.add("club-grid");
        Object.values(clubs).forEach((club, index) => {
            const clubKey = Object.keys(clubs)[index];

            clubInfoContainer.innerHTML += `
                <div class="club-card">
                    <img src="${club.logo}" alt="${club.name}" class="club-logo">
                    <h3>${club.name}</h3>
                    <p>${club.description}</p>
                    <p><strong>Pontos:</strong> ${club.points}</p>
                    <a href="clubs.html?club=${clubKey}" class="view-button">Ver Detalhes <svg xmlns="http://www.w3.org/2000/svg" width="24" height="24"><path d="M11.293 4.707 17.586 11H4v2h13.586l-6.293 6.293 1.414 1.414L21.414 12l-8.707-8.707-1.414 1.414z"/></svg></a>
                </div>
            `;
        });
    }
});
