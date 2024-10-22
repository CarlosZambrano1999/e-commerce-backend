const jwt = require('jsonwebtoken'); 

const tokenSign = async (user) => { //Genera Token
    const tokenData =  'tvc12345';
    return jwt.sign(
        {
            id: user._id, 
            rol: user.rol_id
        },
        tokenData,  
        {
            expiresIn: "24h", //tiempo de vida
        }
    );
};

const verifyToken = async (token) => {
    try {
        return jwt.verify(token, 'tvc12345');
    } catch (e) {
        return null;
    }
};

const decodeSign = (token) => { //TODO: Verificar que el token sea valido y correcto
    return jwt.decode(token, null);
};


module.exports = { tokenSign, decodeSign, verifyToken };