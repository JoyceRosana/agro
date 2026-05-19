document.addEventListener('DOMContentLoaded', () => {
    const cards = document.querySelectorAll('.card');

    const animarAoRolar = () => {
        cards.forEach(card => {
            const posicaoCard = card.getBoundingClientRect().top;
            const alturaTela = window.innerHeight * 0.85;

            if (posicaoCard < alturaTela) {
                card.style.opacity = '1';
                card.style.transform = 'translateY(0)';
            }
        });
    };

    cards.forEach(card => {
        card.style.opacity = '0';
        card.style.transform = 'translateY(15px)';
        card.style.transition = 'opacity 0.4s ease, transform 0.4s ease';
    });

    animarAoRolar();
    window.addEventListener('scroll', animarAoRolar);
});
