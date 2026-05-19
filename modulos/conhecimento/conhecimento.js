// conhecimento.js

const pesquisa = document.getElementById("pesquisa");

pesquisa.addEventListener("keyup", () => {

    let texto = pesquisa.value.toLowerCase();

    let cards = document.querySelectorAll(".card");

    cards.forEach(card => {

        let titulo = card.innerText.toLowerCase();

        if(titulo.includes(texto)){

            card.style.display = "block";

        }else{

            card.style.display = "none";
        }

    });

});

/* BOTÃO PERGUNTA */

const btnPergunta = document.getElementById("btnPergunta");

btnPergunta.addEventListener("click", () => {

    let pergunta = prompt("Digite sua pergunta:");

    if(pergunta){

        alert(
            "Pergunta enviada com sucesso!\n\n" +
            "Pergunta: " + pergunta
        );
    }

});