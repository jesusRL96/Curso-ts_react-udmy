// fetch
const url = "https://rickandmortyapi.com/api/character";
const url2 = "https://rickandmortyapi.com/api/location";
const url3 = "https://rickandmortyapi.com/api/episode";

fetch(url)
  .then((data) => {
    console.log(data);
    return data.json();
  })
  .then((data) => {
    console.log(data);
  });

const getData = async function (url) {
  const inicio = performance.now();
  const data = await fetch(url);
  const jsonData = await data.json();
  const fin = performance.now();
  return [jsonData, fin - inicio];
};
const getMultipleData1 = async function () {
	// 3 consultas, una tras otra
  const [dataJson1, t1] = await getData(url);
  const [dataJson2, t2] = await getData(url2);
  const [dataJson3, t3] = await getData(url3);
  return [[dataJson1, dataJson2, dataJson3], t1 + t2 + t3];
};

const getMultipleData2 = async function () {
	// Las consultas son paralelas y toma menos tiempo
  const inicio = performance.now();
  const [responseJson1, responseJson2, responseJson3] = await Promise.all([
    fetch(url),
    fetch(url2),
    fetch(url3),
  ]);
  const [dataJson1, dataJson2, dataJson3] = await Promise.all([
    responseJson1.json(),
    responseJson2.json(),
    responseJson3.json(),
  ]);
  const fin = performance.now();
  return [[dataJson1, dataJson2, dataJson3], fin - inicio];
};

const main = async () => {
  const [jsonData, tiempo] = await getData(url);
  console.log(jsonData);

	console.log("performance")
  const [dataJsonM1, tiempoM1] = await getMultipleData1();
  console.log(`tiempo Metodo 1: ${tiempoM1}ms`);
  const [dataJsonM2, tiempoM2] = await getMultipleData2();
  console.log(`tiempo Metodo 2: ${tiempoM2}ms`);
};

main();
