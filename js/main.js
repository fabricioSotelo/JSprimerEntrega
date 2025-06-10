const maxProductos = 10;
let productos = [];

function agregarProducto(nombre) {
    nombre = nombre.toLowerCase();
    if (productos.length < maxProductos) {
        productos.push(nombre);
        alert(`Producto "${nombre}" agregado correctamente.`);
    } else {
        alert("¡No se pueden agregar más productos!");
    }
}


function mostrarProductos(lista) {
    if (lista.length === 0) {
        alert("La lista de productos está vacía.");
    } else {
        let mensaje = "Lista de productos:\n";
        for (let i = 0; i < lista.length; i++) {
            mensaje += `${i + 1}. ${lista[i]}\n`;
            console.log(`${i + 1}. ${lista[i]}`);
        }
        alert(mensaje);
    }
}

function buscarProducto(nombre) {
    nombre = nombre.toLowerCase();
    if (productos.includes(nombre)) {
        alert(`El producto "${nombre}" está en la lista.`);
    } else {
        alert(`El producto "${nombre}" no se encontró.`);
    }
}

function eliminarProducto(nombre) {
    nombre = nombre.toLowerCase();
    const index = productos.indexOf(nombre);
    if (index !== -1) {
        productos.splice(index, 1);
        alert(`El producto "${nombre}" se elimino correctamente.`);
    } else {
        alert(`El producto "${nombre}" no se encontró en la lista.`);
    }
}

let opcion;
do {
    opcion = prompt(
        "MENÚ:\n1. Agregar producto\n2. Mostrar lista\n3. Buscar producto\n4. Eliminar producto\n5. Salir\n\nElige una opción (1-5):"
    );

    if (opcion === "1") {
        if (productos.length < maxProductos) {
            let nombre = prompt("Ingrese el nombre del producto:");
            agregarProducto(nombre);
        } else {
            alert("Ya se alcanzó el número máximo de productos.");
        }
    } else if (opcion === "2") {
        mostrarProductos(productos);
    } else if (opcion === "3") {
        let nombreBusqueda = prompt("Ingrese el nombre del producto que desea agregar:");
        buscarProducto(nombreBusqueda);
    } else if (opcion === "4") {
        let nombreEliminar = prompt("Ingrese el nombre del producto que desea eliminar:");
        eliminarProducto(nombreEliminar);
    }  else if (opcion === "5") {
        alert("Saliendo... ¡Gracias por su visita, hasta luego!");
    }  else {
        alert("Opción inválida. Por favor elige entre 1 y 5.");
    }

} while (opcion !== "5");

