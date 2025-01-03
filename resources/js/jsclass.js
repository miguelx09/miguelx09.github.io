
function ajustarColspan() {
    const larguraJanela = window.innerWidth;
    const legenda = document.querySelector('.titulo-clube');

    if (larguraJanela <= 768) {
       
        legenda.setAttribute('colspan', '3');
    } else {
        
        legenda.setAttribute('colspan', '2');
    }
}
ajustarColspan();
window.addEventListener('resize', ajustarColspan);
