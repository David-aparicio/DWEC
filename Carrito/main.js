
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


function arrancar(){

  productMap.forEach((producto, sku) => {
    


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
    tdUnitario.textContent = producto.price;
    





    //Columna Precio Total de la fila 
    const tdPfila = document.createElement("td");
    tdPfila.textContent = cajita.value * (producto.price).valueAsNumber;







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
      
        const producto = {
          sku: "",
          titulo:"",
          precio:"",
          cantidad:""
        }

        cajita.value--;

        if(cajita.value <=0){
          cajita.value = 0;
        }

        producto.sku = sku;
        producto.title = tdNombre.textContent;
        producto.precio = tdUnitario.textContent;
        producto.cantidad = cajita.value;

        carrito.registrarProducto(sku, producto);
        totalcompra -= producto.precio;
      }

    );


    btnSumar.addEventListener('click', () => {
      const producto = {
          sku: "",
          titulo:"",
          precio:"",
          cantidad:""
        }

        cajita.value++;

        producto.sku = sku;
        producto.title = tdNombre.textContent;
        producto.precio = tdUnitario.textContent;
        producto.cantidad = cajita.value;

        carrito.registrarProducto(sku, producto);
        totalcompra += producto.precio;


    });



  });






}





  // Inserto productos en la tabla
  