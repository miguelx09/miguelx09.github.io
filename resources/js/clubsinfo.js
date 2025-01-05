// Extrai o parâmetro 'club' da URL
const urlParams = new URLSearchParams(window.location.search);
const clubName = urlParams.get('club'); // Obtem o valor do parâmetro 'club'

// Exibe o nome do clube no console para teste
console.log(`Clube selecionado: ${clubName}`);

// Exemplo: Renderiza o conteúdo dinamicamente
const clubInfoContainer = document.getElementById('club-info');
if (clubName) {
    clubInfoContainer.innerHTML = `<h1>Bem-vindo ao clube: ${clubName}</h1>`;
} else {
    clubInfoContainer.innerHTML = `<h1>Clube não selecionado!</h1>`;
}
