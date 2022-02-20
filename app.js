const titreSpans = document.querySelectorAll('h1 span');
const btns = document.querySelectorAll('.btn-first');
const logo = document.querySelector('.menu-ul-img');
const menuLinks = document.querySelectorAll('.menu-link');
const menuNav = document.querySelector('.menu-nav');
const loadingTimeMs = 1000;


function sleep(ms) {

    return new Promise(resolve => setTimeout(resolve, ms));
}

window.addEventListener ('load', () => {

    const TL = gsap.timeline({paused: true});
    
    TL
    .staggerFrom(titreSpans, 1.5, {top: -50, opacity: 0, ease: "power2.out"}, 0.4)
    .staggerFrom(menuLinks, 0.8, {top: -50, opacity: 0, ease: "power2.out"}, 0.15, '-=1.5')
    .staggerFrom(btns, 1, {opacity: 0, ease: "power2.out"}, 0.3, '-=1.5')
    .from(logo, 0.4, {transform: "scale(0)", ease: "power2.out"}, '-=0.7')
    
    sleep(loadingTimeMs).then (() =>
        $(".loader-wrapper").fadeOut("slow", function() {
            
            TL.play()
        })
    )
    
    
    
})

window.addEventListener('scroll', () => {
    
    if(window.scrollY > 1){
        menuNav.classList.add('menu-nav-scroll');
    } else {
        menuNav.classList.remove('menu-nav-scroll');
    }
})

//Reveal des elements

window.addEventListener('scroll', reveal);

function reveal(){
    var reveals = document.querySelectorAll('.reveal');

    for(var i = 0; i < reveals.length; i++) {

        var windowheight = window.innerHeight;
        var revealtop = reveals[i].getBoundingClientRect().top;
        var revealpoint = 200; //paramètre de quand il apparait

        if (revealtop < windowheight - revealpoint) {
            reveals[i].classList.add('active');
        } else {
            reveals[i].classList.remove('active');
        }
    }
}
    

// Anim Click

// window.addEventListener('click', (e) => {
//     console.log(e);
//     const rond = document.createElement('div');
//     rond.className = 'clickAnim';
//     rond.style.top = `${e.pageY - 50}px`;
//     rond.style.left = `${e.pageX - 50}px`;
//     document.body.appendChild(rond);

//     setTimeout(() => {
//         rond.remove();
//     }, 1500)
// })
