// script.js
document.addEventListener('DOMContentLoaded', () => {
    const logo = document.getElementById('logo');
    const tagline = document.getElementById('tagline');
    const trivia = document.getElementById('trivia');

    logo.addEventListener('mouseover', () => {
        logo.style.color = '#FF6347';
    });

    logo.addEventListener('mouseout', () => {
        logo.style.color = '#FFD700';
    });

    tagline.addEventListener('click', () => {
        alert('Welcome to Noah's Food Trailer!');
    });

    // Show trivia on page load
    setTimeout(() => {
        trivia.style.display = 'block';
    }, 3000);
});
