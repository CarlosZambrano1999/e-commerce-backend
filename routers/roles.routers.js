const express = require('express');
const router = express.Router();
const rol = require('../models/roles');
const mongoose = require('mongoose');

// Obtener roles
// http://localhost:8888/roles
router.get('/', (req,res) => {
    rol.find()
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