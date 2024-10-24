var express = require('express');
var cors = require('cors'); //Para gestionar politicas de dominios cruzados
var bodyParser = require('body-parser');
var database = require('./modules/database');
var app = express();
const path = require('path');

//declarar rutas
var categoriaRouter = require('./routers/categorias.routers');
var rolRouter = require('./routers/roles.routers');
var productosRouter = require('./routers/productos.router')
var usuarioRouter = require('./routers/usuarios.router')
var ordenRouter = require('./routers/ordenes.router')

//rutas principales
app.use(cors());
app.use(bodyParser.json());
app.use(bodyParser.urlencoded({ extended: true }));
app.use('/uploads', express.static(path.join(__dirname, 'uploads')));
app.use('/categorias', categoriaRouter);
app.use('/roles', rolRouter);
app.use('/productos', productosRouter);
app.use('/usuarios', usuarioRouter);
app.use('/orden',ordenRouter)



app.listen(8888, ()=>{
    console.log('Servidor del backend levantado en 8888');
});