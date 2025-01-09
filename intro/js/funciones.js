sumar(10 + 30);
sumar(55);

// Funciones
function sumar(numero1 = 0, numero2 = 0) {
  console.log(`${numero1} + ${numero2} = ${numero1 + numero2}`);
}

// Function Expression
// restar(10, 5); // en function expression (como con las variables) deben usarse despues de definirlas
const restar = function (numero1 = 0, numero2 = 0) {
  console.log(`${numero1} - ${numero2} = ${numero1 - numero2}`);
};
restar(10, 5);

const restarArrow = (numero1, numero2) => numero1 + numero2;
console.log(`(Arrow) ${15} - ${5} = ${restarArrow(15, 5)}`);
