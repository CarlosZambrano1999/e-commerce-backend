const { ObjectId } = require('mongoose');
const mongoose = require('mongoose');


const schema = new mongoose.Schema({
    nombre: String,
    categoria_id: ObjectId,
    precio: Number,
    descripcion: String,
    imagen: String,
    fecha_creacion: Date,
    stock: Number
});

module.exports = mongoose.model('productos', schema);