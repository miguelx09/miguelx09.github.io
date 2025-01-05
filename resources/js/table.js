document.addEventListener('DOMContentLoaded', function() {
    

  
    function sortTable(table, column, asc = true) {
        const dirModifier = asc ? 1 : -1;
        const tBody = table.tBodies[0];
        const rows = Array.from(tBody.querySelectorAll('tr'));

    
        const sortedRows = rows.sort((a, b) => {
            const aColText = a.querySelector(`td:nth-child(${column})`).textContent.trim();
            const bColText = b.querySelector(`td:nth-child(${column})`).textContent.trim();

            const aColNum = parseFloat(aColText.replace(/[^0-9.-]+/g,""));
            const bColNum = parseFloat(bColText.replace(/[^0-9.-]+/g,""));

            return (aColNum - bColNum) * dirModifier;
        });

     
        while (tBody.firstChild) {
            tBody.removeChild(tBody.firstChild);
        }

     
        tBody.append(...sortedRows);
    }

   
    const sortNumberHeader = document.getElementById('sort-number');
    sortNumberHeader.addEventListener('click', () => {
        const tableElement = document.querySelector('.scoreboard-portugal');
        const column = 1; // Coluna #
        const currentIsAscending = sortNumberHeader.classList.contains('asc');

        sortTable(tableElement, column, !currentIsAscending);

     
        sortNumberHeader.classList.toggle('asc', !currentIsAscending);
        sortNumberHeader.classList.toggle('desc', currentIsAscending);
    });
});

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

    // Adiciona evento de clique ao cabeçalho # para a tabela de jogadores
    const sortNumberPlayersHeader = document.getElementById('sort-number-players');
    sortNumberPlayersHeader.addEventListener('click', () => {
        const tableElement = document.querySelector('.scoreboard-portugal-players');
        const column = 1; // Coluna #
        const currentIsAscending = sortNumberPlayersHeader.classList.contains('asc');

        sortTable(tableElement, column, !currentIsAscending);

        // Alterna a classe asc/desc
        sortNumberPlayersHeader.classList.toggle('asc', !currentIsAscending);
        sortNumberPlayersHeader.classList.toggle('desc', currentIsAscending);
    });
});
function openTab(evt, tabName) {
    var i, tabcontent, tablinks;

 
    tabcontent = document.getElementsByClassName("tabcontent");
    for (i = 0; i < tabcontent.length; i++) {
        tabcontent[i].style.display = "none";
    }

   
    tablinks = document.getElementsByClassName("tablink");
    for (i = 0; i < tablinks.length; i++) {
        tablinks[i].className = tablinks[i].className.replace(" active", "");
    }

 
    document.getElementById(tabName).style.display = "block";

  
    if (evt) {
        evt.currentTarget.className += " active";
    } else {
     
        const tabButton = document.querySelector(`.tablink[data-tab="${tabName}"]`);
        if (tabButton) {
            tabButton.className += " active";
        }
    }
}


document.addEventListener("DOMContentLoaded", function() {
    openTab(null, "Classificacao"); 
});
