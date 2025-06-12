/**
 * Mi propia estructura de datos 
 */

class LimitedSet {
    constructor(limit) {
        this.limit = limit;
        this.arr = [];
    }

    add(elem) {
        if (this.arr.length < this.limit && !this.arr.includes(elem)) {
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
        this.arr = this.arr.filter(e => e !== elem);
    }
}

const l = new LimitedSet(3);
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