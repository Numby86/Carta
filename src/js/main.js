const sections = document.querySelectorAll('.menu-section');
const links = document.querySelectorAll('.menu-nav-item');

const setActiveMenuItem = () => {
    let currentSection = null;

    sections.forEach((section) => {
        const rect = section.getBoundingClientRect();

        if (rect.top <= 120 && rect.bottom >= 120) {
            currentSection = section.id;
        }
    });

    if (!currentSection) return;

    links.forEach((link) => {
        link.classList.toggle(
            'active',
            link.getAttribute('href') === `#${currentSection}`
        );
    });
};

window.addEventListener('scroll', setActiveMenuItem);
window.addEventListener('load', setActiveMenuItem);