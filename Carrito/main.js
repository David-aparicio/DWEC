
import  Carrito from "./carrito.js"; /*Importo la clase carrito que he creado antes */

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

let totalcompra = 'Total: 0.00€';



  const totalTexto = document.createElement("p");
  totalTexto.textContent = totalcompra;
  resumenDiv.appendChild(totalTexto);




function actualizarResumen() {
  // Limpia el contenido anterior del resumen
  resumenDiv.innerHTML = '';

  let total = 0;


  carrito.products.forEach((producto, sku) => {

    if (producto.cantidad > 0) {
      const subtotal = producto.precio * producto.cantidad;
      total += subtotal;

      // Creo un elemento <p> para cada producto
      const linea = document.createElement('p');
      linea.textContent = `${producto.title} x${producto.cantidad} = ${subtotal.toFixed(2)} ${moneda}`;
      resumenDiv.appendChild(linea);
    }
  });

  
  const hr = document.createElement('hr');
  resumenDiv.appendChild(hr);


  const totalTexto = document.createElement('p');
  totalTexto.innerHTML = `Total: ${total.toFixed(2)} ${moneda}`;
  resumenDiv.appendChild(totalTexto);
}


function arrancar() {
  productMap.forEach((producto, sku) => {
    const tr = document.createElement("tr");

    // Columna nombre
    const tdNombre = document.createElement("td");
    tdNombre.textContent = producto.title;
    const tiSKU = document.createElement("p");
    tiSKU.textContent = producto.sku;
    tdNombre.appendChild(tiSKU);

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








