// ========================
// Animate Cards on Scroll
// ========================
const observer = new IntersectionObserver(entries => {
    entries.forEach(entry => {
        if(entry.isIntersecting) {
            entry.target.style.opacity = '1';
            entry.target.style.transform = 'translateY(0)';
            entry.target.style.transition = 'all 0.6s ease-out';
        }
    });
}, { threshold: 0.2 });

document.querySelectorAll('.about-card, .skill-card, .project-card').forEach(card => {
    observer.observe(card);
});

// ========================
// Navbar Color Change on Scroll
// ========================
const nav = document.querySelector('nav');
window.addEventListener('scroll', () => {
    if(window.scrollY > 50) nav.classList.add('scrolled');
    else nav.classList.remove('scrolled');
});

// ========================
// Smooth Scroll for Nav Links
// ========================
document.querySelectorAll('nav a').forEach(link => {
    link.addEventListener('click', e => {
        e.preventDefault();
        const target = document.querySelector(link.getAttribute('href'));
        target.scrollIntoView({ behavior: 'smooth' });
    });
});
