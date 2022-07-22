const express = require( 'express')
const router = express.Router()
const userRouter = require('./usuarios')
const authRouter = require( './auth')
const authMiddleware = require('../middlewares/authorization')

router.use( '/auth' , authRouter)

//router.use(authMiddleware)

router.use( '/users' , userRouter );


module.exports = router