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

  // Define a quantidade exata de linhas e colunas
const linhas = 8;
const colunas = 15;
const totalBlocos = linhas * colunas;

// Seleciona o container do HTML
const grade = document.getElementById('grade');

// Loop para gerar e inserir os blocos automaticamente
for (let i = 0; i < totalBlocos; i++) {
  const img = document.createElement('img');
  
  // CAMINHO ATUALIZADO: Aponta para a sua pasta de assets
  img.src = 'assets/imagens/simulador/terra.png'; 
  
  img.className = 'bloco-terra';
  img.alt = 'Bloco de Terra';
  
  grade.appendChild(img);
}
});
