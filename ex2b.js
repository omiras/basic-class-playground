/**
 * Un objeto de la clase Set permite almacenar información en el formato clave->valor eliminando los duplicados
 * Como podemos apreciar mediante el uso de la palabra reservada 'new' creamos un objeto del tipo Set que tiene  como peculiaridad que almacena dicha lista sin repetidos https://javascript.info/map-set#set
 */

const miSet = new Set(["manzana", "pera", "manzana"]);
const lista = [...miSet]; // ... operador de spread

console.log(lista); // ["manzana", "pera"]


/**
 * Usa el Set adecuadamente dentro de la función para crear una función que dado un array, devuelve el mismo array sin repetidos
 * 
 * @param {array} arr 
 */

function removeDuplicates(arr) {
    // Completar: 1 o 2 línea de código
}

// 🧪 Pruebas
console.log(removeDuplicates([1, 2, 3, 2, 4, 1])); // [1, 2, 3, 4]
console.log(removeDuplicates(["a", "b", "a", "c"])); // ["a", "b", "c"]
console.log(removeDuplicates([true, false, true])); // [true, false]
console.log(removeDuplicates([])); // []
console.log(removeDuplicates(["pera", "pera", "pera"])); // ["pera"]
