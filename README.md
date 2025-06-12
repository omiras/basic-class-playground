# Clases JavaScript

## ex3 : Creación de una clase simple

Modifica solamente el código dentro del bloque Class {}
Crea una clase de nombre Character

- La clase debe tener las propiedades name, attackPower, intelligence,hitPoints y level
- Todas las propiedades pueden ser inicializadas por el constructor, salvo la propiedad level, que siempre empieza a 0.

### Métodos en la clase

La clase Character tiene tres métodos

### levelUp

- El método no recibe argumentos.
- Incrementa en 1 el nivel del personaje.
- También debe incrementar en 1 el poder de ataque, la inteligencia y los puntos de vida del personaje.

#### receiveDamage

- El método receiveDamage tiene un argumento de tipo _number_.
- Simula el daño recibido por un persoaje.
- Resta el daño recibido al personaje cuando el método es invocado

#### isAlive

- El método isAlive no tiene argumentos.
- Retorna un _true_ si el personaje está vivo, y _false_ en caso contrario

---

# LimitedArray

`LimitedArray` es una clase personalizada que implementa una estructura de datos similar a un array, pero con un tamaño máximo limitado. A continuación se describen sus métodos:

## Métodos

### constructor(limit)
Crea una nueva instancia de `LimitedArray` con un límite máximo de elementos.
- **Parámetros:**
  - `limit` (number): Número máximo de elementos permitidos.

### add(elem)
Agrega un elemento al array si no se ha alcanzado el límite.
- **Parámetros:**
  - `elem` (any): Elemento a agregar.
- **Comportamiento:**
  - Si el array ya tiene el número máximo de elementos, el nuevo elemento es ignorado.

### values()
Devuelve un array con todos los elementos almacenados.
- **Retorna:**
  - `Array<any>`: Lista de elementos actuales.

### size()
Devuelve el número de elementos almacenados actualmente.
- **Retorna:**
  - `number`: Cantidad de elementos en el array.

### removeElement(elem)
Elimina la primera ocurrencia de un elemento del array.
- **Parámetros:**
  - `elem` (any): Elemento a eliminar.
- **Comportamiento:**
  - Si el elemento no existe, no ocurre ningún cambio.

---

## Ejemplo de uso
```js
const l = new LimitedArray(3);
l.add("a");
l.add("b");
l.add("c");
l.add("d"); // Ignorado
console.log(l.values()); // ["a", "b", "c"]
```

