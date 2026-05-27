let x = 0;
let y = 0;
const speed = 30;

document.addEventListener("keydown", (e) => {
  if (e.key === "ArrowRight") x += speed;
  if (e.key === "ArrowLeft") x -= speed;
  if (e.key === "ArrowUp") y -= speed;
  if (e.key === "ArrowDown") y += speed;

  document.querySelector(".world").style.transform =
    `translate(${x}px, ${y}px)`;
});