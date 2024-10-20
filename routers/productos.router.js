/*jshint esversion: 6 */
const express = require('express');
const router = express.Router();
const producto = require('../models/productos');
const mongoose = require('mongoose');


// Obtener todos los Productos 
// http://localhost:8888/producto
router.get('/', (req,res) => {
    producto.aggregate([
        {
           $lookup: {
              from: "categorias",             
              localField: "categoria_id",     
              foreignField: "_id",            
              as: "categoria"                 
           }
        },
        {
           $project: {                        
              nombre: 1,                      
              precio: 1,                      
              descripcion: 1,
              imagen:1,
              fecha_creacion:1,
              stock:1,                 
              nombre_categoria: { $arrayElemAt: [ "$categoria.nombre", 0 ] },  
              id_categoria: { $arrayElemAt: [ "$categoria._id", 0 ] }          
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


// Obtener Productos por categorias
// http://localhost:8888/producto/:idCategoria
router.get('/:idCategoria', (req,res) => {
    producto.find({
        categoria_id: new mongoose.Types.ObjectId(req.params.idCategoria)
    },{})
    .then(result => {
        res.send(result);
        res.end();
    })
    .catch(err => {
        res.send(err);
        res.end();
    });
});

// Agregar Producto
// http://localhost:8888/producto/:categoria_id
router.post('/:categoria_id', (req, res) => {
    const prod = new producto({
        nombre: req.body.nombre,
        categoria_id: new mongoose.Types.ObjectId(req.params.categoria_id),
        precio: req.body.precio,
        descripcion: req.body.descripcion,
        imagen: req.body.imagen,
        fecha_creacion: req.body.fecha,
        stock: req.body.stock,
    });
    prod.save().then(resp =>{
        res.send(resp);
        res.end();
    }).catch(error=>{
        res.send(error);
        res.end();
    });
});

module.exports = router;