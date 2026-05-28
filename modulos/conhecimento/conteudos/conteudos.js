document.addEventListener("DOMContentLoaded", function () {
    const quizForm = document.getElementById("quiz-form");
    const options = document.querySelectorAll(".quiz-option");
    const feedbackBox = document.getElementById("quiz-feedback");

    options.forEach(option => {
        option.addEventListener("click", function () {
            // Remove classes anteriores de feedback visual de todas as opções
            options.forEach(opt => {
                opt.classList.remove("selected-correct", "selected-wrong");
            });

            // Captura o input de rádio interno
            const radioInput = this.querySelector('input[type="radio"]');
            if (radioInput) {
                radioInput.checked = true;
                
                // Validação da resposta correta ("gotejamento")
                if (radioInput.value === "gotejamento") {
                    this.classList.add("selected-correct");
                    feedbackBox.style.display = "block";
                    feedbackBox.style.color = "#065f46";
                    feedbackBox.innerHTML = "✨ Correto! O gotejamento aplica água de forma localizada direto nas raízes.";
                } else {
                    this.classList.add("selected-wrong");
                    feedbackBox.style.display = "block";
                    feedbackBox.style.color = "#991b1b";
                    feedbackBox.innerHTML = "❌ Incorreto. Tente novamente! Dica: Procure o sistema que evita perdas por evaporação e vai direto na base.";
                    
                    // Validação da resposta correta ("Monitoramento meteorológico")
                if (radioInput.value === "Monitoramento meteorológico") {
                    this.classList.add("selected-correct");
                    feedbackBox.style.display = "block";
                    feedbackBox.style.color = "#065f46";
                    feedbackBox.innerHTML = "✨ Correto! O gotejamento aplica água de forma localizada direto nas raízes.";
                } else {
                    this.classList.add("selected-wrong");
                    feedbackBox.style.display = "block";
                    feedbackBox.style.color = "#991b1b";
                    feedbackBox.innerHTML = "❌ Incorreto. Tente novamente! Dica: Procure o sistema que evita perdas por evaporação e vai direto na base.";
                    
                    // Destaca sutilmente a alternativa certa para ajudar o estudante
                    const correctTarget = document.querySelector(".correct-target");
                    if (correctTarget) {
                        setTimeout(() => {
                            correctTarget.classList.add("selected-correct");
                        }, 600);
                    }
                }
            }
        });
    });
});       