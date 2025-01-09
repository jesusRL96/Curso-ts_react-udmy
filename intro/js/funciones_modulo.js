export function sumar(numero1 = 0, numero2 = 0) {
  console.log(`${numero1} + ${numero2} = ${numero1 + numero2}`);
}

export const restar = function (numero1 = 0, numero2 = 0) {
  console.log(`${numero1} - ${numero2} = ${numero1 - numero2}`);
};

export const restarArrow = (numero1, numero2) => numero1 + numero2;

export default function multiplicar(n1, n2) {
  // Solo un export default por modulo
  return n1 * n2;
}
// export { restar, sumar, restarArrow };		// Alternativa para exportar
