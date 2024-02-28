// ejercicio 1 
console.log("--EJERCICIO 1--")
function parOimpar (numero){
    if (numero % 2 === 0) {
        console.log("El número " + numero + " es par.");
    } else { 
        console.log("El numero " + numero + " es impar.");
    }
}
parOimpar(2)
parOimpar(3)

// ejercicio 2
console.log("--EJERCICIO 2--")
function mayorOmenor (numero1, numero2){
    if (numero1 > numero2){
        console.log(numero1 + " es mayor que " + numero2);
    } else if (numero2 > numero1) {
        console.log(numero2 + " es mayor que " + numero1);
    } else {
        console.log(numero1 + " y " + numero2 + " son iguales.");
    }
}
mayorOmenor(80, 70);
mayorOmenor(50, 70);
mayorOmenor(50, 50)

// ejercicio 3
console.log("--EJERCICIO 3--")
function multiplo (numero){
    if (numero % 5 === 0) {
        console.log("el número " + numero + " es multiplo de 5")
    } else {
        console.log("el número " + numero + " no es multiplo de 5")
    }
}
multiplo(3)
multiplo(20)

// ejercicio 4
console.log("--EJERCICIO 4--")
function imprimirNumerosHasta(numero = 10) {
    for (let i = 0; i <= numero; i++) {
        console.log(i);
    }
}
imprimirNumerosHasta();

// ejercicio 5 
console.log("--EJERCICIO 5--")
function imprimir_numero (palabra, numero){
    for (let i = 0; i < numero; i++) {
        console.log(palabra)
    }
}
const palabra = "probando";
const numero = "10";
imprimir_numero(palabra, numero)

// ejercicio 6
console.log("--EJERCICIO 6--")
function imprimirArray(miArray) {

    for (let i = 0; i < frutas.length; i++){
        console.log(frutas[i])
    }
}
const frutas = ["Manzana", "Banana", "Naranja"];
imprimirArray(frutas);


// ejercicio 7
console.log("--EJERCICIO 7--")
function NoImprimirQuinto (numeroArray){
    for (let i = 0; i < numeroArray.length; i++) {
        if (i !== 4) {
            console.log(NoQuinto[i]);
        }
    }
}
const NoQuinto = [1, 2, 3, 4, 5, 6, 7, 8, 9, 10];
NoImprimirQuinto(NoQuinto);

// ejercicio 8
console.log("--EJERCICIO 8--")
function arrayMultiplicado(array, multiplicador) {
    for (let i = 0; i < array.length; i++) {
        const resultado = array[i] * multiplicador;
        console.log(`El número ${array[i]} multiplicado por ${multiplicador} es igual a ${resultado}`);
    }
}
const numeros = [1, 2, 3, 4, 5];
const multiplicador = 3;
arrayMultiplicado(numeros, multiplicador);
