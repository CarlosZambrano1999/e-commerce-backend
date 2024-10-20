const express = require('express');
const router = express.Router();
const categoria = require('../models/categorias');
const mongoose = require('mongoose');

// Obtener categorias
// http://localhost:8888/categorias
router.get('/', (req,res) => {
    categoria.find()
    .then(result => {
        res.send(result);
        res.end();
    })
    .catch(err => {
        res.send(err);
        res.end();
    });
});


module.exports = router;