import { data } from "./objetos.js";
import { Carrito, Producto } from "./carrito.js"; /*Importo la clase carrito y producto que he creado antes */

const carrito = new Carrito(data.currency); /*Creo el constructor carrito y lo relleno con currency pq de momento no hay productos */


/*Debo hacerlo mejor con map que for each pq necesito generar un array de productos limpio que lo puedo usar para sumar los 
productos o mostrarlos  */


/* ns si esta bien pero algo asi seria con map -- 
carrito.products = data.products.map(function(p) {
return new Product(p.SKU, p.title, p.price);
});*/

data.products.forEach(function(p) { /**Uso el forEachh temporalmente pq me he dado cuenta que lo tengo que hacer con map pq luego pa sumar va a ser una liada */
  carrito.añadirProducto(new Producto(p.SKU, p.title, p.price)); /**Preguntar a anuar pq el price me lo devuelve como un String */
});
console.log(carrito);