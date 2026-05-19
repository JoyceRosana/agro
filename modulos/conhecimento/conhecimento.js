document.addEventListener('DOMContentLoaded', () => {
    
    // Sistema do Accordion (Perguntas Frequentes)
    const faqQuestions = document.querySelectorAll('.faq-question');

    faqQuestions.forEach(question => {
        question.addEventListener('click', () => {
            const currentItem = question.parentElement;
            
            // Verifica se o item já está ativo
            const isActive = currentItem.classList.contains('active');
            
            // Fecha todos os outros antes de abrir um novo (opcional)
            document.querySelectorAll('.faq-item').forEach(item => {
                item.classList.remove('active');
            });

            // Se não estava ativo, abre o atual
            if (!isActive) {
                currentItem.classList.add('active');
            }
        });
    });

    // Simulação do mecanismo de busca básica (opcional)
    const searchInput = document.querySelector('.search-box input');
    const searchButton = document.querySelector('.btn-search');

    if (searchButton && searchInput) {
        searchButton.addEventListener('click', () => {
            const query = searchInput.value.trim();
            if(query !== "") {
                alert(`Buscando por: "${query}" na Base de Conhecimento...`);
                // Aqui você pode redirecionar ou filtrar os elementos da tela
            }
        });

        // Permitir buscar apertando Enter
        searchInput.addEventListener('keypress', (e) => {
            if (e.key === 'Enter') {
                searchButton.click();
            }
        });
    }
});
