document.addEventListener("DOMContentLoaded", () => {
    const btnContato = document.getElementById("btnContato");
    if (btnContato) {
        btnContato.addEventListener("click", () => {
            alert("Redirecionando para o suporte do AgroTech...");
        });
    }
});
