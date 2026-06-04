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

viewport.addEventListener("mousemove", (e) => {

  if (!isDown) return;

  e.preventDefault();

  const x = e.pageX - viewport.offsetLeft;
  const y = e.pageY - viewport.offsetTop;

  const walkX = (x - startX);
  const walkY = (y - startY);

  viewport.scrollLeft = scrollLeft - walkX;
  viewport.scrollTop = scrollTop - walkY;
});

// Define a quantidade exata de linhas e colunas
const linhas = 8;
const colunas = 15;
const totalBlocos = linhas * colunas;

// Seleciona o container do HTML
const grade = document.getElementById('grade');

// Loop para gerar e inserir os blocos automaticamente
for (let i = 0; i < totalBlocos; i++) {
  const img = document.createElement('img');
  
  // ATENÇÃO: Substitua pelo nome ou caminho correto do seu arquivo de imagem
  img.src = 'terra.png'; 
  
  img.className = 'bloco-terra';
  img.alt = 'Bloco de Terra';
  
  grade.appendChild(img);
}

