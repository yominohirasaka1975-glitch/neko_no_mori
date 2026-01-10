// Icon Initialization
lucide.createIcons();

// Mobile Menu Toggle
const menuBtn = document.getElementById('menu-btn');
const closeMenuBtn = document.getElementById('close-menu-btn');
const mobileMenu = document.getElementById('mobile-menu');
const mobileLinks = document.querySelectorAll('.mobile-link');

function toggleMenu() {
    const isClosed = mobileMenu.classList.contains('translate-x-full');
    if (isClosed) {
        mobileMenu.classList.remove('translate-x-full');
        document.body.style.overflow = 'hidden'; // Prevent scrolling
    } else {
        mobileMenu.classList.add('translate-x-full');
        document.body.style.overflow = 'auto';
    }
}

if (menuBtn) menuBtn.addEventListener('click', toggleMenu);
if (closeMenuBtn) closeMenuBtn.addEventListener('click', toggleMenu);

mobileLinks.forEach(link => {
    link.addEventListener('click', toggleMenu);
});

// Intersection Observer for Fade-in Animations
const observerOptions = {
    root: null,
    rootMargin: '0px 0px -50px 0px', // Trigger slightly before the element is fully in view
    threshold: 0.1
};

const observer = new IntersectionObserver((entries, observer) => {
    entries.forEach(entry => {
        if (entry.isIntersecting) {
            entry.target.classList.add('is-visible');
            observer.unobserve(entry.target); // Run once
        }
    });
}, observerOptions);

document.querySelectorAll('.fade-in-up').forEach(section => {
    observer.observe(section);
});

// Header Background Change on Scroll
const header = document.getElementById('header');
window.addEventListener('scroll', () => {
    if (!header) return;
    if (window.scrollY > 50) {
        header.classList.add('shadow-md');
        header.classList.remove('py-4');
        header.classList.add('py-2');
    } else {
        header.classList.remove('shadow-md');
        header.classList.remove('py-2');
        header.classList.add('py-4');
    }
});