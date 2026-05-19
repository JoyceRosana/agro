// Ativação e lógica de expansão do Accordion (FAQ)
document.addEventListener("DOMContentLoaded", () => {
    const faqQuestions = document.querySelectorAll(".faq-question");

    faqQuestions.forEach(question => {
        question.addEventListener("click", () => {
            const currentItem = question.parentElement;
            
            // Fecha outros FAQs abertos para ficar organizado
            document.querySelectorAll(".faq-item").forEach(item => {
                if (item !== currentItem) {
                    item.classList.remove("active");
                }
            });

            // Altera o estado do item atual
            currentItem.classList.toggle("active");
        });
    });
});
