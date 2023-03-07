//! 9.- Escribe un programa que pida una frase y escriba las vocales que aparecen
//! Nota: Tener en cuenta la función length y substring o charAt (developer mozilla)
//* string.length devuelve cantidad de caracteres
//* charAt(indice) obtiene un caracter
//* substring(desde,hasta) obtiene un caracter

let frase = prompt("Escriba una frase").toLowerCase();
// frase = frase.toLowerCase();
console.log(frase.length);
/*
//TODO Contemplando todos los casos
let i;
for (i = 0; i < frase.length; i++) {
if (frase.charAt(i) === "a" || frase.charAt(i) === "e" || frase.charAt(i) === "i" || frase.charAt(i) === "o" || frase.charAt(i) === "u") {
document.write(frase.charAt(i,1));
}
}*/
// solo contempla frases de 4 letras
// agua,hola, ej.

if (frase.length <= 4){
    if (frase.charAt(0) === "a" || frase.charAt(0) === "e" || frase.charAt(0) === "i" || frase.charAt(0) === "o" || frase.charAt(0) === "u") {
        document.write(frase.charAt(0));
        }if (frase.charAt(1) === "a" || frase.charAt(1) === "e" || frase.charAt(1) === "i" || frase.charAt(1) === "o" || frase.charAt(1) === "u") {
            document.write(frase.charAt(1));
            }if (frase.charAt(2) === "a" || frase.charAt(2) === "e" || frase.charAt(2) === "i" || frase.charAt(2) === "o" || frase.charAt(2) === "u") {
                document.write(frase.charAt(2));
                }if (frase.charAt(3) === "a" || frase.charAt(3) === "e" || frase.charAt(3) === "i" || frase.charAt(3) === "o" || frase.charAt(3) === "u") {
                    document.write(frase.charAt(3));
                    }else{
                        document.write("No contiene ninguna vocal la frase ingresada")
                    }
}else{
    alert("La palabra ingresada excede los caracteres a evaluar")
}