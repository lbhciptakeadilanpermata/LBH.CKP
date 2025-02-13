// Smooth Scrolling for Navigation
document.querySelectorAll('nav a').forEach(anchor => {
    anchor.addEventListener('click', function(e) {
        e.preventDefault();

        // Scroll to the target section
        document.querySelector(this.getAttribute('href')).scrollIntoView({
            behavior: 'smooth',
            block: 'start',
        });
    });
});

// Intersection Observer for Fade-In Effect
const fadeInElements = document.querySelectorAll('.fade-in');
const observerOptions = {
    root: null,
    threshold: 0.1, // Element is considered in the viewport if 10% of it is visible
};

const fadeInObserver = new IntersectionObserver((entries, observer) => {
    entries.forEach(entry => {
        if (entry.isIntersecting) {
            entry.target.classList.add('fade-in-visible');
            observer.unobserve(entry.target); // Stop observing after animation
        }
    });
}, observerOptions);

fadeInElements.forEach(element => fadeInObserver.observe(element));

// WhatsApp Button Animation on Hover
const whatsappBtn = document.querySelector('.whatsapp-btn');
whatsappBtn.addEventListener('mouseenter', () => {
    whatsappBtn.style.transform = 'scale(1.1)';
    whatsappBtn.style.transition = 'transform 0.3s ease-in-out';
});

whatsappBtn.addEventListener('mouseleave', () => {
    whatsappBtn.style.transform = 'scale(1)';
    whatsappBtn.style.transition = 'transform 0.3s ease-in-out';
});

// Auto Scrolling Effect for "Beranda" Section (Optional)
const berandaSection = document.querySelector('#beranda');

window.addEventListener('load', () => {
    // Scroll to Beranda after 2 seconds for a welcoming effect
    setTimeout(() => {
        berandaSection.scrollIntoView({ behavior: 'smooth' });
    }, 2000);
});
