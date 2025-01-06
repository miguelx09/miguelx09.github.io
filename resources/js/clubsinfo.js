const clubs = {
    sporting: {
        name: "Sporting Clube de Portugal",
        description: "Fundado em 1906, é um dos maiores clubes de Portugal, conhecido como os Leões.",
        logo: "/resources/images/clubs/svg-clubs/sporting.png",
        points: 33,
        details: {
            stadium: "Estádio José Alvalade",
            coach: "Rúben Amorim",
            titles: ["Primeira Liga", "Taça de Portugal", "Supertaça Cândido de Oliveira"],
            biggestWin: "16-1 contra o Apoel Nicosia (1971)",
            mostGoalsSeason: 117,
            topScorer: "Fernando Peyroteo"
        }
    },
    porto: {
        name: "Futebol Clube do Porto",
        description: "Fundado em 1893, conhecido como os Dragões, um dos clubes mais vencedores de Portugal.",
        logo: "/resources/images/clubs/svg-clubs/porto1.svg",
        points: 27,
        details: {
            stadium: "Estádio do Dragão",
            coach: "Sérgio Conceição",
            titles: ["Primeira Liga", "Taça de Portugal", "Liga dos Campeões"],
            biggestWin: "15-0 contra o Atlético CP (1942)",
            mostGoalsSeason: 116,
            topScorer: "Fernando Gomes"
        }
    },
    benfica: {
        name: "Sport Lisboa e Benfica",
        description: "Fundado em 1904, conhecido como as Águias, é o clube com mais títulos nacionais.",
        logo: "/resources/images/clubs/svg-clubs/benfica1.svg",
        points: 35,
        details: {
            stadium: "Estádio da Luz",
            coach: "Roger Schmidt",
            titles: ["Primeira Liga", "Taça de Portugal", "Liga Europa"],
            biggestWin: "13-1 contra o Benfica de Luanda (1965)",
            mostGoalsSeason: 123,
            topScorer: "Eusébio"
        }
    },
    braga: {
        name: "Sporting Clube de Braga",
        description: "Fundado em 1921, conhecido como os Guerreiros do Minho.",
        logo: "/resources/images/clubs/svg-clubs/braga1.svg",
        points: 29,
        details: {
            stadium: "Estádio Municipal de Braga",
            coach: "Artur Jorge",
            titles: ["Taça de Portugal", "Taça da Liga"],
            biggestWin: "14-0 contra o Palmeira (1945)",
            mostGoalsSeason: 94,
            topScorer: "Alan"
        }
    },
    boavista: {
        name: "Boavista Futebol Clube",
        description: "Fundado em 1903, conhecido como os Axadrezados.",
        logo: "/resources/images/clubs/svg-clubs/boavista1.svg",
        points: 18,
        details: {
            stadium: "Estádio do Bessa",
            coach: "Petit",
            titles: ["Primeira Liga", "Taça de Portugal"],
            biggestWin: "10-0 contra o Académico (1936)",
            mostGoalsSeason: 74,
            topScorer: "Manuel José"
        }
    },
    gilvicente: {
        name: "Gil Vicente Futebol Clube",
        description: "Fundado em 1924, conhecido como os Galos.",
        logo: "/resources/images/clubs/svg-clubs/gilvicente.svg",
        points: 12,
        details: {
            stadium: "Estádio Cidade de Barcelos",
            coach: "Vítor Campelos",
            titles: ["Campeonato de Portugal"],
            biggestWin: "8-0 contra o Famalicão (1990)",
            mostGoalsSeason: 55,
            topScorer: "Paulinho"
        }
    },
    famalicao: {
        name: "Futebol Clube Famalicão",
        description: "Fundado em 1931, conhecido como os Famalicenses.",
        logo: "/resources/images/clubs/svg-clubs/famalicao.svg",
        points: 15,
        details: {
            stadium: "Estádio Municipal 22 de Junho",
            coach: "João Pedro Sousa",
            titles: ["Segunda Liga"],
            biggestWin: "11-1 contra o Vizela (1962)",
            mostGoalsSeason: 67,
            topScorer: "Gil Dias"
        }
    },
    moreirense: {
        name: "Moreirense Futebol Clube",
        description: "Fundado em 1938, conhecido como os Cónegos.",
        logo: "/resources/images/clubs/svg-clubs/moreirense1.png",
        points: 10,
        details: {
            stadium: "Estádio Comendador Joaquim de Almeida Freitas",
            coach: "Rui Borges",
            titles: ["Segunda Liga"],
            biggestWin: "7-0 contra o Oliveirense (2016)",
            mostGoalsSeason: 49,
            topScorer: "Fábio Abreu"
        }
    },
    casapia: {
        name: "Casa Pia Atlético Clube",
        description: "Fundado em 1920, conhecido como os Gansos.",
        logo: "/resources/images/clubs/svg-clubs/casapia.svg",
        points: 9,
        details: {
            stadium: "Estádio Pina Manique",
            coach: "Filipe Martins",
            titles: ["Campeonato de Portugal"],
            biggestWin: "5-0 contra o Oriental (2022)",
            mostGoalsSeason: 40,
            topScorer: "Jota Silva"
        }
    },
    rioave: {
        name: "Rio Ave Futebol Clube",
        description: "Fundado em 1939, conhecido como os Vilacondenses.",
        logo: "/resources/images/clubs/svg-clubs/rioave.svg",
        points: 13,
        details: {
            stadium: "Estádio dos Arcos",
            coach: "Luís Freire",
            titles: ["Segunda Liga"],
            biggestWin: "9-0 contra o Atlético CP (1998)",
            mostGoalsSeason: 59,
            topScorer: "Carlos Vinícius"
        }
    },
    estorilpraia: {
        name: "Grupo Desportivo Estoril Praia",
        description: "Fundado em 1939, conhecido como os Canarinhos.",
        logo: "/resources/images/clubs/svg-clubs/estorilpraia.svg",
        points: 11,
        details: {
            stadium: "Estádio António Coimbra da Mota",
            coach: "Bruno Pinheiro",
            titles: ["Segunda Liga"],
            biggestWin: "8-1 contra o Louletano (1986)",
            mostGoalsSeason: 51,
            topScorer: "Evandro"
        }
    },
    estreladaamadora: {
        name: "Club Football Estrela da Amadora",
        description: "Fundado em 1932, conhecido como os Tricolores.",
        logo: "/resources/images/clubs/svg-clubs/estreladaamadora.png",
        points: 10,
        details: {
            stadium: "Estádio José Gomes",
            coach: "Sérgio Vieira",
            titles: ["Segunda Liga"],
            biggestWin: "9-1 contra o Loures (1995)",
            mostGoalsSeason: 57,
            topScorer: "Paulo Sérgio"
        }
    }, arouca: {
        name: "Futebol Clube de Arouca",
        description: "Fundado em 1951, conhecido como os Arouquenses.",
        logo: "/resources/images/clubs/svg-clubs/arouca.png",
        points: 12,
        details: {
            stadium: "Estádio Municipal de Arouca",
            coach: "Armando Evangelista",
            titles: ["Segunda Liga"],
            biggestWin: "6-0 contra o Varzim (2014)",
            mostGoalsSeason: 48,
            topScorer: "André Silva"
        }
    },
    nacional: {
        name: "Clube Desportivo Nacional",
        description: "Fundado em 1910, conhecido como os Alvinegros.",
        logo: "/resources/images/clubs/svg-clubs/nacional.png",
        points: 8,
        details: {
            stadium: "Estádio da Madeira",
            coach: "Filipe Cândido",
            titles: ["Segunda Liga"],
            biggestWin: "10-0 contra o Marítimo (1926)",
            mostGoalsSeason: 53,
            topScorer: "Rondón"
        }
    },
    farense: {
        name: "Sporting Clube Farense",
        description: "Fundado em 1910, conhecido como os Leões de Faro.",
        logo: "/resources/images/clubs/svg-clubs/farense.png",
        points: 9,
        details: {
            stadium: "Estádio de São Luís",
            coach: "José Mota",
            titles: ["Segunda Liga"],
            biggestWin: "7-0 contra o Louletano (1988)",
            mostGoalsSeason: 45,
            topScorer: "Hernâni"
        }
    },
    avs: {
        name: "Aves Futebol Clube",
        description: "Fundado em 1930, conhecido como os Avenses.",
        logo: "/resources/images/clubs/svg-clubs/avs.svg",
        points: 7,
        details: {
            stadium: "Estádio do Clube Desportivo das Aves",
            coach: "Augusto Inácio",
            titles: ["Taça de Portugal"],
            biggestWin: "6-0 contra o Nacional (2018)",
            mostGoalsSeason: 47,
            topScorer: "Luís Manuel"
        }
    },
    santaclara: {
        name: "Clube Desportivo Santa Clara",
        description: "Fundado em 1927, conhecido como os Açorianos.",
        logo: "/resources/images/clubs/svg-clubs/santaclara.png",
        points: 10,
        details: {
            stadium: "Estádio de São Miguel",
            coach: "Mário Silva",
            titles: ["Campeonato de Portugal"],
            biggestWin: "7-0 contra o Oriental (2019)",
            mostGoalsSeason: 53,
            topScorer: "Thiago Santana"
        }
    },
    vitoriaguimaraes: {
        name: "Vitória Sport Clube (Guimarães)",
        description: "Fundado em 1922, conhecido como os Conquistadores.",
        logo: "/resources/images/clubs/svg-clubs/vitoria.png",
        points: 18,
        details: {
            stadium: "Estádio D. Afonso Henriques",
            coach: "Moreno Teixeira",
            titles: ["Taça de Portugal"],
            biggestWin: "9-0 contra o Famalicão (1947)",
            mostGoalsSeason: 61,
            topScorer: "Douglas Tanque"
        }
    }
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
              <p><strong>Maior Vitória:</strong> ${club.details.biggestWin}</p>
              <p><strong>Golos Máximos numa Temporada:</strong> ${club.details.mostGoalsSeason}</p>
              <p><strong>Melhor Marcador:</strong> ${club.details.topScorer}</p>
              <a href="clubs.html" class="back-button flex-align"><svg xmlns="http://www.w3.org/2000/svg" style="fill: #ffffff;" width="24" height="24"><path d="m12.718 4.707-1.413-1.415L2.585 12l8.72 8.707 1.413-1.415L6.417 13H20v-2H6.416l6.302-6.293z"/></svg> Voltar para todos os clubes</a>
            </div>
          `;
        } else {
          clubInfoTitle.outerHTML += `<h1>Lista de Clubes</h1>`;
          clubInfoContainer.classList.add("club-grid");
          Object.values(clubs).forEach((club, index) => {
            const clubKey = Object.keys(clubs)[index];
      
            clubInfoContainer.innerHTML += `
              <div class="club-card">
                <img src="${club.logo}" alt="${club.name}" class="club-logo">
                <h3>${club.name}</h3>
                <p>${club.description}</p>
                <p><strong>Pontos:</strong> ${club.points}</p>
                <a href="clubs.html?club=${clubKey}" class="view-button flex-align">Ver Detalhes <svg xmlns="http://www.w3.org/2000/svg" style="fill: #ffffff;" width="24" height="24"><path d="M11.293 4.707 17.586 11H4v2h13.586l-6.293 6.293 1.414 1.414L21.414 12l-8.707-8.707-1.414 1.414z"/></svg></a>
              </div>
            `;
          });
        }
      });
