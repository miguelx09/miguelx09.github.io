document.addEventListener("DOMContentLoaded", function() {
    var loader = document.getElementById("loader");
    loader.style.display = "flex";
});

window.addEventListener("load", function() {
    var loader = document.getElementById("loader");
    setTimeout(function() {
        loader.style.opacity = 0;
        setTimeout(function() {
            loader.style.display = "none";
        }, 500);
    }, 500);
});