const express = require( 'express')
const router = express.Router()
const userRouter = require('./usuarios')
const authRouter = require( './auth')

router.use( '/auth' , authRouter)
router.use( '/usuario' , userRouter );

module.exports = router