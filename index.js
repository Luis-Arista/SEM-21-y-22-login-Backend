const app = require('./src/app')


require('./src/db/mongodb');
require('dotenv').config()

 
const port = process.env.PORT ;

app.listen( port , ( req , res ) => {
    console.log(`Servidor activo y funcionando en puerto ${port}`);
    console.log('----------------------------');
}); 