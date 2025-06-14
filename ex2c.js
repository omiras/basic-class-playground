class Coche {
  constructor(marca, modelo) {
    this.marca = marca;
    this.modelo = modelo;
    this.gasolina = 5;
  }

  acelerar() {
    // Completar: resta 1 unidad de gasolina (si queda gasolina)
  }

  repostar() {
    // Completar: Vuelve a poner 5 unidades de gasolina al deposito
  } 

}

const miCoche = new Coche("Toyota", "Corolla");
miCoche.acelerar();
miCoche.acelerar();
miCoche.acelerar();
miCoche.acelerar();
miCoche.acelerar(); // Debería dejar gasolina en 0
miCoche.acelerar(); // La gasolina debería seguir siendo 0
console.log("Gasolina tras acelerar 6 veces:", miCoche.gasolina);
miCoche.repostar();
console.log("Gasolina tras repostar:", miCoche.gasolina);

// Resultado esperado: https://oscarm.tinytake.com/media/1777966?filename=1749755650108_TinyTake12-06-2025-05-58-20_638853407020501436_1749755650.png&sub_type=thumbnail_preview&type=attachment&width=795&height=117
