document.querySelector('.navbar-toggle').addEventListener('click', function () {
    document.body.classList.toggle('inverted');
    document.querySelector('.header').classList.toggle('inverted');
});

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
