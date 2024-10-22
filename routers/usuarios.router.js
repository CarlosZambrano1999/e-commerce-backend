const express = require('express');
const router = express.Router();
const bcrypt = require('bcrypt');
const mongoose = require('mongoose');
const user = require('../models/usuario');
var salt = bcrypt.genSaltSync(10);
var hash = bcrypt.hashSync("B4c0/\/", salt);
const { tokenSign } = require('../helpers/generaToken');


// Agregar nuevo Usuario
// http://localhost:8888/usuarios/:rol_id
router.post('/:rol_id', (req, res) => {
    
    const us = new user({
        nombre: req.body.nombre,
        email: req.body.email,
        password: req.body.password,
        rol_id: new mongoose.Types.ObjectId(req.params.rol_id),
    });
    let passwordHash = bcrypt.hashSync( us.password, 8);
    us.password= passwordHash;
    us.save().then(resp =>{
        res.send(resp);
        res.end();
    }).catch(error=>{
        res.send(error);
        res.end();
    });
});

// Buscar Usuario
// http://localhost:8888/usuario/verificar
router.post('/verificar/:email/:password', async (req,res) => {
    const mail= req.params.email;
    const password = req.params.password;
    const passwordHash = await user.aggregate([
        {
            $match: { email: mail }
        },
        {
            $lookup:{
                from:'roles',
                localField:"rol_id",
                foreignField:"_id",
                as:"rol"
            }
        },
        {
            $project: {
                _id:1,
                nombre:1,
                email:1,
                password:1,
                rol:{$arrayElemAt: [ "$rol.nombre", 0 ] },  
                rol_id: { $arrayElemAt: [ "$rol._id", 0 ] }
            }
        }
    ]);
    if(passwordHash){
        let compare = await bcrypt.compare( password , passwordHash[0].password);
        if(compare){
        const tokenSession = await tokenSign(passwordHash);
        res.send({usuario:passwordHash[0], token: tokenSession});
        res.end();    
        }else{
            res.send([]);
            res.end();
        }
    }else{
        res.json([]);
        res.end();
    }
});

module.exports = router;