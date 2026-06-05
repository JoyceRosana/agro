const viewport = document.querySelector(".viewport");

let isDown = false;
let startX;
let startY;
let scrollLeft;
let scrollTop;

viewport.addEventListener("mousedown", (e) => {
  isDown = true;

  startX = e.pageX - viewport.offsetLeft;
  startY = e.pageY - viewport.offsetTop;

  scrollLeft = viewport.scrollLeft;
  scrollTop = viewport.scrollTop;
});

viewport.addEventListener("mouseleave", () => {
  isDown = false;
});

viewport.addEventListener("mouseup", () => {
  isDown = false;
});
  
const galpao = document.querySelector(".galpao");

const armazem = document.getElementById("armazem");

const painel = document.getElementById("painel-info");

galpao.addEventListener("click", () => {
  armazem.classList.remove("oculto");
});

function fecharArmazem(){
  armazem.classList.add("oculto");
}

function mostrarInfo(item){

  const dados = {

  milho: `
    <h2>🌽 Milho</h2>

    <p><strong>Quantidade disponível:</strong> 50 kg</p>

    <h3>Informações</h3>

    <p>✔ Utilizado na alimentação humana e animal.</p>

    <p>✔ Pode ser comercializado após a colheita.</p>

    <p>✔ Necessita irrigação e adubação adequadas.</p>
  `,

  soja: `
    <h2>🌱 Soja</h2>

    <p><strong>Quantidade disponível:</strong> 40 kg</p>

    <h3>Informações</h3>

    <p>✔ Possui alto valor comercial.</p>

    <p>✔ É utilizada na produção de diversos alimentos.</p>

    <p>✔ Requer manejo adequado para alta produtividade.</p>
  `,

  feijao: `
    <h2>🫘 Feijão</h2>

    <p><strong>Quantidade disponível:</strong> 25 kg</p>

    <h3>Informações</h3>

    <p>✔ Alimento importante na dieta brasileira.</p>

    <p>✔ Pode ser vendido após a colheita.</p>

    <p>✔ Necessita solo fértil e irrigação adequada.</p>
  `,

  alface: `
    <h2>🥬 Alface</h2>

    <p><strong>Quantidade disponível:</strong> 30 unidades</p>

    <h3>Informações</h3>

    <p>✔ Hortaliça muito consumida.</p>

    <p>✔ Crescimento rápido.</p>

    <p>✔ Necessita irrigação frequente.</p>
  `,

  organico: `
    <h2>🧺 Adubo Orgânico</h2>

    <p><strong>Quantidade disponível:</strong> 20 sacos</p>

    <h3>Benefícios</h3>

    <p>✔ Melhora a qualidade do solo.</p>

    <p>✔ Reduz a poluição ambiental.</p>

    <p>✔ Aumenta a fertilidade da terra.</p>

    <h3>Utilização</h3>

    <p>✔ Aplicado antes do plantio.</p>

    <p>✔ Pode ser utilizado em milho, soja, feijão e alface.</p>
  `,

  quimico: `
    <h2>🧪 Adubo Químico</h2>

    <p><strong>Quantidade disponível:</strong> 15 sacos</p>

    <h3>Benefícios</h3>

    <p>✔ Fornece nutrientes rapidamente.</p>

    <p>✔ Aumenta a produtividade das culturas.</p>

    <p>✔ Auxilia no desenvolvimento das plantas.</p>

    <h3>Utilização</h3>

    <p>✔ Aplicado conforme a necessidade da cultura.</p>
  `
};