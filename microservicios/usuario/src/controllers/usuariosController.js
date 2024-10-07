const { Router } = require('express');
const router = Router();
const usuariosModel = require('../models/usuariosModel');


router.get('/usuarios', async (req, res) => {
    var result;
    result = await usuariosModel.traerUsuarios() ;
    res.json(result);
});


router.get('/usuarios/:usuario', async (req, res) => { 
    const usuario = req.params.usuario;
    var result;
    result = await usuariosModel.traerUsuario(usuario) ;
    res.json(result[0]);
});


router.get('/usuarios/:usuario/:contrasena', async (req, res) => {
    const usuario = req.params.usuario;
    const contrasena = req.params.contrasena;
    var result;
    result = await usuariosModel.validarUsuario(usuario, contrasena) ;
    res.json(result);
});

router.put('/usuarios/:usuario', async (req, res) => {
    const nombre = req.body.nombre;
    const email = req.body.email;
    const contrasena = req.body.contrasena;
    const usuario = req.params.usuario;

    var result = await usuariosModel.actualizarUsuario(usuario, nombre, email, contrasena);
    res.send("Informacion de usuario actualizada")
})

router.post('/usuarios', async (req, res) => {
    const nombre = req.body.nombre;
    const email = req.body.email;
    const usuario = req.body.usuario;
    const contrasena = req.body.contrasena;


    var result = await usuariosModel.crearUsuario(nombre, email, usuario, contrasena);
    res.send("usuario creado");
});

router.delete('/usuarios/:usuario', async (req, res) => {
    const usuario = req.params.usuario;
    var result;
    result = await usuariosModel.borrarUsuario(usuario);

    res.send("Usuario eliminado")
})

module.exports = router;