// Interactuando con JavaScript desde HTML

console.group("Cuadrados");

function perimetroCuadrado(lado) {
  return lado * 4;
}

function areaCuadrado(lado) {
  return lado * lado;
}

console.groupEnd();

console.group("Circulos");

function diametroCirculo(radio) {
  return radio * 2;
}

const PI = Math.PI;

function perimetroCirculo(radio) {
  const diametro = diametroCirculo(radio);
  return diametro * PI;
}

function areaCirculo(radio) {
  return radio * radio * PI;
}

console.groupEnd();

console.group("Triangulos");

function perimetroTriangulo(lado1, lado2, base) {
  return lado1 + lado2 + base;
}

function areaTriangulo(base, altura) {
  return (base * altura) / 2;
}

console.groupEnd();

// Aqui interactuamos con el HTML

// Cuadrados
function calcularPerimetroCuadrado() {
  const input = document.getElementById("inputCuadrado");
  const value = input.value;
  const perimetro = perimetroCuadrado(value);

  alert("El perimetro es: " + perimetro + "cm");
}

function calcularAreaCuadrado() {
  const input = document.getElementById("inputCuadrado");
  const value = input.value;
  const area = areaCuadrado(value);

  alert("El área es: " + area + "cm2");
}

// Triángulos
function calcularPerimetroTriangulo() {
  const inputLado1 = document.getElementById("inputTriangulo1");
  const inputLado2 = document.getElementById("inputTriangulo2");
  const inputBase = document.getElementById("inputTriangulo3");
  const valueLado1 = Number(inputLado1.value);
  const valueLado2 = Number(inputLado2.value);
  const valueBase = Number(inputBase.value);

  const perimetro = perimetroTriangulo(valueLado1, valueLado2, valueBase);

  alert("El perimetro es: " + perimetro + "cm");
}

function calcularAreaTriangulo() {
  const inputBase = document.getElementById("inputTriangulo3");
  const inputAltura = document.getElementById("inputTriangulo4");
  const valueBase = inputBase.value;
  const valueAltura = inputAltura.value;
  const area = areaTriangulo(valueBase, valueAltura);

  alert("El área es: " + area + "cm2");
}
function calcularAltura(lado1, lado2, base) {
  if (lado1 === lado2 && lado1 != base && lado2 != base) {
    console.log("Si es un triángulo isósceles");
    const altura = Math.sqrt(lado1 * lado2 - ((base / 2) * base) / 2);
    console.log(altura);
  } else {
    console.log("No es un triángulo isósceles");
  }
}
calcularAltura();
