const express = require('express');
const cors = require('cors');
const apiRouter = require('./api/index')

const app = express();

app.use( express.json() );
app.use( cors() );
app.use( '/api' , apiRouter )

app.use( '/' , ( req , res ) => {
    res.send({
        mensaje: 'esto funciona'
    })
})

//para que funcione kuski se tiene que quitar la variable de entorno, agregar start a package.json

module.exports = app 