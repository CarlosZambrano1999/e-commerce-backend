const { ObjectId } = require('mongoose');
const mongoose = require('mongoose');

const schema = new mongoose.Schema({
    fecha_creacion: Date,
    cliente_id: ObjectId,
    total: Number,
    productos: [],
    total:Number,
    status: String,
    items:Number,
});

module.exports = mongoose.model('ordenes', schema);