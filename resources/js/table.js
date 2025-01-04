document.addEventListener('DOMContentLoaded', function() {
    

    // Função para ordenar a tabela
    function sortTable(table, column, asc = true) {
        const dirModifier = asc ? 1 : -1;
        const tBody = table.tBodies[0];
        const rows = Array.from(tBody.querySelectorAll('tr'));

        // Ordena cada linha
        const sortedRows = rows.sort((a, b) => {
            const aColText = a.querySelector(`td:nth-child(${column})`).textContent.trim();
            const bColText = b.querySelector(`td:nth-child(${column})`).textContent.trim();

            const aColNum = parseFloat(aColText.replace(/[^0-9.-]+/g,""));
            const bColNum = parseFloat(bColText.replace(/[^0-9.-]+/g,""));

            return (aColNum - bColNum) * dirModifier;
        });

        // Remove todas as linhas existentes
        while (tBody.firstChild) {
            tBody.removeChild(tBody.firstChild);
        }

        // Re-adiciona as linhas ordenadas
        tBody.append(...sortedRows);
    }

    // Adiciona evento de clique ao cabeçalho #
    const sortNumberHeader = document.getElementById('sort-number');
    sortNumberHeader.addEventListener('click', () => {
        const tableElement = document.querySelector('.scoreboard-portugal');
        const column = 1; // Coluna #
        const currentIsAscending = sortNumberHeader.classList.contains('asc');

        sortTable(tableElement, column, !currentIsAscending);

        // Alterna a classe asc/desc
        sortNumberHeader.classList.toggle('asc', !currentIsAscending);
        sortNumberHeader.classList.toggle('desc', currentIsAscending);
    });
});
