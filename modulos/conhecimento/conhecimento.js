// PESQUISA DE CARDS

const pesquisa = document.querySelector(".pesquisa input");

const cards = document.querySelectorAll(".card");

pesquisa.addEventListener("input", () => {

    const valor = pesquisa.value.toLowerCase();

    cards.forEach(card => {

        const titulo = card.querySelector("h2")
        .textContent
        .toLowerCase();

        if(titulo.includes(valor)){

            card.style.display = "block";

        }else{

            card.style.display = "none";
        }

    });

});