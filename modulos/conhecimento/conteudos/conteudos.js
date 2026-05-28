document.addEventListener("DOMContentLoaded", function () {

    const options = document.querySelectorAll(".quiz-option");
    const feedbackBox = document.getElementById("quiz-feedback");
    const container = document.querySelector(".quiz-container");

    const correctAnswer = container.dataset.answer;

    options.forEach(option => {

        option.addEventListener("click", function () {

            options.forEach(opt => {
                opt.classList.remove("selected-correct", "selected-wrong");
            });

            const input = this.querySelector("input");

            if (!input) return;

            input.checked = true;

            feedbackBox.style.display = "block";

            if (input.value === correctAnswer) {

                this.classList.add("selected-correct");

                feedbackBox.style.color = "#16a34a";
                feedbackBox.textContent =
                    "Correto. Sistema eficiente de irrigação.";

            } else {

                this.classList.add("selected-wrong");

                feedbackBox.style.color = "#dc2626";
                feedbackBox.textContent =
                    "Errado. Revise qual método economiza mais água.";
            }
        });
    });
});