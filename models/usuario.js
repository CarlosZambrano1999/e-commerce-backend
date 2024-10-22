const { ObjectId } = require('mongoose');
const mongoose = require('mongoose');


const schema = new mongoose.Schema({
    nombre: String,
    email: { unique: true, require: true, type:String},
    password: String,
    rol_id: ObjectId
});


module.exports = mongoose.model('usuarios', schema);