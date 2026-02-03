/* Mobile Nav Toggle */
const hamburger = document.querySelector('.hamburger');
const navLinks = document.querySelector('.nav-links');

hamburger.addEventListener('click', () => {
    navLinks.classList.toggle('active');
    // Animate hamburger to X
    // Basic implementation; for now let's just toggle menu
});

/* Close mobile menu when link is clicked */
document.querySelectorAll('.nav-links li a').forEach(link => {
    link.addEventListener('click', () => {
        navLinks.classList.remove('active');
    });
});

/* Typing Animation */
const typed = new Typed('.typing-text', {
    strings: ['Web Developer', 'Designer', 'Freelancer'],
    typeSpeed: 100,
    backSpeed: 60,
    loop: true
});

/* Scroll Reveal (Simple Intersection Observer) - Optional if CSS animations are enough on load */
/* CSS animations used for entrance. This script handles sticky header state mostly if needed, 
   but sticky is handled by CSS here perfectly. 
   We can add active link highlighting on scroll. 
*/

const sections = document.querySelectorAll('section');
const navLi = document.querySelectorAll('header nav ul li a');

window.onscroll = () => {
    /* Sticky Header Background specific adjust if needed, but current CSS is fine */
    
    /* Scroll Active Link */
    var current = "";
    sections.forEach((section) => {
        const sectionTop = section.offsetTop;
        if (scrollY >= sectionTop - 60) {
            current = section.getAttribute("id");
        }
    });

    navLi.forEach((li) => {
        li.classList.remove("active");
        if (li.getAttribute("href").includes(current) && current !== "") {
            li.classList.add("active");
        }
    });
};
