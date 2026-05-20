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

                const email = "tavares.rosana@escola.pr.gov.br";

const assunto = encodeURIComponent(
    "Pergunta enviada pela Base de Conhecimento - AgroTech"
);

const mensagem = encodeURIComponent(
`Olá,

Estou entrando em contato pela Base de Conhecimento do AgroTech.

Pergunta:
${pergunta}

`
);

window.open(
`mailto:${email}?subject=${assunto}&body=${mensagem}`,
"_blank"
);

        searchInput.addEventListener('keypress', (e) => {
            if (e.key === 'Enter') {
                searchButton.click();
            }
        });
    }
});