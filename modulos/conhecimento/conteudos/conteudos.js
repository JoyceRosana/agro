document.addEventListener("DOMContentLoaded", () => {
    const quizForm = document.getElementById("quiz-form");
    const options = document.querySelectorAll(".quiz-option");
    const feedbackBox = document.getElementById("quiz-feedback");

    if (!quizForm) return;

    let answered = false; // 🔒 trava do sistema

    options.forEach(option => {
        option.addEventListener("click", () => {

            if (answered) return; // impede mudança depois da escolha

            answered = true; // trava o quiz

            const input = option.querySelector("input");
            if (!input) return;

            input.checked = true;

            const isCorrect = option.classList.contains("correct-target");

            // limpa estilos antigos
            options.forEach(opt => {
                opt.classList.remove("selected-correct", "selected-wrong");
                opt.style.pointerEvents = "none"; // 🔒 bloqueia clique
            });

            feedbackBox.style.display = "block";

            if (isCorrect) {
                option.classList.add("selected-correct");
                feedbackBox.style.color = "#065f46";
            } else {
                option.classList.add("selected-wrong");
                feedbackBox.style.color = "#991b1b";

                const correct = document.querySelector(".correct-target");
                if (correct) correct.classList.add("selected-correct");
            }
        });
    });
});