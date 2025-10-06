import { data } from "./objetos.js";
import { Carrito, Producto } from "./carrito.js"; /*Importo la clase carrito y producto que he creado antes */

const carrito = new Carrito(data.currency); /*Creo el constructor carrito y lo relleno con currency pq de momento no hay productos */


/*Debo hacerlo mejor con map que for each pq necesito generar un array de productos limpio que lo puedo usar para sumar los 
productos o mostrarlos  */


/* ns si esta bien pero algo asi seria con map -- */
/*
carrito.products = data.products.map(function(p) {
  return new Producto(p.SKU, p.title, p.price);
});
*/

//data.products.forEach(function(p) {                                                      /**Uso el forEachh temporalmente pq me he dado cuenta que lo tengo que hacer con map pq luego pa sumar va a ser una liada */
//carriton.añadirProducto(new Producto(p.SKU, p.title, p.price));                        /**Preguntar a anuar pq el price me lo devuelve como un String */
//});







document.addEventListener("DOMContentLoaded", () => {
  const tbody = document.querySelector("#contenedorCarrito tbody");
  const resumenDiv = document.querySelector("#contenedorTotal .resumen");


  
  //  Crear solo una etiqueta <p> para el total del carrito
  const totalTexto = document.createElement("p");
  totalTexto.textContent = `Total: 0 ${data.currency}`;
  resumenDiv.appendChild(totalTexto);

  // Función para actualizar el total general del carrito
  function actualizarResumen() {
    totalTexto.textContent = `Total: ${carrito.calcularTotal().toFixed(2)} ${data.currency}`;
  }
  

  


  // Inserto productos en la tabla
  data.products.forEach((p) => {
    const producto = new Producto(p.SKU, p.title, p.price);



    // Fila del producto disponible
    const tr = document.createElement("tr");




    // Columna nombre
    const tdNombre = document.createElement("td");

    tdNombre.textContent = producto.title;





    // Columna botón 
    const tdBotones = document.createElement("td");





    const btnRestar = document.createElement("button");
    btnRestar.textContent = " - ";
    btnRestar.classList.add("restarBtn");
    btnRestar.disabled = true;
    tdBotones.appendChild(btnRestar);





    const cajita = document.createElement("input");
    cajita.type = "number";
    cajita.readOnly = true;
    cajita.defaultValue = 0;
    cajita.classList.add("cajita");
    tdBotones.appendChild(cajita);



    const btnSumar = document.createElement("button");
    btnSumar.textContent = " + ";
    btnSumar.classList.add("sumarBtn");
    tdBotones.appendChild(btnSumar);





    //Columna Precio Unidad
    const tdUnitario = document.createElement("td");
    tdUnitario.textContent = `${producto.price} ${data.currency}`;





    //Columna Precio Total de la fila 
    const tdPfila = document.createElement("td");
    if (Number(cajita.value) === 0) {
      tdPfila.textContent = `0${data.currency}`
    }







    // Insertar columnas en la fila
    tr.append(tdNombre, tdBotones, tdUnitario, tdPfila);



    tbody.appendChild(tr);




    function actualizarTotal() {
      const cantidad = Number(cajita.value);
      const totalCalculado = cantidad * p.price;
      tdPfila.textContent = `${totalCalculado.toFixed(2)}${data.currency}`; //tofixed 2 para dos decimales
    }

    btnRestar.addEventListener("click", () => {
      if (Number(cajita.value) > 0) {
        cajita.value--;
        actualizarTotal();
        actualizarResumen();
        if (Number(cajita.value) === 0) {
          btnRestar.disabled = true;
        }

      }

    });


    btnSumar.addEventListener('click', () => {

      cajita.value++;
      btnRestar.disabled = false;
      actualizarTotal();
      carrito.añadirProducto(producto); /*Cada vez que se pulsa el boton de sumar, se añade el producto al carrito */
      actualizarResumen();
    });



  });

});


