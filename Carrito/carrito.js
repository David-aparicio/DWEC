import { data } from "./objetos.js";



  
console.log("Moneda:", data.currency);



data.products.forEach((producto) => {
  console.log(
    `SKU: ${producto.SKU} | ${producto.title} - ${producto.price} ${data.currency}`
  );
});



function 