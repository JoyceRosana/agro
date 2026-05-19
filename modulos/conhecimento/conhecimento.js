document.addEventListener("DOMContentLoaded", function () {
    // Seleciona todos os gatilhos das perguntas frequentes
    const faqTriggers = document.querySelectorAll(".faq-trigger");

    faqTriggers.forEach(trigger => {
        trigger.addEventListener("click", function () {
            // Encontra o item pai (.faq-item) correspondente
            const parentItem = this.parentElement;

            // Se o item já estiver aberto, fecha ele
            if (parentItem.classList.contains("active")) {
                parentItem.classList.remove("active");
            } else {
                // Remove a classe active de outros para fechar os demais (Efeito Sanfona Único)
                // Se preferir que múltiplos fiquem abertos juntos, comente a linha abaixo:
                document.querySelectorAll(".faq-item").forEach(item => item.classList.remove("active"));
                
                // Abre o item clicado
                parentItem.classList.add("active");
            }
        });
    });

    // Evento simples simulado para o botão de buscas
    const searchButton = document.querySelector(".search-box button");
    const searchInput = document.querySelector(".search-box input");

    if(searchButton && searchInput) {
        searchButton.addEventListener("click", function() {
            const query = searchInput.value.trim();
            if(query !== "") {
                alert("Buscando por: " + query + " na base de dados AgroTech...");
                // Aqui no futuro você pode acionar filtros reais na página
            }
        });
        
        // Ativar busca ao apertar "Enter" dentro do campo
        searchInput.addEventListener("keypress", function(e) {
            if(e.key === 'Enter') {
                searchButton.click();
            }
        });
    }
});
