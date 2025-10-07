//1. Variables

const carrito = document.querySelector('#carrito');
const contenedorCarrito = document.querySelector('#lista-carrito tbody')
const vaciarCarritoBtn = document.querySelector('#vaciar-carrito')
const contenido = document.querySelector('#listado-productos')

// 5. Se define la variable articulosCarrito
let articulosCarrito = [];

/* ------------------------------------------------------------------ */

// 2. Registrar los addEventListener

cargarEventListener()
function cargarEventListener() {
    contenido.addEventListener('click', agregarProducto)

}

/* ------------------------------------------------------------------- */

// 3. Definir funciones

// Funciones 
// 3. Al presionar el boton de agregar carrito obtenemos la informacion del contenido (img, nombre precio y id)
function agregarProducto(e) {
    e.preventDefault()
    if (e.target.classList.contains('agregar-carrito')) {
        const productoSeleccionado = e.target.parentElement.parentElement

        //4.2
        leerDatosProducto(productoSeleccionado);
    }
}

// 4. Leer el contenido del HTML al que le dimos click y extrae la información del producto
function leerDatosProducto(producto) {
    //console.log(producto)

    // Crear un objeto con el contenido del producto actual
    const infoProducto = {
        imagen: producto.querySelector('img').src,
        titulo: producto.querySelector('h3').textContent,
        precio: producto.querySelector('.precio').textContent,
        id: producto.querySelector('a').getAttribute('data-id'),
        cantidad: 1
    }
    //console.log(infoProducto)

    // Una ves que se selecciona un producto  y se leen los datos
    // El paso siguiente es llenar ese arreglo (articulosCarrito) con los datos anteriores

    // 5.2 Agregamos el producto al carrito
    articulosCarrito = [...articulosCarrito, infoProducto]

    // 5.3
    carritoHTML();

}

// 5.3 Muestra el carrito de compras en el HTML
function carritoHTML() {

    // 6.2 
    limpiarHTML();

    articulosCarrito.forEach(producto => {
        const { imagen, titulo, precio, cantidad, id } = producto;
        const row = document.createElement('tr');
        row.innerHTML = `
        <td> <img src="${imagen}" width="100"> </td>
        <td>${titulo}</td>
        <td>${precio}</td>
        <td>${cantidad}</td>
        <td>
          <a href="#" class="borrar-curso" data-id="${id}"> X </a>
        </td>
        `

        // 5.4 Agrega el HTML del carrito en el tbody
        contenedorCarrito.appendChild(row);
    });
}

// 6. Eliminar los productos del tbody
function limpiarHTML() {
    while (contenedorCarrito.firstChild) {
        contenedorCarrito.removeChild(contenedorCarrito.firstChild)
    }
}

