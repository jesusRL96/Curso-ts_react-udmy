const producto = {
  nombre: "tablet",
  precio: 2000,
  disponible: true,
};

console.table(producto);
// const nombre = producto.nombre
const { nombre, disponible } = producto;
console.log(`${nombre} - ${disponible}`);

const objetoDisponible = { nombre, disponible };
console.log(objetoDisponible);

// manipulacion de objetos
producto.disponible = false; // actualizar propiedad
producto.imagen = "imagen.jpg"; // nueva propiedad
delete producto.precio; // eliminar propiedad
console.log(producto);

// Object.seal no permite agregar nuevas propiedades, pero si editarlas
Object.seal(producto);
producto.disponible = true;
producto.imagen2 = "imagen.jpg";
console.log(producto);

// Object.freeze no permite agregar nuevas propiedades ni editarlas
Object.freeze(producto);
producto.imagen = "nueva imagen.jpg"; // nueva propiedad
console.log(producto);

// Destrunctoring
const productoN = {
  nombre: "tablet",
  precio: 2000,
  disponible: true,
};
const clienteN = {
  nombre: "tablet",
  edad: 20,
  direccion: {
    calle: "Mexico",
  },
};
const { nombre: nombreProducto } = productoN;
const {
  nombre: nombreCliente,
  direccion: { calle },
} = clienteN;
console.log(`Producto: ${nombreProducto}`);
console.log(`Cliente: ${nombreCliente} Calle: ${calle}`);

// Unir objetos
console.log("unir objetos")
console.log({ ...productoN, ...clienteN });
console.log(Object.assign(productoN, clienteN));
