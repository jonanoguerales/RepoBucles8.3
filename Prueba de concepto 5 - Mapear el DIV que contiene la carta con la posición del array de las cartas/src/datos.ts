import { InfoCarta } from "./modelo";

export const imgAnimales : InfoCarta[] = []

for(var i = 1; i <=6; i++){
    const url = "https://raw.githubusercontent.com/Lemoncode/fotos-ejemplos/main/memo/"+i+".png";
    const idFoto = i;

    const carta: InfoCarta = {
        idFoto: idFoto,
        imagen: url
    };
    imgAnimales.push(carta);
    imgAnimales.push(carta);
}