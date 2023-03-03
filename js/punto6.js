//! 6.- Escribe un programa que pida dos números y escriba en la pantalla cual es el mayor.

const a = parseInt(prompt("Escriba el primer numero"));
const b = parseInt(prompt("Escriba el segundo numero"));
if(a > b){
    document.write(`El numero ${a} es el mayor.`)
}else{
    document.write(`El numero ${b} es el mayor.`)
}