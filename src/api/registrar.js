const express = require('express');
const router = express.Router();
const modeloDeUsuario = require( '../models/usuario')
const UserService = require('../services/usuarios')

const userService = new UserService( modeloDeUsuario )

router.post( '/' , async( req , res ) => {
    const body = req.body;
    const usuario = await userService.create(body);

    res.status(201).send(usuario)
})


module.exports = router