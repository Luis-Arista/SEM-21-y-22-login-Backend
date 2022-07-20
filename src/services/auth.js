const bcrypt = require('bcryptjs');

const AutService = class{
    constructor(UserService){
        this.userService = UserService
    }

    async login( email , contraseña) {
        const user = await this.userService.getByEmail(email)
        if(!user){
            throw new Error('usuario no encontrado')
        }else if( await bcrypt.compare( contraseña, user.contraseña ) || !user) {
            return user.toObject()
        }else {
            throw new Error('no autorizado')
        }
    }
}

module.exports = AutService