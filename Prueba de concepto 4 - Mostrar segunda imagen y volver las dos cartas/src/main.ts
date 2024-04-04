interface Carta {
  idFoto: number; // id del 1 al 6 para 12 cartas, así identificamos rápido si es un gatito ,un perrito...
  // el ID se repete 2 veces en el array de cartas (hay dos cartas de un perro, hay dos cartas de un gato)
  imagen: string; // por comodidad repetimos la url de la imagen
  estaVuelta: boolean;
  encontrada: boolean;
}
const carta: Carta[] = [
  {
    idFoto: 1,
    imagen:
      "https://raw.githubusercontent.com/Lemoncode/fotos-ejemplos/main/memo/1.png",
    estaVuelta: false,
    encontrada: false,
  },
  {
    idFoto: 2,
    imagen:
      "https://raw.githubusercontent.com/Lemoncode/fotos-ejemplos/main/memo/3.png",
    estaVuelta: false,
    encontrada: false,
  },
];
console.log(carta);
const imagenes = document.querySelectorAll(".tarjeta");

imagenes.forEach(function (imagen) {
  imagen.addEventListener("click", function () {
    const img = imagen.querySelector("img");
    if (img !== null && img !== undefined && img instanceof HTMLImageElement) {
      cambiarUrl(carta, img);
    }
  });
});

function cambiarUrl(carta: Carta[], img: HTMLImageElement) {
  if (img !== null && img !== undefined && img instanceof HTMLImageElement) {
    if (img.attributes.getNamedItem("data-indice-id")?.value === "0") {
      img.src = carta[0].imagen;
      carta[0].estaVuelta = true;
    } else {
      img.src = carta[1].imagen;
      carta[1].estaVuelta = true;
    }
    if (carta.every((carta) => carta.estaVuelta)) {
      setTimeout(() => {
        imagenes.forEach(function (imagen) {
          const img = imagen.querySelector("img");
          if (
            img !== null &&
            img !== undefined &&
            img instanceof HTMLImageElement
          ) {
            img.src = "/ParteAtras.png";
          }
        });
        // Reiniciar estado de vuelta de las cartas
        carta.forEach((carta) => {
          carta.estaVuelta = false;
        });
      }, 500);
    }
  }
}
