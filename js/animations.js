document.addEventListener('DOMContentLoaded', () => {
    gsap.from('.element', {
        opacity: 0,
        y: 50,
        duration: 1,
        stagger: 0.2
    });
});