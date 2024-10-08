const mysql = require('mysql2/promise');


const connection = mysql.createPool({
    host: 'db',
    user: 'root',
    password: 'root',
    database: 'almacenABC'
    // Cambiar el host por la IP del server y añadir el puerto 32000 si no funciona la conexión
});


async function traerProductos() {
    const result = await connection.query('SELECT * FROM productos');
    return result[0];
}
async function traerProducto(id) {
    const result = await connection.query('SELECT * FROM productos WHERE id = ?', id);
    return result[0];
}


async function actualizarProducto(id, nombre, precio, inventario) {
    const result = await connection.query('UPDATE productos SET nombre = ?, precio = ?, inventario = ? WHERE id = ?', [nombre, precio, inventario, id]);
    return result;
}


async function crearProducto(nombre, precio, inventario) {
    const result = await connection.query('INSERT INTO productos VALUES(null,?,?,?)', [nombre, precio, inventario]);
    return result;
}


async function borrarProducto(id) {
    const result = await connection.query('DELETE FROM productos WHERE id = ?', id);
    return result[0];
}


module.exports = {
    traerProductos, traerProducto, actualizarProducto, crearProducto, borrarProducto
}

