const mongoose = require('mongoose');
const schema = new mongoose.Schema({
    nombre: String,
    permisos: []
});

module.exports = mongoose.model('roles', schema);