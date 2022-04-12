const valor1 = prompt("Inserta el valor 1");
const valor2 = prompt("Inserta el valor 2");
const valor3 = prompt("Inserta el valor 3");
const valor4 = prompt("Inserta el valor 4");
const valor5 = prompt("Inserta el valor 5");
function calcularMediaAritmetica(lista) {
  let sumaLista = 0;
  for (let i = 0; i < lista.length; i++) {
    sumaLista = sumaLista + lista[i];
  }
  const promedioLista = sumaLista / lista.length;
  alert("El promedio es " + promedioLista);
}
calcularMediaAritmetica(valor1, valor2, valor3, valor4, valor5);
