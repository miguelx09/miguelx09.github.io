const hamMenu = document.querySelector('.ham-menu');
const offScreenMenu = document.querySelector('.off-screen-menu');
const themeSwitch = document.getElementById('theme-switch')

hamMenu.addEventListener('click', () => {
    hamMenu.classList.toggle('active');
    offScreenMenu.classList.toggle('active');
    
});

themeSwitch.addEventListener('click', () => {
    document.body.classList.toggle('dark-mode');
});



