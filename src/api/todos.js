const express = require('express');
const router = express.Router();
 const {controladorUsuarios} = require('../controller')
const { getUsuario , eliminarUsuario , buscarUsuarioId } = controladorUsuarios


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