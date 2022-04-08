const colombia = [];
colombia.push({
  name: "Camila",
  salary: 500,
});
colombia.push({
  name: "Nath",
  salary: 1500,
});
colombia.push({
  name: "Luisa",
  salary: 1800,
});
colombia.push({
  name: "Laura",
  salary: 1000,
});
colombia.push({
  name: "Daniela",
  salary: 2200,
});
colombia.push({
  name: "Esperancita",
  salary: 200,
});
colombia.push({
  name: "Carla",
  salary: 500,
});
colombia.push({
  name: "Antonieta",
  salary: 1500,
});
colombia.push({
  name: "Samuel",
  salary: 1300,
});
colombia.push({
  name: "Ana",
  salary: 2400,
});
colombia.push({
  name: "Julia",
  salary: 3400,
});
colombia.push({
  name: "Daniel",
  salary: 400,
});
colombia.push({
  name: "AngÃ©lica",
  salary: 400,
});
colombia.push({
  name: "Tatiana",
  salary: 400,
});
colombia.push({
  name: "Lorena",
  salary: 600,
});
colombia.push({
  name: "Carolina",
  salary: 1600,
});
colombia.push({
  name: "Fernanda",
  salary: 2600,
});
colombia.push({
  name: "Nora",
  salary: 1000,
});
colombia.push({
  name: "Gisselle",
  salary: 2000,
});
colombia.push({
  name: "Bill Gates",
  salary: 100000000,
});

//reto

const ADA = [];

ADA.push({
  date: "27/06/2021",
  price: 1.2626,
});

ADA.push({
  date: "26/06/2021",
  price: 1.2516,
});

ADA.push({
  date: "25/06/2021",
  price: 1.2547,
});

ADA.push({
  date: "24/06/2021",
  price: 1.357,
});

ADA.push({
  date: "23/06/2021",
  price: 1.2505,
});

ADA.push({
  date: "22/06/2021",
  price: 1.1519,
});

ADA.push({
  date: "20/06/2021",
  price: 1.1757,
});

ADA.push({
  date: "21/06/2021",
  price: 1.4268,
});

// console.log(ADA)

// const calcPromedioMovil = list =>{
//     let promedioMovil = 0

//     for (let i = 0; i < list.length; i++){
//         if(i == 0){
//             promedioMovil = (parseInt(list[i])).toFixed(1)
//         }else{
//             promedioMovil = ((parseInt(list[i]) + parseInt(list[i-1]))/2).toFixed(1)
//         }
//         console.log(promedioMovil)
//     }
//     return promedioMovil
// }

const calcularMediaArtimetica = (lista) => {
  const sumaLista = lista.reduce(
    //suma cada uno de los elementos
    function (valorAcumulado = 0, nuevoElemento) {
      //Valor acumulado es lo que se vaya sumando en cada una de las iteraciones dentro del array, = 0 es lo que se le pone por defecto
      return valorAcumulado + nuevoElemento;
    }
  );

  const promedioLista = sumaLista / lista.length;
  return promedioLista;
};

const calculateMedian = (list) => {
  let median = list;
  median = median.sort(function (a, b) {
    return a - b;
  });
  let half = list.length / 2;
  if (list.length % 2 != 0) {
    let medianUnPar = median;
    medianUnPar = medianUnPar[Math.floor(half)];
    return medianUnPar;
  } else {
    let medianValue1 = median;
    let medianValue2 = median;
    medianValue1 = medianValue1[Math.floor(half - 0.01)];
    medianValue2 = medianValue2[Math.ceil(half)];
    let medianPar = (medianValue1 + medianValue2) / 2;
    return medianPar;
  }
};

// let result = calculateMedian(list2)

// console.log(calcularMediaArtimetica ([5,10, 15]))

// calcPromedioMovil(list4)

//Ordenando el array

const listOfPrices = ADA.map(function (ADA) {
  return ADA.price;
});
// console.log(listOfPrices)
// const listOfPricesSort = listOfPrices.sort(function(a,b){return a-b})
const listOfPricesSortArrow = listOfPrices.sort((x = (a, b) => a - b));
// console.log(listOfPrices)
// console.log(listOfPricesSortArrow)

const listOfPricesMedian = calculateMedian(listOfPricesSortArrow);
console.log(
  `La mediana de precios para el periodo seleccionado es de ${listOfPricesMedian}`
);

const listOfPricesMediaAritmetica =
  calcularMediaArtimetica(listOfPrices).toFixed(2);
console.log(
  `El precio promedio para el periodo seleccionado es de  ${listOfPricesMediaAritmetica}`
);

const maxiumPriceOf = listOfPricesSortArrow[listOfPricesSortArrow.length - 1];
const maxiumPriceOfDate = ADA.filter(
  ({ price }) => price === maxiumPriceOf
).map((x = (maxiumPriceOfDate) => maxiumPriceOfDate.date));

const mininumPriceOf = listOfPricesSortArrow[0];
const mininumPriceOfDate = ADA.filter(
  ({ price }) => price === mininumPriceOf
).map((x = (mininumPriceOfDate) => mininumPriceOfDate.date));

// console.log (maxiumPriceOfAdaDate)

console.log(
  `El precio mas alto para ADA en el periodo seleccionado fue de ${maxiumPriceOf} el ${maxiumPriceOfDate}`
);
console.log(
  `El precio mas bajo para ADA en el periodo seleccionado fue de ${mininumPriceOf} el ${mininumPriceOfDate}`
);
