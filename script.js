// ========================================
// ANIMAÇÃO SCROLL
// ========================================

const fadeElements = document.querySelectorAll('.fade-up');

const observer = new IntersectionObserver((entries)=>{

    entries.forEach(entry=>{

        if(entry.isIntersecting){

            entry.target.classList.add('show');
        }

    });

});

fadeElements.forEach(el=>{

    observer.observe(el);
});

// ========================================
// BOTÃO ROLE PARA CONHECER
// ========================================

const scrollButton =
document.querySelector('.scroll-down');

window.addEventListener('scroll', () => {

    if(window.scrollY > 100){

        scrollButton.classList.add('hide');

    } else {

        scrollButton.classList.remove('hide');
    }

});

// ========================================
// ACESSIBILIDADE
// ========================================

document.addEventListener('DOMContentLoaded', () => {

    let currentFontSize = 100;

    const increaseBtn =
    document.getElementById('increase-font');

    const decreaseBtn =
    document.getElementById('decrease-font');

    const darkBtn =
    document.getElementById('dark-mode');

    const lightBtn =
    document.getElementById('light-mode');

    const readingBtn =
    document.getElementById('reading-mode');

    // AUMENTAR FONTE

    increaseBtn.addEventListener('click', () => {

        if(currentFontSize < 140){

            currentFontSize += 10;

            document.body.style.fontSize =
            currentFontSize + '%';
        }

    });

    // DIMINUIR FONTE

    decreaseBtn.addEventListener('click', () => {

        if(currentFontSize > 80){

            currentFontSize -= 10;

            document.body.style.fontSize =
            currentFontSize + '%';
        }

    });

    // MODO ESCURO

    darkBtn.addEventListener('click', () => {

        document.body.classList.remove('reading-mode');

        document.body.classList.add('dark-mode');
    });

    // MODO CLARO

    lightBtn.addEventListener('click', () => {

        document.body.classList.remove('dark-mode');

        document.body.classList.remove('reading-mode');
    });

    // MODO LEITURA

    readingBtn.addEventListener('click', () => {

        document.body.classList.remove('dark-mode');

        document.body.classList.toggle('reading-mode');
    });

});