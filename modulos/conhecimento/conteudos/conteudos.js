document.addEventListener("DOMContentLoaded", () => {
    const quizForm = document.getElementById("quiz-form");
    const options = document.querySelectorAll(".quiz-option");
    const feedbackBox = document.getElementById("quiz-feedback");

    if (!quizForm) return;

    options.forEach(option => {
        option.addEventListener("click", () => {

            // limpa estilos anteriores
            options.forEach(opt => {
                opt.classList.remove("selected-correct", "selected-wrong");
            });

            const input = option.querySelector("input");
            if (!input) return;

            input.checked = true;

            // NOVA REGRA: correto vem da classe correta padrão
            const isCorrect = option.classList.contains("correct-target");

            feedbackBox.style.display = "block";

            if (isCorrect) {
                option.classList.add("selected-correct");
                feedbackBox.style.color = "#065f46";
                feedbackBox.innerHTML = "✔ Resposta correta!";
            } else {
                option.classList.add("selected-wrong");
                feedbackBox.style.color = "#991b1b";
                feedbackBox.innerHTML = "✖ Resposta incorreta.";

                // mostra a correta automaticamente
                const correct = document.querySelector(".correct-target");
                if (correct) correct.classList.add("selected-correct");
            }
        });
    });
});