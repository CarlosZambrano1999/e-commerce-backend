const express = require('express');
const router = express.Router();
const orden = require('../models/ordenes');
const mongoose = require('mongoose');



// Obtener todos las ordenes
// http://localhost:8888/orden
router.get('/', (req,res) => {
    orden.aggregate([
        {
           $lookup: {
              from: "usuarios",             
              localField: "cliente_id",     
              foreignField: "_id",            
              as: "usuario"                 
           }
        },
        {
            $sort: {
                "fecha_creacion": -1,
                "usuario.nombre": 1 
            }
        },
        {
           $project: {

              total: 1,                      
              items: 1,                      
              status: 1,
              imagen:1,
              productos:1,
              fecha_creacion:1,             
              nombre_cliente: { $arrayElemAt: [ "$usuario.nombre", 0 ] },  
              id_cliente: { $arrayElemAt: [ "$usuario._id", 0 ] }      
           }
        }
     ])     
    .then(result => {
        res.send(result);
    })
    .catch(err => {
        res.status(500).send(err);
    });
});


// Obtener ordenes por clientes
// http://localhost:8888/orden/:cliente_id
router.get('/:cliente_id', (req,res) => {
   orden.aggregate([
        {
            $match: {
                cliente_id: new mongoose.Types.ObjectId(req.params.cliente_id)
            }
        },
        {
            $lookup: {
                from: "usuarios",             
                localField: "cliente_id",     
                foreignField: "_id",            
                as: "usuario"                 
            }
            },
            {
                $sort: {
                    "fecha_creacion": -1,
                    "usuario.nombre": 1 
                }
            },
            {
            $project: {

                total: 1,                      
                items: 1,                      
                status: 1,
                imagen:1,
                productos:1,
                fecha_creacion:1,             
                nombre_cliente: { $arrayElemAt: [ "$usuario.nombre", 0 ] },  
                id_cliente: { $arrayElemAt: [ "$usuario._id", 0 ] }      
            }
        }
    ])
    .then(result => {
        res.send(result);
        res.end();
    })
    .catch(err => {
        res.send(err);
        res.end();
    });
});

// Agregar Orden
// http://localhost:8888/orden/crear/:cliente_id
router.post('/crear/:cliente_id', (req, res) => {
    const ord = new orden({
        fecha_creacion: Date.now(),
        cliente_id: new mongoose.Types.ObjectId(req.params.cliente_id),
        productos: req.body.productos,
        total: req.body.total,
        items: req.body.items,
        status:'Pendiente'
    });
    ord.save().then(resp =>{
        res.send(resp);
        res.end();
    }).catch(error=>{
        res.send(error);
        res.end();
    });
});


module.exports = router;