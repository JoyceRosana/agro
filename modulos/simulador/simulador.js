let x = 0;
let y = 0;
const speed = 30;

const world = document.querySelector(".world");

document.addEventListener("keydown", (e) => {

  if (e.key === "ArrowRight") x -= speed;
  if (e.key === "ArrowLeft") x += speed;
  if (e.key === "ArrowUp") y += speed;
  if (e.key === "ArrowDown") y -= speed;

  world.style.transform =
    `translate(${x}px, ${y}px)`;
});