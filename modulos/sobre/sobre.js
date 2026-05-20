document.addEventListener("DOMContentLoaded", () => {
    const btnContato = document.getElementById("btnContato");

    if (btnContato) {
        btnContato.addEventListener("click", () => {
            window.location.href =
"mailto:tavares.rosana@escola.pr.gov.br?subject=Contato%20AgroTech&body=Olá,%20gostaria%20de%20entrar%20em%20contato.";
        });
    }
});