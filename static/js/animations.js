document.addEventListener('DOMContentLoaded', () => {
    gsap.registerPlugin(ScrollTrigger);

    // GSAP animations
    gsap.from('.hero-content', {
        duration: 1,
        y: 50,
        opacity: 0,
        ease: 'power3.out'
    });

    gsap.from('.hero-image', {
        duration: 1,
        x: 50,
        opacity: 0,
        ease: 'power3.out',
        delay: 0.5
    });

    gsap.from('nav ul li', {
        duration: 0.5,
        opacity: 0,
        y: -20,
        stagger: 0.1,
        ease: 'power3.out'
    });

    // Scroll animations
    gsap.utils.toArray('section').forEach((section, i) => {
        gsap.from(section, {
            scrollTrigger: {
                trigger: section,
                start: "top 80%",
                end: "bottom 20%",
                toggleActions: "play none none reverse"
            },
            opacity: 0,
            y: 50,
            duration: 1,
            ease: "power3.out"
        });
    });

    // About list animation
    gsap.from('.about-list li', {
        scrollTrigger: {
            trigger: '.about-list',
            start: "top 80%",
        },
        opacity: 0,
        x: -50,
        stagger: 0.1,
        duration: 0.5,
        ease: "power3.out"
    });

    // Skill bars animation
    const skills = document.querySelectorAll('.skill');
    skills.forEach(skill => {
        const progressBar = skill.querySelector('.progress');
        const width = progressBar.style.width;
        progressBar.style.width = '0%';
        
        gsap.to(progressBar, {
            scrollTrigger: {
                trigger: skill,
                start: 'top 80%'
            },
            width: width,
            duration: 1.5,
            ease: 'power3.out'
        });
    });

    // Navbar transition animation and smooth scroll
    const navLinks = document.querySelectorAll('nav a');
    navLinks.forEach(link => {
        link.addEventListener('click', (e) => {
            e.preventDefault();
            const targetId = link.getAttribute('href');
            const targetElement = document.querySelector(targetId);
            
            gsap.to(window, {
                duration: 1,
                scrollTo: {
                    y: targetElement,
                    offsetY: 70
                },
                ease: "power3.inOut"
            });
        });
    });
});