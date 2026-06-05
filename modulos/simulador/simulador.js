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
    <h2>🌽 MILHO</h2>

    <p><strong>Quantidade disponível:</strong> 50 kg</p>

    <h3>Benefícios</h3>

    <p>✔ Utilizado na alimentação humana e animal.</p>
    <p>✔ Pode ser vendido para gerar lucro.</p>
    <p>✔ É uma das culturas mais produzidas no Brasil.</p>
    <p>✔ Serve como matéria-prima para diversos produtos.</p>

    <h3>Curiosidade</h3>
    <p>O milho é uma das culturas agrícolas mais cultivadas do mundo.</p>
  `,

  soja: `
    <h2>🌱 SOJA</h2>

    <p><strong>Quantidade disponível:</strong> 40 kg</p>

    <h3>Benefícios</h3>

    <p>✔ Alto valor comercial.</p>
    <p>✔ Usada na produção de óleo e ração animal.</p>
    <p>✔ Importante para exportação agrícola.</p>
    <p>✔ Gera grande renda para o produtor.</p>

    <h3>Curiosidade</h3>
    <p>O Brasil está entre os maiores produtores de soja do mundo.</p>
  `,

  feijao: `
    <h2>🫘 FEIJÃO</h2>

    <p><strong>Quantidade disponível:</strong> 25 kg</p>

    <h3>Benefícios</h3>

    <p>✔ Alimento essencial na alimentação brasileira.</p>
    <p>✔ Rico em proteínas e nutrientes.</p>
    <p>✔ Pode ser vendido após a colheita.</p>
    <p>✔ Contribui para a segurança alimentar.</p>

    <h3>Curiosidade</h3>
    <p>O feijão é um dos alimentos mais consumidos no Brasil diariamente.</p>
  `,

  alface: `
    <h2>🥬 ALFACE</h2>

    <p><strong>Quantidade disponível:</strong> 30 unidades</p>

    <h3>Benefícios</h3>

    <p>✔ Crescimento rápido.</p>
    <p>✔ Muito consumida em saladas.</p>
    <p>✔ Pode ser vendida em feiras e mercados locais.</p>
    <p>✔ Fonte de vitaminas e minerais.</p>

    <h3>Curiosidade</h3>
    <p>A alface pode ser colhida em poucos dias dependendo do manejo.</p>
  `,

  organico: `
    <h2>🧺 ADUBO ORGÂNICO</h2>

    <p><strong>Quantidade disponível:</strong> 20 sacos</p>

    <h3>Benefícios</h3>

    <p>✔ Melhora a qualidade do solo.</p>
    <p>✔ Reduz a poluição ambiental.</p>
    <p>✔ Aumenta a fertilidade da terra.</p>
    <p>✔ Ajuda na retenção de água no solo.</p>
    <p>✔ Favorece o crescimento saudável das plantas.</p>

    <h3>Curiosidade</h3>
    <p>É produzido a partir de restos naturais como folhas e esterco.</p>
  `,

  quimico: `
    <h2>🧪 ADUBO QUÍMICO</h2>

    <p><strong>Quantidade disponível:</strong> 15 sacos</p>

    <h3>Benefícios</h3>

    <p>✔ Fornece nutrientes rapidamente.</p>
    <p>✔ Aumenta a produtividade das culturas.</p>
    <p>✔ Auxilia no desenvolvimento das plantas.</p>
    <p>✔ Acelera o crescimento da lavoura.</p>
    <p>✔ Deve ser usado com planejamento.</p>

    <h3>Curiosidade</h3>
    <p>Seu uso excessivo pode prejudicar o solo a longo prazo.</p>
  `
};
}