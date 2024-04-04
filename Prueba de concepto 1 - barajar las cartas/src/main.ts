import { iconosAnimales } from "./datos"

function shuffleArray(iconosAnimales:string[]) {
    for (let i = iconosAnimales.length - 1; i > 0; i--) {
      const j = Math.floor(Math.random() * (i + 1));
      [iconosAnimales[i], iconosAnimales[j]] = [iconosAnimales[j], iconosAnimales[i]];
    }
    return iconosAnimales;
  }
  
  // Barajear el array de animales
  const barajarCartas = shuffleArray(iconosAnimales);
  
  console.log(barajarCartas);
  