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

const milho = document.getElementById("milho");

// estágio 1 (esquerda)
milho.style.backgroundPosition = "0px 0px";

setTimeout(() => {
    // estágio 2 (meio)
    milho.style.backgroundPosition = "-512px 0px";
}, 5000);

setTimeout(() => {
    // estágio 3 (direita)
    milho.style.backgroundPosition = "-1024px 0px";
}, 10000);