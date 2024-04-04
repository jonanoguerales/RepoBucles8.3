const cartaSeleccionada = document.getElementById("tarjeta");

cartaSeleccionada?.addEventListener("click", voltearCarta);

const url1 =
  "https://raw.githubusercontent.com/Lemoncode/fotos-ejemplos/main/memo/1.png";
const url2 =
  "https://raw.githubusercontent.com/Lemoncode/fotos-ejemplos/main/memo/2.png";

function voltearCarta(e: MouseEvent): void {
  if (
    e.target !== null &&
    e.target !== undefined &&
    e.target instanceof HTMLImageElement
  ) {
    if (e.target.src.includes(url1)) {
      e.target.src = url2;
    } else {
      e.target.src = url1;
    }
  }
}
