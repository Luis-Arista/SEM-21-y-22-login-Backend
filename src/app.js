const express = require('express');
const cors = require('cors');
const apiRouter = require('./api')

const app = express();

app.use( express.json() );
app.use( cors() );
app.use( '/api/v1' , apiRouter )

app.use( '/' , ( req , res ) => {
    res.send('esto funciona')
})

module.exports = app 