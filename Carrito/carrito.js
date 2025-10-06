
/*  
console.log("Moneda:", data.currency);



data.products.forEach((producto) => {
  console.log(
    `SKU: ${producto.SKU} | ${producto.title} - ${producto.price} ${data.currency}`
  );
});
*/

class Producto {
  constructor(sku, title, price) {
    this.sku = sku;
    this.title = title;
    this.price = parseFloat(price);
  }
}
class Carrito {
  constructor(currency) { /*Pongo en el constructor solo la divisa ya que el carrito se crea sin productos inicialmente, luego añadire ya un metodo para añadir esos productos al carrito */
    this.currency = currency;
    this.products = []; /*array de productos vacio pq inicialmente no hay nada*/
    this.total = 0; /*total del carrito inicialmente a 0 */
  }

  añadirProducto(nuevoProducto) {
    this.products.push(nuevoProducto);
    this.total += nuevoProducto.price; /*cada vez que añado un producto al carrito, el total se incrementa en el precio de ese producto */                
  }
  calcularTotal(){
    return this.total;
  }
  
  
}

export { Carrito, Producto };