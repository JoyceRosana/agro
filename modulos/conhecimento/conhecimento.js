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

            } else {
                alert("Digite uma pergunta.");
            }

        });

        // Permite apertar Enter
        searchInput.addEventListener('keypress', (e) => {
            if (e.key === 'Enter') {
                searchButton.click();
            }
        });
    }
const modal = document.getElementById("modal");
const modalTitle = document.getElementById("modalTitle");
const modalText = document.getElementById("modalText");
const closeModal = document.getElementById("closeModal");

// conteúdos (organização mínima obrigatória)
const conteudos = {
    irrigacao: {
        title: "Irrigação",
        text: "Irrigação é o conjunto de técnicas usadas para fornecer água às plantas de forma controlada. O objetivo é evitar desperdício, aumentar produtividade e garantir que a planta receba água no momento certo. Sistemas como gotejamento e aspersão ajudam a otimizar o uso da água."
    },
    solo: {
        title: "Solo",
        text: "O solo é a base da produção agrícola. Sua qualidade depende de nutrientes, matéria orgânica e estrutura. Práticas como rotação de culturas e adubação ajudam a manter o solo fértil e produtivo ao longo do tempo."
    }
};

// abre modal
function openModal(key) {
    modalTitle.innerText = conteudos[key].title;
    modalText.innerText = conteudos[key].text;
    modal.style.display = "flex";
}

// fecha modal
closeModal.onclick = () => {
    modal.style.display = "none";
};

window.onclick = (e) => {
    if (e.target == modal) {
        modal.style.display = "none";
    }
};
});