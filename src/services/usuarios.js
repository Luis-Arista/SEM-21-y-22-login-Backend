const UserService = class {
    constructor(modeloDeUsuario){
        this.Model = modeloDeUsuario
    } 

    getByEmail(email) {
        return this.Model.findOne({email})
    }

    async create(userData) {
        const newUser = new this.Model(userData);
        newUser.save();
        await delete newUser.contraseña;
        return newUser.toObject()
    }
}

module.exports = UserService