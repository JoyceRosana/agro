document.addEventListener("DOMContentLoaded", () => {

    const options = document.querySelectorAll(".quiz-option");
    const feedbackBox = document.getElementById("quiz-feedback");

    options.forEach(option => {

        option.addEventListener("click", () => {

            options.forEach(o => {
                o.classList.remove("selected-correct", "selected-wrong");
            });

            const input = option.querySelector("input");
            input.checked = true;

            const isCorrect = option.classList.contains("correct-target");

            feedbackBox.style.display = "block";

            if (isCorrect) {
                option.classList.add("selected-correct");
                feedbackBox.style.color = "#065f46";
                feedbackBox.innerHTML = "✨ Correto!";
            } else {
                option.classList.add("selected-wrong");
                feedbackBox.style.color = "#991b1b";
                feedbackBox.innerHTML = "❌ Incorreto.";

                const correct = document.querySelector(".quiz-option.correct-target");
                if (correct) {
                    setTimeout(() => {
                        correct.classList.add("selected-correct");
                    }, 300);
                }
            }
        });
    });
});