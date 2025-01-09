import defaultMultiplicar, { // Default export
  restarArrow,
  sumar as funcionSumar,
} from "./funciones_modulo.js";

console.log(`(Arrow) ${15} - ${5} = ${restarArrow(15, 5)}`);
console.log(`${15} + ${5} = ${funcionSumar(15, 5)}`);
console.log(`${15} * ${5} = ${defaultMultiplicar(15, 5)}`);

