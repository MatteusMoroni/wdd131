// Select DOM Elements
const menuButton = document.querySelector('#menu-button');
const navLinks = document.querySelector('#nav-links');

// --- Hamburger Menu ---
menuButton.addEventListener('click', () => {
    navLinks.classList.toggle('open');
});