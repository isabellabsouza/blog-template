const navLinks = document.querySelector('.nav-links');
const abrirNavBtn = document.querySelector('#hamburguer-icon');
const fecharNavBtn = document.querySelector('#close-icon');

const abrirNav = () => {
    navLinks.style.display = 'flex';
    abrirNavBtn.style.display = 'none';
    fecharNavBtn.style.display = 'inline-block';
}
const fecharNav = () => {
    navLinks.style.display = 'none';
    abrirNavBtn.style.display = 'inline-block';
    fecharNavBtn.style.display = 'none';
}

abrirNavBtn.addEventListener('click', abrirNav);
fecharNavBtn.addEventListener('click', fecharNav);