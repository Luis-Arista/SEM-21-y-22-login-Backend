const modeloDeUsuario = require('../models/usuario');


const getUsuario = async() => {
    return modeloDeUsuario.find({});
}

const eliminarUsuario = async( _id ) => {
    return modeloDeUsuario.findByIdAndDelete( { _id } )
}

const buscarUsuarioId = async( _id ) => {
    return modeloDeUsuario.findById( {_id} )
}

module.exports = {
    getUsuario ,
    eliminarUsuario,
    buscarUsuarioId
}