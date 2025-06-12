# Clases JavaScript

## ex1.js

Resultado esperado:
<img src="https://oscarm.tinytake.com/media/1777803?filename=1749743627391_TinyTake12-06-2025-05-53-37_638853404266396722.png&sub_type=thumbnail_preview&type=attachment&width=1195&height=191" title="Powered by TinyTake Screen Capture"/><br><a href="https://www.tinytake.com">Powered by TinyTake Screen Capture</a>

## ex2c - Clase Coche

La clase `Coche` representa un coche con una marca, modelo y un nivel de gasolina. A continuación se describen los métodos a implementar:

## Métodos

### acelerar()
Resta 1 unidad de gasolina al coche cada vez que se llama.
- **Comportamiento:**
  - Si la gasolina es mayor que 0, se resta 1.
  - Si la gasolina es 0, no se puede acelerar más.


### repostar()
Rellena el depósito de gasolina al máximo (5).
- **Comportamiento:**
  - La gasolina vuelve a ser 5.

---

## Ejemplo de uso
```js
const miCoche = new Coche("Toyota", "Corolla");
miCoche.acelerar(); // gasolina: 4
miCoche.acelerar(); // gasolina: 3
miCoche.repostar(); // gasolina: 5
```

## ex3 : Creación de la clase Character

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

<img src="https://oscarm.tinytake.com/media/1777807?filename=1749743800981_TinyTake12-06-2025-05-56-38_638853405999741946.png&sub_type=thumbnail_preview&type=attachment&width=800&height=274" title="Powered by TinyTake Screen Capture"/><br><a href="https://www.tinytake.com">Powered by TinyTake Screen Capture</a>

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

# ex4-dificil.js - LimitedSet

La clase `LimitedSet` es una estructura de datos personalizada que almacena elementos únicos (sin repetidos) hasta un número máximo definido al crear la instancia.

## Métodos

### constructor(limit)
Crea una nueva instancia de `LimitedSet` con un límite máximo de elementos.
- **Parámetros:**
  - `limit` (number): Número máximo de elementos permitidos.

### add(elem)
Agrega un elemento al conjunto si no se ha alcanzado el límite y el elemento no existe ya en el conjunto.
- **Parámetros:**
  - `elem` (any): Elemento a agregar.
- **Comportamiento:**
  - Si el conjunto ya tiene el número máximo de elementos, o el elemento ya existe, el nuevo elemento es ignorado.

### values()
Devuelve un array con todos los elementos almacenados.
- **Retorna:**
  - `Array<any>`: Lista de elementos actuales.

### size()
Devuelve el número de elementos almacenados actualmente.
- **Retorna:**
  - `number`: Cantidad de elementos en el conjunto.

### removeElement(elem)
Elimina todas las ocurrencias de un elemento del conjunto (aunque solo puede haber una).
- **Parámetros:**
  - `elem` (any): Elemento a eliminar.
- **Comportamiento:**
  - Si el elemento no existe, no ocurre ningún cambio.

---

## Ejemplo de uso
```js
const l = new LimitedSet(3);
l.add("a");
l.add("b");
l.add("c");
l.add("d"); // Ignorado
l.add("a"); // Ignorado (ya existe)
console.log(l.values()); // ["a", "b", "c"]
l.removeElement("b");
console.log(l.values()); // ["a", "c"]
l.add("gato");
console.log(l.values()); // ["a", "c", "gato"]
```



