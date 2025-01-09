let cliente;
console.log(`${cliente} (${typeof cliente})`); // undefined
cliente = null;
console.log(`${cliente} (${typeof cliente})`); // null
// string
cliente = "jesus";
console.log(`${cliente} (${typeof cliente})`);
// numeric
numero = 40.4;
console.log(`${numero} (${typeof numero})`);
// BigInt
numeroGrande = BigInt(40000000000000000000000000000000000000000000000000000);
console.log(`${numeroGrande} (${typeof numeroGrande})`);
// boolean
boolean = true;
console.log(`${boolean} (${typeof boolean})`);

// Symbol
const primerSymbol = Symbol(30);
const segundoSymbol = Symbol(30);
console.log(`${primerSymbol.toString()} (${typeof primerSymbol})`);
console.log(primerSymbol == segundoSymbol);
