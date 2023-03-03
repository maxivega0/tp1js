//! 5.- Escribe un programa de tres líneas que pida un número, pida otro número y escriba el resultado de sumar estos dos números. Nota: Tener en cuenta la siguiente función: parseInt
//! https://developer.mozilla.org/es/docs/Web/JavaScript/Referencia/Objetos_globales/parseInt

const a = parseInt(prompt("Escriba el primer sumando"));
const b = parseInt(prompt("Escriba el segundo sumando"));
document.write(`El resultado de la suma es: ${a+b}`);