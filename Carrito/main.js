import { Carrito, Producto } from "./carrito.js";

document.addEventListener("DOMContentLoaded", () => {
  // Referencias al DOM
  const tbody = document.querySelector("#contenedorCarrito tbody");
  const resumenDiv = document.querySelector("#contenedorTotal .resumen");

  // Cargar datos desde la API
  fetch("http://localhost:8080/api/carrito")
    .then((response) => response.json())
    .then((data) => {
      




      // Crear el carrito con la moneda recibida
      const carrito = new Carrito(data.currency);

      // Crear texto inicial del total
      const totalTexto = document.createElement("p");
      totalTexto.textContent = `Total: 0.00 ${data.currency}`;
      resumenDiv.appendChild(totalTexto);

      

      // Insertar productos en la tabla
      data.products.forEach((p) => {
        const producto = new Producto(p.sku, p.title, p.price);
        carrito.registrarProducto(producto);

        // Crear fila
        const tr = document.createElement("tr");

        // Columna: Nombre
        const tdNombre = document.createElement("td");
        tdNombre.textContent = producto.title;

        // Columna: Botones de cantidad
        const tdBotones = document.createElement("td");

        const btnRestar = document.createElement("button");
        btnRestar.textContent = " - ";
        btnRestar.classList.add("restarBtn");
        btnRestar.disabled = true;

        const cajita = document.createElement("input");
        cajita.type = "number";
        cajita.readOnly = true;
        cajita.value = producto.cantidad;
        cajita.classList.add("cajita");

        const btnSumar = document.createElement("button");
        btnSumar.textContent = " + ";
        btnSumar.classList.add("sumarBtn");

        tdBotones.append(btnRestar, cajita, btnSumar);

        // Columna: Precio unitario
        const tdUnitario = document.createElement("td");
        tdUnitario.textContent = `${producto.price.toFixed(2)} ${data.currency}`;

        // Columna: Precio total por fila
        const tdPfila = document.createElement("td");
        tdPfila.textContent = `${producto.total.toFixed(2)} ${carrito.currency}`;

        // Insertar columnas en la fila
        tr.append(tdNombre, tdBotones, tdUnitario, tdPfila);
        tbody.appendChild(tr);

        // Función para actualizar una fila específica
        function actualizarFila() {
          cajita.value = producto.cantidad;
          tdPfila.textContent = `${producto.total.toFixed(2)} ${carrito.currency}`;
          btnRestar.disabled = producto.cantidad === 0;
          actualizarResumen();
        }

        // Botones más y menos
        btnRestar.addEventListener("click", () => {
          carrito.quitarProducto(producto);
          actualizarFila();
        });

        btnSumar.addEventListener("click", () => {
          carrito.añadirProducto(producto);
          actualizarFila();
        });
      });
    })
    .catch((error) => console.error("Error al cargar el carrito:", error));

     function actualizarResumen() {
    resumenDiv.innerHTML = '';

    for (const producto of carrito.productsMap.values()) {
      if (producto.cantidad > 0) {
        const div = document.createElement('div');
        div.textContent = `${producto.title} x ${producto.cantidad}`;
        resumenDiv.appendChild(div);
      }
    }

    const totalTexto = document.createElement('p');
    totalTexto.style.fontWeight = 'bold';
    totalTexto.style.fontSize = '30px';
    totalTexto.textContent = `Total: ${carrito.calcularTotal().toFixed(2)} ${carrito.currency}`;
    resumenDiv.appendChild(totalTexto);
  }

  });
