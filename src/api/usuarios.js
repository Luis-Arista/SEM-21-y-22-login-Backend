const express = require('express');
const router = express.Router();
const modeloDeUsuario = require( '../models/usuario')
const UserService = require('../services/usuarios')
const {controladorUsuarios} = require('../controller')
const { getUsuario , eliminarUsuario , buscarUsuarioId } = controladorUsuarios
 

const userService = new UserService( modeloDeUsuario )

router.post( '/' , async( req , res ) => {
    const body = req.body;
    const usuario = await userService.create(body);

    res.status(201).send(usuario)
})

router.get( '/' , async( req , res ) => {
    const usuarios = await getUsuario()
    res.send(usuarios)
} )

router.get( '/:id' , async( req , res) => {
    const {id} = req.params
    const usuario = await buscarUsuarioId( id )
    res.send(usuario)
})

router.delete( '/:id' , async ( req , res ) => {
    const {id} = req.params
    const resultado = await eliminarUsuario(id)
    res.send(resultado)
} )




module.exports = router