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

    // 8. Elimina productos del carrito
    carrito.addEventListener('click', eliminarProducto)
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

// 8.2 Elimina un producto del carrito
function eliminarProducto(e) {
    if(e.target.classList.contains('borrar-producto')) {
        const productoId = e.target.getAttribute('data-id');

        // Elimina del arreglo de articulosCarrito por el data-id
        articulosCarrito = articulosCarrito.filter(producto => producto.id !== productoId)
        carritoHTML(); // Iterar sobre el carrito y mostrar su HTML
    }
}

// 4. Leemos el contenido del HTML al que le dimos click y extrae la información del producto
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

    // Antes de agregar los articulos al carrito podriamos comprobar si ese elemento ya existe en el carrito
    // Si existe no lo agregamos al carrito solamente actualizamos la cantidad 
    // sino existe si lo agregamos al carrito 

    // 7. Revisa si un elemento existe en el carrito
    const existe = articulosCarrito.some(producto => producto.id === infoProducto.id)
    if (existe) {
        // 7.3 Actualizamos la cantidad 
        const productos =  articulosCarrito.map(producto => {
            if(producto.id === infoProducto.id) {
                producto.cantidad++; 
                return producto; // Retorna el objeto actualizado
            } else {
                return producto; // retorna los elementos que no son duplicados
            }
        });
        articulosCarrito = [...productos]
    } else {
        // 7.2 Agregamos el producto al carrito
        articulosCarrito = [...articulosCarrito, infoProducto]
    }

    // Una ves que se selecciona un producto  y se leen los datos
    // El paso siguiente es llenar ese arreglo (articulosCarrito) con los datos anteriores
        // 5.2 Agregamos el producto al carrito
        // articulosCarrito = [...articulosCarrito, infoProducto]

    // 5.3
    carritoHTML();

}

// 5.3 Muestra el carrito de compras en el HTML
function carritoHTML() {

    // 6.4
    limpiarHTML();
    
    // 6. Recorre el carrito y genera el HTML
    articulosCarrito.forEach(producto => {
        const { imagen, titulo, precio, cantidad, id } = producto;
        const row = document.createElement('tr');
        row.innerHTML = `
        <td> <img src="${imagen}" width="100"> </td>
        <td>${titulo}</td>
        <td>${precio}</td>
        <td>${cantidad}</td>
        <td>
          <a href="#" class="borrar-producto" data-id="${id}"> X </a>
        </td>
        `

        // 6.2 Agrega el HTML del carrito en el tbody
        contenedorCarrito.appendChild(row);
    });
}

// 6. 3 Eliminar los productos del tbody
function limpiarHTML() {
    while (contenedorCarrito.firstChild) {
        contenedorCarrito.removeChild(contenedorCarrito.firstChild)
    }
}

