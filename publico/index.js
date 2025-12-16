document.addEventListener("DOMContentLoaded", () => {
  console.log("index.js cargado");

  const bloques = document.querySelectorAll(".bloque");
  bloques.forEach((bloque, i) => {
    bloque.style.opacity = 0;
    bloque.style.transform = "translateY(20px)";
    setTimeout(() => {
      bloque.style.transition = "all 0.6s ease";
      bloque.style.opacity = 1;
      bloque.style.transform = "translateY(0)";
    }, i * 200);
  });
});
