document.addEventListener("DOMContentLoaded", () => {
    const btnContato = document.getElementById("btnContato");

    if (btnContato) {
        btnContato.addEventListener("click", () => {

            const email = "tavares.rosana@escola.pr.gov.br";
            const assunto = encodeURIComponent("Contato dahyyh                 AgroTech sustentável");
            const mensagem = encodeURIComponent(
                "Olá, gostaria de entrar em contato."
            );

            window.location.href =
                `mailto:${email}?subject=${assunto}&body=${mensagem}`;
        });
    }
});