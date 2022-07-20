const mongoose = require('mongoose');
require('dotenv').config()

const url = process.env.MONGOOSE_URL;


mongoose.connect( url , {} , () => {
    console.log('Conectado a MongoDB con exito');
    console.log('----------------------------');
});


mongoose.connection.on( 'open' , () => {
    console.log('Base de datos conectada');
    console.log('----------------------------');
});


module.exports = mongoose;  