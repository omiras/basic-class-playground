/**
 * Mi propia estructura de datos 
 */

class LimitedArray {
    constructor(limit) {

    }

    add(elem) {

    }

    values() {

    }

    size() {

    }

    removeElement(elem) {
        
    }
}

const l = new LimitedArray(3);
console.log(l.size()); // 0
l.add("a");
l.add("b");
l.add("c");
l.add("d"); // Ignorado
console.log(l.size()); // 3
console.log(l.values()); // ["a", "b", "c"]
l.removeElement("b");
console.log(l.values()); // ["a", "c"]
l.add("gato");
console.log(l.values()); // ["a", "c", "gato"]