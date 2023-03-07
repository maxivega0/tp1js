//! 9.- Escribe un programa que pida una frase y escriba las vocales que aparecen
//! Nota: Tener en cuenta la función length y substring o charAt (developer mozilla)

let frase = prompt("Escriba una frase");
frase = frase.toLowerCase();
console.log(frase.length);
const cantCadena = frase.length;
let i;
for (i = 0; i < cantCadena; i++) {
if (frase.substring(i,1) === "a" || frase.substring(i,1) === "e" || frase.substring(i,1) === "i" || frase.substring(i,1) === "o" || frase.substring(i,1) === "u") {
document.write(frase.substring(i,1));
}
}