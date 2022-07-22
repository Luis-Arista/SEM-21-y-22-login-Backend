const jwt = require('jsonwebtoken');
const express = require('express');
const router = express.Router();


const UserService = require('../services/usuarios');
const UserModelo = require('../models/usuario')
const AuthService = require('../services/auth')
require('dotenv').config()

const userService = new UserService( UserModelo )
const autService = new AuthService(userService)
const JWT_SECRET = process.env.JWT_SECRET

router.post( '/login' , async( req , res ) => {
    const { email , contraseña } = req.body

    try {
        const usuario = await autService.login( email , contraseña );
        const userRole = {
            ...usuario,
            role:'admin',
            permissions: ['users:foo']
        }
        
         const token = jwt.sign({
            data:userRole,
            exp: Math.floor(Date.now() / 1000) + (60 * 60)
        }, JWT_SECRET) 
        res.send({
            _id: usuario._id,
            token
        })

    } catch (error) {
        console.log(error);
        res.status(401).send({
            message: error.message
        })
    }

})

module.exports = router