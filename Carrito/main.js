
import  Carrito from "./carrito.js"; /*Importo la clase carrito y producto que he creado antes */

const productMap = new Map();
let moneda = "";

document.addEventListener("DOMContentLoaded", () => {

  fetch('http://localhost:8080/api/carrito')
    .then(response => response.json())
    .then(data =>{
      moneda = data.currency;
      data.products.forEach(producto =>{
        productMap.set(producto.sku, producto);
    })
      arrancar();

    });
    
  });

  const tbody = document.querySelector("#contenedorCarrito tbody");
  const resumenDiv = document.querySelector("#contenedorTotal .resumen");

const carrito = new Carrito(); /*Creo el constructor carrito y lo relleno con currency pq de momento no hay productos */

let totalcompra = 0;


  //  Crear solo una etiqueta <p> para el total del carrito
  const totalTexto = document.createElement("p");
  totalTexto.textContent = totalcompra;
  resumenDiv.appendChild(totalTexto);




function actualizarResumen() {
  // Limpiar resumen
  resumenDiv.innerHTML = '';

  // Mostrar cada producto con cantidad > 0
  carrito.products.forEach(producto => {
    if (producto.cantidad > 0) {
      const div = document.createElement('div'); // div para cada producto
      div.textContent = `${producto.title} x ${producto.cantidad}`;
      resumenDiv.appendChild(div); // añadir al resumen
    }
  });

  // Mostrar total general al final
  const totalTexto = document.createElement('p');
  totalTexto.style.fontWeight = 'bold'; // opcional, resaltar total
  totalTexto.style.fontSize = '30px';
  totalTexto.textContent = `Total: ${carrito.calcularTotal().toFixed(2)} ${carrito.currency}`;
  resumenDiv.appendChild(totalTexto);
}

function arrancar() {
  productMap.forEach((producto, sku) => {
    const tr = document.createElement("tr");

    // Columna nombre
    const tdNombre = document.createElement("td");
    tdNombre.textContent = producto.title;

    // Columna botones
    const tdBotones = document.createElement("td");

    const btnRestar = document.createElement("button");
    btnRestar.textContent = " - ";
    btnRestar.classList.add("restarBtn");
    tdBotones.appendChild(btnRestar);

    const cajita = document.createElement("input");
    cajita.type = "number";
    cajita.readOnly = true;
    cajita.value = 0;
    cajita.classList.add("cajita");
    tdBotones.appendChild(cajita);

    const btnSumar = document.createElement("button");
    btnSumar.textContent = " + ";
    btnSumar.classList.add("sumarBtn");
    tdBotones.appendChild(btnSumar);

    // Columna precio unitario
    const tdUnitario = document.createElement("td");
    const precioUnitario = parseFloat(producto.price);
    tdUnitario.textContent = `${precioUnitario.toFixed(2)} ${moneda}`;

    // Columna precio total de la fila
    const tdPfila = document.createElement("td");
    tdPfila.textContent = "0.00 " + moneda;

    // Insertar columnas
    tr.append(tdNombre, tdBotones, tdUnitario, tdPfila);
    tbody.appendChild(tr);

    // --- EVENTOS ---
    btnRestar.addEventListener("click", () => {
      let cantidad = parseInt(cajita.value);
      if (cantidad > 0) cantidad--;
      cajita.value = cantidad;

      carrito.registrarProducto(sku, {
        sku,
        title: producto.title,
        precio: precioUnitario,
        cantidad: cantidad
      });

      // Actualizar precio total de la fila
      const totalFila = cantidad * precioUnitario;
      tdPfila.textContent = totalFila.toFixed(2) + " " + moneda;

      actualizarResumen();
    });

    btnSumar.addEventListener("click", () => {
      let cantidad = parseInt(cajita.value);
      cantidad++;
      cajita.value = cantidad;

      carrito.registrarProducto(sku, {
        sku,
        title: producto.title,
        precio: precioUnitario,
        cantidad: cantidad
      });

      // Actualizar precio total de la fila
      const totalFila = cantidad * precioUnitario;
      tdPfila.textContent = totalFila.toFixed(2) + " " + moneda;

      actualizarResumen();
    });
  });
}












  // Inserto productos en la tabla
  