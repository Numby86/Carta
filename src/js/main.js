const nav = document.querySelector('.menu-nav');
const sections = document.querySelectorAll('.menu-section');
const links = document.querySelectorAll('.menu-nav-item');

const setActiveMenuItem = () => {
    const navBottom = nav.getBoundingClientRect().bottom;

    let activeSection = null;

    sections.forEach((section) => {
        const rect = section.getBoundingClientRect();

        if (rect.top <= navBottom && rect.bottom > navBottom) {
            activeSection = section.id;
        }
    });

    links.forEach((link) => {
        link.classList.toggle(
            'active',
            link.getAttribute('href') === `#${activeSection}`
        );
    });
};

window.addEventListener('scroll', setActiveMenuItem);
window.addEventListener('resize', setActiveMenuItem);
window.addEventListener('load', setActiveMenuItem);