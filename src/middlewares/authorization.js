const jwt = require('jsonwebtoken')
const JWT_SECRET = process.env.JWT_SECRET

const authMiddleware = ( req , res , next ) => {
    const { authorization } = req.headers
    const token = authorization.split(' ')[1]
     

    try {
        const decoded = jwt.verify( token , JWT_SECRET )
        req.user = decoded.data
        req.permissions = decoded.data.permissions
        const url = req.url.replace(/\//g, ':').slice(1)


        if( req.user.permissions.indexOf(url) === -1 ){
            return res.status(403).send({
                error: 'tu no pasas'
            })

        }

        next()
        
    } catch (error) {
        return res.status(403).send({
            error: error.message
        })
    }
}

module.exports = authMiddleware