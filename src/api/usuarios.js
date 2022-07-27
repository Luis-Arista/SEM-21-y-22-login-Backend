const express = require('express');
const router = express.Router();
 const {controladorUsuarios} = require('../controller')
 

 
router.get( '/me' , async( req , res ) => {
    const sessionUser  = req.user 

    if(!sessionUser){
        return res.status(403).send({
            message: 'Tu no deverias estar aqui'
        })
    }
    
    res.send({
        nombre: sessionUser.nombre,
        usuario: sessionUser.usuario,
        email: sessionUser.email,
        roll: sessionUser.roll
    })

})





module.exports = router