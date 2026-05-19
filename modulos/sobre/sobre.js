// Aguarda o carregamento completo do documento
document.addEventListener('DOMContentLoaded', () => {
    
    const btnContato = document.getElementById('btnContato');

    if (btnContato) {
        btnContato.addEventListener('click', () => {
            // Insira aqui o comportamento do botão "Enviar mensagem"
            alert('Mensagem enviada com sucesso! Nossa equipe entrará em contato.');
        });
    }

});
