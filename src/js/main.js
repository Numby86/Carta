document.addEventListener('DOMContentLoaded', () => {
    const sections = document.querySelectorAll('.menu-section');
    const navLinks = document.querySelectorAll('.menu-nav a');

    const observer = new IntersectionObserver(
        (entries) => {
            entries.forEach((entry) => {
                if (!entry.isIntersecting) return;

                const id = entry.target.id;

                navLinks.forEach((link) => {
                    link.classList.remove('active');

                    if (link.getAttribute('href') === `#${id}`) {
                        link.classList.add('active');
                    }
                });
            });
        },
        {
            threshold: 0.4,
            rootMargin: '-80px 0px -40% 0px'
        }
    );

    sections.forEach((section) => observer.observe(section));
});