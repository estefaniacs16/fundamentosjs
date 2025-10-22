// funcion habitual
/*function sumar (a, b){
    return a + b;
}*/

//declarar la funcion a una constante
/*const sumar = function(a, b){
    return a + b;
}*/

//funcion flecha 
/*const sumar = (a, b) => {
    return a + b;
}*/

//cuando dentro del cuerpo solo existe una instrccion
const sumar = (a, b) => a + b;

//Ejercicio
/*const saludar  = (nombre) =>{
    return  `hola ${nombre}`
    //que salude al nombre que reciba
}*/

/*console.log (saludar("Valeria"))*/

const saludar = (nombre) => `hola ${nombre}`;
console.log (saludar("Valeria"))
