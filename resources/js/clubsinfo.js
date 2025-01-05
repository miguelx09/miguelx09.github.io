// Dados dos clubes
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

        // Verifica se o logo é um SVG (presença de <svg>) ou um caminho para imagem
        let logoContent;
        if (club.logo.startsWith('<svg')) {
            logoContent = club.logo;  // Código SVG diretamente
        } else {
            logoContent = `<img src="${club.logo}" alt="${club.name}" class="club-logo">`; // Caso seja uma imagem
        }

        clubInfoContainer.innerHTML = `
            <div class="club-card">
                <h1>${club.name}</h1>
                ${logoContent} <!-- Exibe o logo do clube -->
                <p>${club.description}</p>
                <p><strong>Pontos:</strong> ${club.points}</p>
                <p><strong>Estádio:</strong> ${club.details.stadium}</p>
                <p><strong>Treinador:</strong> ${club.details.coach}</p>
                <p><strong>Títulos:</strong> ${club.details.titles.join(", ")}</p>
                <a href="clubs.html" class="back-button">Voltar para todos os clubes</a>
            </div>
        `;
    } else {
        // Se nenhum clube for selecionado, mostra todos
        clubInfoContainer.innerHTML = `<h1>Todos os Clubes</h1>`;
        Object.values(clubs).forEach((club, index) => {
            const clubKey = Object.keys(clubs)[index];

            // Verifica se o logo é um SVG ou uma imagem
            let logoContent;
            if (club.logo.startsWith('<svg')) {
                logoContent = club.logo;  // Exibe o código SVG diretamente
            } else {
                logoContent = `<img src="${club.logo}" alt="${club.name}" class="club-logo">`; // Caso seja uma imagem
            }

            clubInfoContainer.innerHTML += `
                <div class="club-card">
                    <h3>${club.name}</h3>
                    ${logoContent} <!-- Exibe o logo do clube -->
                    <p>${club.description}</p>
                    <p><strong>Pontos:</strong> ${club.points}</p>
                    <a href="clubs.html?club=${clubKey}" class="view-button">Ver Detalhes</a>
                </div>
            `;
        });
    }
});
