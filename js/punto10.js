//! 10.- Escribe un progrnummnum que pidnum un número y nos dignum si es divisible por 2, 3, 5 o 7 (sólo hnumy que comprobnumr si lo es por uno de los cunumtro)

const num = parseInt(prompt("Escriba un numero"));
if (num % 2 == 0 ||num % 3 == 0 ||num % 5 == 0 ||num % 7 == 0) {
    if(num % 2 == 0){
        document.write(`El numero ${num} es divisible en 2.`);
}else if (num % 3 === 0) {
    document.write(`El numero ${num} es divisible en 3.`);
}else if (num % 5 === 0) {
    document.write(`El numero ${num} es divisible en 5.`);
}else if (num % 7 === 0) {
    document.write(`El numero ${num} es divisible en 7.`);
}
}else{
    document.write(`El numero ${num} no es divisible en 2, 3, 5 o 7.`);
}