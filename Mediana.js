const valor1 = prompt("Inserta el valor 1");
const valor2 = prompt("Inserta el valor 2");
const valor3 = prompt("Inserta el valor 3");
const valor4 = prompt("Inserta el valor 4");
const valor5 = prompt("Inserta el valor 5");
const lista1 = [valor1, valor2, valor3, valor4, valor5];
function calcularMediaAritmetica(lista) {
  const sumaLista = lista.reduce(function (valorAcumulado = 0, nuevoElemento) {
    return valorAcumulado + nuevoElemento;
  });
  const promedioLista = sumaLista / lista.length;
  return promedioLista;
}
const mitadLista1 = parseInt(lista1.length / 2);
function esPar(numerito) {
  if (numerito % 2 === 0) {
    return true;
  } else {
    return false;
  }
}

let mediana;

if (esPar(lista1.length)) {
  const elemento1 = lista1[mitadLista1 - 1];
  const elemento2 = lista1[mitadLista1];

  const promedioElemento1y2 = calcularMediaAritmetica([elemento1, elemento2]);

  mediana = promedioElemento1y2;
} else {
  mediana = lista1[mitadLista1];
}
calcularMediaAritmetica(lista1);
console.log(mediana);
