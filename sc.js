// Example: animate on scroll with fade-in effect
const cards = document.querySelectorAll('.skill-card');
const revealOnScroll = () => {
    const windowBottom = window.innerHeight;
    cards.forEach(card => {
        const rect = card.getBoundingClientRect();
        if (rect.top < windowBottom - 50) card.classList.add('visible');
    });
};

window.addEventListener('scroll', revealOnScroll);
window.addEventListener('load', revealOnScroll);
