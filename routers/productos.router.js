/*jshint esversion: 6 */
const express = require('express');
const router = express.Router();
const producto = require('../models/productos');
const mongoose = require('mongoose');
const multer = require('multer');
const upload = multer({ dest: 'uploads/' });

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
            $sort: {
                "categoria.nombre": 1,
                "fecha_creacion": -1 
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

// Obtener Productos por _id
// http://localhost:8888/productos/unico/:id
router.get('/unico/:id', (req,res) => {
    producto.find({
        _id: new mongoose.Types.ObjectId(req.params.id)
    },{})
    .then(result => {
        res.send(result[0]);
        res.end();
    })
    .catch(err => {
        res.send(err);
        res.end();
    });
});

// Agregar Producto
// http://localhost:8888/producto/:categoria_id
router.post('/:categoria_id', upload.single('imagen'), (req, res) => {
    const prod = new producto({
      nombre: req.body.nombre,
      categoria_id: new mongoose.Types.ObjectId(req.params.categoria_id),
      precio: req.body.precio,
      descripcion: req.body.descripcion,
      imagen: req.file ? `http://localhost:8888/uploads/${req.file.filename}` : null, // Nombre del archivo guardado
      fecha_creacion: Date.now(),
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