const valor1 = prompt("Inserta el valor 1");
const valor2 = prompt("Inserta el valor 2");
const valor3 = prompt("Inserta el valor 3");
const valor4 = prompt("Inserta el valor 4");
const valor5 = prompt("Inserta el valor 5");
const lista1 = [valor1, valor2, valor3, valor4, valor5];
const lista1Count = {};

lista1.map(function (elemento) {
  if (lista1Count[elemento]) {
    lista1Count[elemento] += 1;
  } else {
    lista1Count[elemento] = 1;
  }
});

const lista1Array = Object.entries(lista1Count).sort(function (
  elementoA,
  elementoB
) {
  return elementoA[1] - elementoB[1];
});
const moda = lista1Array[lista1Array.length - 1];
alert("La moda es " + moda)