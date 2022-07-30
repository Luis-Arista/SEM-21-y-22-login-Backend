const express = require('express');
const cors = require('cors');
const apiRouter = require('./api/index')

const app = express();

app.use( express.json() );
app.use( cors() );
app.use( '/api' , apiRouter )

app.use( '/' , ( req , res ) => {
    res.send('esto funciona')
})

module.exports = app 