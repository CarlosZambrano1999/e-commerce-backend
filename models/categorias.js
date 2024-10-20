const mongoose = require('mongoose');
const schema = new mongoose.Schema({
    nombre: String
});

module.exports = mongoose.model('categorias', schema);