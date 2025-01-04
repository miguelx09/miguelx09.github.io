window.addEventListener("load", function() {
    var loader = document.querySelector(".loader");
    var mainFader = document.querySelector(".main-fader");

    mainFader.style.opacity = 0;

    mainFader.addEventListener('transitionend', function() {
        mainFader.style.display = 'none';
    });
});