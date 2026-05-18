// Initialize AOS (Animate on Scroll) Library
document.addEventListener("DOMContentLoaded", function() {
    AOS.init({
        duration: 1000, // Animation duration in milliseconds
        once: true,     // Whether animation should happen only once - while scrolling down
        offset: 100     // Change offset to trigger animations sooner or later
    });
});

// Optional: Dynamic Navbar background control on scroll
window.addEventListener('scroll', () => {
    const nav = document.querySelector('nav');
    if (window.scrollY > 50) {
        nav.classList.add('bg-[#0f172a]', 'shadow-xl');
        nav.classList.remove('bg-[#0f172a]/80');
    } else {
        nav.classList.add('bg-[#0f172a]/80');
        nav.classList.remove('bg-[#0f172a]', 'shadow-xl');
    }
});
