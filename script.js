/* Mobile Nav Toggle */
const hamburger = document.querySelector('.hamburger');
const navLinks = document.querySelector('.nav-links');

hamburger.addEventListener('click', () => {
    navLinks.classList.toggle('active');
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

/* Scroll Active Link & Sticky Header */
const sections = document.querySelectorAll('section');
const navLi = document.querySelectorAll('header nav ul li a');

window.onscroll = () => {
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

/* EmailJS Contact Form Handling */
window.onload = function () {
    document.getElementById('contact-form').addEventListener('submit', function (event) {
        event.preventDefault();

        // these IDs from the previous steps
        const serviceID = 'YOUR_SERVICE_ID';
        const templateID = 'YOUR_TEMPLATE_ID';

        // Change button text to indicate sending
        const btn = this.querySelector('input[type="submit"]');
        const originalBtnValue = btn.value;
        btn.value = 'Sending...';

        emailjs.sendForm(serviceID, templateID, this)
            .then(() => {
                btn.value = originalBtnValue;
                alert('Sent!');
                document.getElementById('contact-form').reset();
            }, (err) => {
                btn.value = originalBtnValue;
                alert(JSON.stringify(err));
            });
    });
}
