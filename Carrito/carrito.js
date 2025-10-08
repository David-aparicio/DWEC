
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
    this.price = parseFloat(price); // convierte string en número
    this.cantidad = 0;              // empezamos en 0
  }

  // getter para obtener el total (cantidad * precio)
  get total() {
    return this.cantidad * this.price;
  }
}



class Carrito {
  constructor(currency) { /*Pongo en el constructor solo la divisa ya que el carrito se crea sin productos inicialmente, luego añadire ya un metodo para añadir esos productos al carrito */
    this.currency = currency;
    this.products = new Map(); /*Voy a usar Map para que no haya productos repetidos, asi cuando añada  un producto solo aumente el valor de la cantidad
                                  La clave del map va a ser el SKU y el valor el producto */
  }



  registrarProducto(producto) { //Metodo para asegurarme de que el producto este dentro del carrito y gaurde la referencia del producto en el map
    if (!this.products.has(producto.sku)) { //Compruebo si el producto ya esta registrado en el map mirando con HAS que me devuelve un TRUE
      producto.cantidad = producto.cantidad || 0; //Me aseguro de que la cantidad siempre exista y empiece en 0 cuando reigistro uno nuevo 
      this.products.set(producto.sku, producto); //quedaria con el sku: 0001, y el producto. Con SET LO AÑADO 
    }
  }

  añadirProducto(producto) {
    this.registrarProducto(producto);
    producto.cantidad++; //Se suma a la variable cantidad que se inicia con el registrar producto 
  }

  quitarProducto(producto) {
  // Busco el producto en el Map usando su SKU
  const p = this.products.get(producto.sku);

  // Si no existe salgo sin hacer nada
  if (!p) return;

  // Si la cantidad es mayor que 0 resto una unidad
  if (p.cantidad > 0) {
    p.cantidad--;
  }

  
}


  calcularTotal() {
  let total = 0;

  
  for (const producto of this.products.values()) {// Recorremos todos los productos del carrito
    total += producto.cantidad * producto.price;   // Sumamos al total el precio multiplicado por la cantidad
  }
  // Devolvemos el total calculado
  return total;
}


}

export { Carrito, Producto };