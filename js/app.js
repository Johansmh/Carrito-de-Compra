//1. Variables

const carrito = document.querySelector('#carrito');
const contenedorCarrito = document.querySelector('#lista-carrito tbody')
const vaciarCarritoBtn = document.querySelector('#vaciar-carrito')
const contenido = document.querySelector('#listado-productos')

// 2. Registrar los addEventListener

cargarEventListener()
function cargarEventListener() {
    contenido.addEventListener('click', agregarProducto)
    
}

// 3. Definir funciones

// Funciones 
 // 3. Al presionar el boton de agregar carrito obtenemos la informacion del contenido (img, nombre precio y id)
function agregarProducto(e) {
    e.preventDefault()
    if(e.target.classList.contains('agregar-carrito')) {
        const productoSeleccionado = e.target.parentElement.parentElement
        leerDatosProducto(productoSeleccionado);
    }
}

// 4. Leer el contenido del HTML al que le dimos click y extrae la información del producto
function leerDatosProducto(producto) {
    console.log(curso)

    // Crear un objeto con el contenido del producto actual
    const infoProducto = {
        imagen: producto.querySelector('img').src,
        titulo: producto.querySelector('h3').textContent,
        precio_: producto.querySelector('.precio').textContent,
        id: producto.querySelector('a').getAttribute('data-id'), 
        cantidad: 1
    }
    console.log(infoProducto)
}
