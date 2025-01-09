tecnologias = ["HTML", "CSS", "JavasScript", "Python"];
const [html, , javascript, python] = tecnologias;
// Destructoring
console.log(`Tecnologias: \n${html} \n${javascript} \n${python}`);

// Iterar
console.log("For");
for (let i = 0; i < tecnologias.length; i++) {
  console.log(`${i}. ${tecnologias[i]}`);
}

console.log("For of");
for (tecnologia of tecnologias) {
  console.log(`${tecnologia}`);
}

console.log("For of index");
for (const [i, tecnologia] of tecnologias.entries()) {
  console.log(`${i}. ${tecnologia}`);
}

console.log("For each");
tecnologias.forEach((tecnologia, i) => {
  console.log(`${i}. ${tecnologia}`);
});

console.log("Map/join");
tecnologiasConSaltos = tecnologias.map((tecnologia, i) => {
  return `\n${i}. ${tecnologia}`;
});
console.log(tecnologiasConSaltos.join());
