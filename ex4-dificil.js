/**
 * Mi propia estructura de datos 
 */

class LimitedArray {
    constructor(limit) {
        this.limit = limit;
        this.arr = [];
    }

    add(elem) {
        if (this.arr.length < this.limit) {
            this.arr.push(elem);
        }
    }

    values() {
        return [...this.arr];
    }

    size() {
        return this.arr.length;
    }

    removeElement(elem) {
        const idx = this.arr.indexOf(elem);
        if (idx !== -1) {
            this.arr.splice(idx, 1);
        }
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