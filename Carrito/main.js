import { data } from "./objetos.js";
import { Carrito, Producto } from "./carrito.js"; /*Importo la clase carrito y producto que he creado antes */


document.addEventListener("DOMContentLoaded", () => {
  const tbody = document.querySelector("#contenedorCarrito tbody");
  const resumenDiv = document.querySelector("#contenedorTotal .resumen");

const carrito = new Carrito(data.currency); /*Creo el constructor carrito y lo relleno con currency pq de momento no hay productos */



  //  Crear solo una etiqueta <p> para el total del carrito
  const totalTexto = document.createElement("p");
  totalTexto.textContent = `Total: 0.00 ${data.currency}`;
  resumenDiv.appendChild(totalTexto);

  // Función para actualizar el total general del carrito
  function actualizarResumen() {
    totalTexto.textContent = `Total: ${carrito.calcularTotal().toFixed(2)} ${carrito.currency}`;
  }


  // Inserto productos en la tabla
  data.products.forEach((p) => {
    const producto = new Producto(p.SKU, p.title, p.price);

  carrito.registrarProducto(producto);

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
    cajita.value = producto.cantidad;
    cajita.classList.add("cajita");
    tdBotones.appendChild(cajita);



    const btnSumar = document.createElement("button");
    btnSumar.textContent = " + ";
    btnSumar.classList.add("sumarBtn");
    tdBotones.appendChild(btnSumar);





    //Columna Precio Unidad
    const tdUnitario = document.createElement("td");
    tdUnitario.textContent = `${producto.price.toFixed(2)} ${data.currency}`;





    //Columna Precio Total de la fila 
    const tdPfila = document.createElement("td");
    tdPfila.textContent = `${producto.total.toFixed(2)}${carrito.currency}`;







    // Insertar columnas en la fila
    tr.append(tdNombre, tdBotones, tdUnitario, tdPfila);



    tbody.appendChild(tr);




    function actualizarFila() {
      cajita.value = producto.cantidad;
      tdPfila.textContent = `${producto.total.toFixed(2)} ${carrito.currency}`;
      btnRestar.disabled = producto.cantidad === 0;
      actualizarResumen();
    }

    btnRestar.addEventListener("click", () => {
      carrito.quitarProducto(producto);
      actualizarFila();
      }

    );


    btnSumar.addEventListener('click', () => {
      carrito.añadirProducto(producto);
      actualizarFila()
    });



  });

});


