
export default class Carrito {
  constructor() { /*Pongo en el constructor solo la divisa ya que el carrito se crea sin productos inicialmente, luego añadire ya un metodo para añadir esos productos al carrito */
    this.products = new Map(); /*Voy a usar Map para que no haya productos repetidos, asi cuando añada  un producto solo aumente el valor de la cantidad
                                 La clave del map va a ser el SKU y el valor el producto */
  }



  registrarProducto(sku,producto) { //Metodo para asegurarme de que el producto este dentro del carrito y gaurde la referencia del producto en el map

       //Me aseguro de que la cantidad siempre exista y empiece en 0 cuando reigistro uno nuevo
       
       if(producto.cantidad == 0){
        this.products.delete(sku);
       }else{
        this.products.set(sku, producto); //quedaria con el sku: 0001, y el producto. Con SET LO AÑADO 
       }
      
  }

}




