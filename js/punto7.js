//! 7.- Escribe un programa que pida 3 números y escriba en la pantalla el mayor de los tres.

const a = parseInt(prompt("Escriba el primer numero"));
const b = parseInt(prompt("Escriba el segundo numero"));
const c = parseInt(prompt("Escriba el tercer numero"));

if (a > b && a > c) {
    document.write(`El numero ${a} es el mayor.`);
}else if (b > a && b > c) {
    document.write(`El numero ${b} es el mayor.`);
} else if (c > a && c > b) {
    document.write(`El numero ${c} es el mayor.`);
}else{
    document.write(`Los numeros ingresados son iguales`);
}