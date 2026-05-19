// Efeito de Animação de Números Crescentes para a seção de Sustentabilidade
document.addEventListener("DOMContentLoaded", () => {
    const counters = document.querySelectorAll('.number');
    const speed = 100; // Quanto menor mais rápido o contador roda

    const startCounting = (entries, observer) => {
        entries.forEach(entry => {
            if (entry.isIntersecting) {
                const counter = entry.target;
                const updateCount = () => {
                    const target = parseInt(counter.getAttribute('data-target'));
                    const count = parseInt(counter.innerText);
                    const increment = Math.ceil(target / speed);

                    if (count < target) {
                        counter.innerText = (count + increment) > target ? target + "%" : (count + increment) + "%";
                        setTimeout(updateCount, 20);
                    } else {
                        counter.innerText = target + "%";
                    }
                };
                updateCount();
                observer.unobserve(counter); // Evita rodar novamente ao scrollar de volta
            }
        });
    };

    // Observer para ativar apenas quando o usuário rolar a tela até os números
    const observer = new IntersectionObserver(startCounting, {
        threshold: 0.5
    });

    counters.forEach(counter => observer.observe(counter));
});
