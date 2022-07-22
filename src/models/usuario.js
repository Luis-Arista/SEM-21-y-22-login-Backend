const mongoose = require('mongoose');
const bcrypt = require('bcryptjs')
const { Schema , model } = mongoose;


const UsuarioEsquema = new Schema({
    nombre:{
        type: String,
        require: true
    },

    apellido: {
        type: String,
        require: true
    },

    usuario: {
        type: String,
        require: true
    },

    email: {
        type: String,
        require: true
    },

    contraseña:{
        type: String,
        require:true
    },

    roll:{
        type: String,
        require:true
    }
},{
    versionKey:false,
    timestamps:true
});

UsuarioEsquema.pre('save' , function(next){

    console.log('----------------------------');
    const encriptarContraseña = bcrypt.hashSync(this.contraseña, 12);
    this.contraseña = encriptarContraseña
    console.log(this.contraseña , this.email);
    console.log('----------------------------');

    next()
})

const modeloDeUsuario = model( 'usuarios' , UsuarioEsquema );

module.exports = modeloDeUsuario;