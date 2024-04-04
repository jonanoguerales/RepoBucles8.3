import { Cartas, Carta } from "./modelo";

let clicsRealizados = 0;

function cambiarUrl(event: MouseEvent, carta: Carta[]) {
  if (
    event.target !== null &&
    event.target !== undefined &&
    event.target instanceof HTMLImageElement
  ) {
    const imgClicada = event.target;

    const indiceStr = imgClicada.dataset.indiceId;
    const indice = indiceStr ? parseInt(indiceStr, 10) : undefined;

    if (indice !== undefined && carta[indice]) {
      imgClicada.src = carta[indice].imagen;
      carta[indice].estaVuelta = true;
      clicsRealizados++;
    }

    if (clicsRealizados === 2) {
      const imagenes = document.querySelectorAll(".imgTarjeta");
      setTimeout(() => {
        imagenes.forEach(function (elemento: Element): void {
          if (elemento instanceof HTMLImageElement) {
            elemento.src = "/ParteAtras.png";
          }
        });
        clicsRealizados = 0;
      }, 500);
    }
  }
}

const imagenes = document.querySelectorAll(".tarjeta");

imagenes.forEach((imagen) => {
  imagen.addEventListener("click", (event) => {
    if (event !== null && event !== undefined && event instanceof MouseEvent) {
      cambiarUrl(event, Cartas);
    }
  });
});
