const express = require( 'express')
const router = express.Router()
const userRouter = require('./usuarios')
const authRouter = require( './auth')
const registrarRoute = require( './registrar')
const todosRouter = require('./todos')
const authMiddleware = require('../middlewares/authorization')

router.use( '/auth' , authRouter)
router.use( '/registrar' , registrarRoute )
router.use( '/todos' , todosRouter )

router.use(authMiddleware)
router.use( '/users' , userRouter );


module.exports = router