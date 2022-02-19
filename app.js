const titreSpans = document.querySelectorAll('h1 span');
const btns = document.querySelectorAll('.btn-first');
const logo = document.querySelector('.menu-ul-img');
const menuLinks = document.querySelectorAll('.menu-link');

window.addEventListener ('load', () => {

    const TL = gsap.timeline({paused: true});
     
    TL
    .staggerFrom(titreSpans, 1.5, {top: -50, opacity: 0, ease: "power2.out"}, 0.4)
    .staggerFrom(menuLinks, 0.8, {top: -50, opacity: 0, ease: "power2.out"}, 0.15, '-=1.5')
    .staggerFrom(btns, 1, {opacity: 0, ease: "power2.out"}, 0.3, '-=1.5')
    .from(logo, 0.4, {transform: "scale(0)", ease: "power2.out"}, '-=0.7')
    
    TL.play();
})