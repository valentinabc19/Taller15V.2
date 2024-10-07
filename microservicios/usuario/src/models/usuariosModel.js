const mysql = require('mysql2/promise');


const connection = mysql.createPool({
    host: 'db',
    user: 'root',
    password: 'root',
    database: 'almacenABC'
    // Cambiar el host por la IP del server y añadir el puerto 32000 si no funciona la conexión
});


async function traerUsuarios() {
    const result = await connection.query('SELECT * FROM usuarios');
    return result[0];
}


async function traerUsuario(usuario) {
    const result = await connection.query('SELECT * FROM usuarios WHERE usuario = ?', usuario);
    return result[0];
}


async function validarUsuario(usuario, contrasena) {
    const result = await connection.query('SELECT * FROM usuarios WHERE usuario = ? AND contrasena = ?', [usuario, contrasena]);
    return result[0];
}

async function actualizarUsuario(usuario, nombre, email, contrasena) {
    const result = await connection.query('UPDATE usuarios SET nombre= ?, email = ?, contrasena = ? WHERE usuario = ?', [nombre, email, contrasena, usuario]);
    return result;
    
}

async function crearUsuario(nombre, email, usuario, contrasena) {
    const result = await connection.query('INSERT INTO usuarios VALUES(?,?,?,?)', [nombre, email, usuario, contrasena]);
    return result;
}

async function borrarUsuario(usuario) {
    const result = await connection.query('DELETE FROM usuarios WHERE usuario = ?', usuario);
    return result[0];
}
module.exports = {
    traerUsuarios, traerUsuario, validarUsuario, actualizarUsuario, crearUsuario, borrarUsuario
};