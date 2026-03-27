// Smooth scroll para enlaces internos
document.querySelectorAll('a[href^="#"]').forEach(anchor => {
    anchor.addEventListener('click', function(e){
        e.preventDefault();
        document.querySelector(this.getAttribute('href')).scrollIntoView({
            behavior: 'smooth'
        });
    });
});

window.addEventListener('scroll', function(){
    const scrolled = window.scrollY;
    const heroBg = document.querySelector('.hero-bg');
    heroBg.style.transform = 'translateY(' + scrolled * 0.3 + 'px)';
});
//imagenes
const slides = document.querySelectorAll('.slide');
let index = 0;

function cambiarSlide() {
    slides[index].classList.remove('active');
    index = (index + 1) % slides.length;
    slides[index].classList.add('active');
}

setInterval(cambiarSlide, 4000);