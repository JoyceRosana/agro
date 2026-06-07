document.addEventListener("DOMContentLoaded", () => {
    const options = document.querySelectorAll(".quiz-option");

    let answered = false;

    options.forEach(option => {
        option.addEventListener("click", () => {

            if (answered) return;
            answered = true;

            const input = option.querySelector("input");
            if (input) input.checked = true;

            const isCorrect = option.classList.contains("correct-target");

            // trava tudo e limpa estados visuais
            options.forEach(opt => {
                opt.style.pointerEvents = "none";

                const optInput = opt.querySelector("input");
                if (optInput) optInput.disabled = true;
            });

            if (isCorrect) {
                option.classList.add("selected-correct");
            } else {
                option.classList.add("selected-wrong");

                const correct = document.querySelector(".correct-target");
                if (correct) correct.classList.add("selected-correct");
            }
        });
    });
});

// MENU CONHECIMENTO

const menuConhecimento = document.getElementById("menuConhecimento");
const dropdownMenu = document.getElementById("dropdownMenu");
const seta = document.getElementById("seta");

if (menuConhecimento && dropdownMenu) {

    menuConhecimento.addEventListener("click", function(e) {
        e.preventDefault();

        dropdownMenu.classList.toggle("show");

        if (seta) {
            seta.style.display =
                dropdownMenu.classList.contains("show")
                ? "none"
                : "inline";
        }
    });

    document.addEventListener("click", function(e) {

        if (
            !menuConhecimento.contains(e.target) &&
            !dropdownMenu.contains(e.target)
        ) {
            dropdownMenu.classList.remove("show");

            if (seta) {
                seta.style.display = "inline";
            }
        }
    });
}