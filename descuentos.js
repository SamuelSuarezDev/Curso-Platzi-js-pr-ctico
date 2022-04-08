const precioOriginal = 150;
const descuento = 50;

const porcentajePrecioConDescuento = 100 - descuento;
const precioConDescuento = (precioOriginal * porcentajePrecioConDescuento) / 100;

console.log({
  precioOriginal,
  descuento,
  porcentajePrecioConDescuento,
  precioConDescuento,
})