document.addEventListener('DOMContentLoaded', () => {

    // Accordion
    const faqQuestions = document.querySelectorAll('.faq-question');

    faqQuestions.forEach(question => {
        question.addEventListener('click', () => {
            const currentItem = question.parentElement;

            const isActive = currentItem.classList.contains('active');

            document.querySelectorAll('.faq-item').forEach(item => {
                item.classList.remove('active');
            });

            if (!isActive) {
                currentItem.classList.add('active');
            }
        });
    });

    // Botão Fazer Pergunta
    const searchInput = document.querySelector('.search-box input');
const searchButton = document.querySelector('.btn-search');

    if (searchButton && searchInput) {

        searchButton.addEventListener('click', () => {
            const pergunta = searchInput.value.trim();

            if (pergunta !== "") {

                const assunto = encodeURIComponent("Pergunta - AgroTech");
                const mensagem = encodeURIComponent(
                    `Pergunta enviada pela Base de Conhecimento:\n\n${pergunta}`
                );

                window.location.href =
                `mailto:tavares.rosana@escola.pr.gov.br?subject=${assunto}&body=${mensagem}`;
            } else {
                alert("Digite uma pergunta.");
            }
        });

        searchInput.addEventListener('keypress', (e) => {
            if (e.key === 'Enter') {
                searchButton.click();
            }
        });
    }
});