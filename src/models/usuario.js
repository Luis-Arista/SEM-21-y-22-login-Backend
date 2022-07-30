const mongoose = require('mongoose');
const bcrypt = require('bcryptjs')
const uniqueValidator = require('mongoose-unique-validator')
const { Schema , model } = mongoose;

const UsuarioEsquema = new Schema({
    nombre:{
        type: String,
        required: [ true , 'El nombre es requerido']
    },

    apellido: {
        type: String,
        required: true
    },

    usuario: {
        type: String,
        required: true
    },

    email: {
        type: String,
        required: true,
        unique: true
    },

    contraseña:{
        type: String,
        required:true
    },

    roll:{
        type: String,
        required:true
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

UsuarioEsquema.plugin( uniqueValidator , { message: 'email repetido'} )

const modeloDeUsuario = model( 'usuarios' , UsuarioEsquema );

module.exports = modeloDeUsuario;