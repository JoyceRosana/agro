document.addEventListener("DOMContentLoaded", () => {
    // Seleciona o botão de "Enviar mensagem"
    const btnContato = document.getElementById("btnContato");

    if (btnContato) {
        btnContato.addEventListener("click", () => {
            alert("Obrigado pelo contato! Esta função de mensagens será integrada em breve.");
        });
    }

    // Efeito visual sutil nos cards ao passar o mouse (opcional)
    const cards = document.querySelectorAll(".card, .card-wide, .tech-item");
    cards.forEach(card => {
        card.style.transition = "transform 0.2s ease, box-shadow 0.2s ease";
        card.addEventListener("mouseenter", () => {
            card.style.transform = "translateY(-2px)";
            card.style.box-shadow = "0 4px 12px rgba(0, 0, 0, 0.05)";
        });
        card.addEventListener("mouseleave", () => {
            card.style.transform = "translateY(0)";
            card.style.box-shadow = "none";
        });
    });
});
