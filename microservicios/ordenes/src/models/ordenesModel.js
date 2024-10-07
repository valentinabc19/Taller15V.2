const mysql = require('mysql2/promise');


const connection = mysql.createPool({
    host: '192.168.100.2',
    user: 'root',
    password: 'root',
    port: '32000',
    database: 'almacenABC'
    // Cambiar el host por la IP del server y añadir el puerto 32000 si no funciona la conexión
});


async function crearOrden(orden) {
    const nombreCliente = orden.nombreCliente;
    const emailCliente = orden.emailCliente;
    const totalCuenta = orden.totalCuenta;
   
    const result = await connection.query('INSERT INTO ordenes VALUES (null, ?, ?, ?, Now())', [nombreCliente, emailCliente, totalCuenta]);
    return result;
}


async function traerOrden(id) {
    const result = await connection.query('SELECT * FROM ordenes WHERE id = ?', id);
    return result[0];
}


async function traerOrdenes() {
    const result = await connection.query('SELECT * FROM ordenes');
    return result[0];
}


module.exports = {
    crearOrden,
    traerOrden,
    traerOrdenes
};