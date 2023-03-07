//! 11.- Añadir al ejercicio anterior que nos diga por cuál de los cuatro es divisible (hay que decir todos por los que es divisible)
const num = parseInt(prompt("Escriba un numero"));

switch (num) {
    case num:
        if(num % 2 === 0){
            document.write(`El numero ${num} es divisible en 2.<br>`);
        }
    case num:
        if(num % 3 === 0){
            document.write(`El numero ${num} es divisible en 3.<br>`);
        }
    case num:
        if(num % 5 === 0){
            document.write(`El numero ${num} es divisible en 5.<br>`);
        }
    case num:
        if(num % 7 === 0){
            document.write(`El numero ${num} es divisible en 7.<br>`);
        }
        break;
    default:
        document.write(`No es divisible por ningun caso`)
        break;
}