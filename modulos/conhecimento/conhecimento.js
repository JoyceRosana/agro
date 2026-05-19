document.addEventListener("DOMContentLoaded", function () {
    // Seleciona todos os cabeçalhos clicáveis do FAQ
    const faqTriggers = document.querySelectorAll(".faq-trigger");

    faqTriggers.forEach(trigger => {
        trigger.addEventListener("click", function () {
            const parentItem = this.parentElement;

            // Se a pergunta clicada já estiver ativa, apenas fecha
            if (parentItem.classList.contains("active")) {
                parentItem.classList.remove("active");
            } else {
                // Fecha qualquer outra pergunta que possa estar aberta na tela
                document.querySelectorAll(".faq-item").forEach(item => {
                    item.classList.remove("active");
                });
                // Abre a pergunta atual
                parentItem.classList.add("active");
            }
        });
    });
});
