const options = {weekday: 'long', month: 'long', day: 'numeric', year: 'numeric'};
document.getElementById('currentdate').textContent = new Date().toLocaleDateString('en-US', options);

const hamburger = document.getElementById('hamburger');
const navUL = document.getElementById('main-nav');

hamburger.addEventListener('click', () => {
    navUL.classList.toggle('show');
}); 