//Crear la base
use e-commerce-tvc

// Crear una colección llamada categorias
db.createCollection("categorias")

//Datos para las Categorías
db.categorias.insertMany(
  [{
    "_id": {
      "$oid": "6713f1bb6c90c5136e7be64f"
    },
    "nombre": "Hogar"
  },
  {
    "_id": {
      "$oid": "6713f1bb6c90c5136e7be650"
    },
    "nombre": "Jardinería"
  },
  {
    "_id": {
      "$oid": "6713f1bb6c90c5136e7be651"
    },
    "nombre": "Electrodomésticos"
  }]
);

// Crear una colección llamada roles
db.createCollection("roles")

//Datos para las roles
db.roles.insertMany([{
  "_id": {
    "$oid": "6713efa1c31a01c9ac16c9b5"
  },
  "nombre": "administrador",
  "permisos": [
    "crear_productos",
    "editar_productos",
    "ver_ordenes"
  ]
},
{
  "_id": {
    "$oid": "6713efa1c31a01c9ac16c9b6"
  },
  "nombre": "cliente",
  "permisos": [
    "comprar_productos"
  ]
}]);

// Crear una colección llamada usuarios
db.createCollection("usuarios")

//Datos de usuarios
db.usuarios.insertMany([{
  "_id": {
    "$oid": "671553364c33138a472436fc"
  },
  "nombre": "Juan Perez",
  "email": "jperez@televicentro.com",
  "password": "$2b$08$u9/us0da7n8bNF2TC0zQ6edSXSHU3JDJSbFNye8uX1JUQgjR06Uzm",
  "rol_id": {
    "$oid": "6713efa1c31a01c9ac16c9b5"
  },
  "__v": 0
},
{
  "_id": {
    "$oid": "6718e65edb624f0506f89e16"
  },
  "nombre": "Carlos Zambrano",
  "email": "czambrano@correo.com",
  "password": "$2b$08$rH4Nz7Ogl681yKryzRmiseJDMz/GeIGAgutg/.U1N2NPHGg.EYHU2",
  "rol_id": {
    "$oid": "6713efa1c31a01c9ac16c9b6"
  },
  "__v": 0
}]);


// Crear una colección llamada productos
db.createCollection("productos")

//Datos de Productos
db.productos.insertMany([{
  "_id": {
    "$oid": "671408936c90c5136e7be65b"
  },
  "nombre": "Estufa",
  "categoria_id": {
    "$oid": "6713f1bb6c90c5136e7be651"
  },
  "precio": 120,
  "descripcion": "Lorem Ipsum is simply dummy text of the printing and typesetting industry. ",
  "imagen": "https://www.elgallomasgallo.com.hn/media/catalog/product/e/s/estufa-de-gas-mabe-20-pulgadas-ema5105sn0-negro-173128.jpg?optimize=medium&bg-color=255,255,255&fit=bounds&height=700&width=700&canvas=700:700",
  "fecha_creacion": {
    "$date": "2024-10-19T19:29:23.762Z"
  },
  "stock": 50,
  "activo": true
},
{
  "_id": {
    "$oid": "671408936c90c5136e7be65c"
  },
  "nombre": "Lavadora",
  "categoria_id": {
    "$oid": "6713f1bb6c90c5136e7be651"
  },
  "precio": 120,
  "descripcion": "Lorem Ipsum is simply dummy text of the printing and typesetting industry.",
  "imagen": "https://www.elgallomasgallo.com.hn/media/catalog/product/l/a/lavadora-automatica-lg-23kg-wt23wt6ha-blanco-173880-1-frontal.jpg?width=265&height=265&canvas=265,265&optimize=medium&bg-color=255,255,255&fit=bounds",
  "fecha_creacion": {
    "$date": "2024-10-19T19:29:23.762Z"
  },
  "stock": 50,
  "activo": true
},
{
  "_id": {
    "$oid": "67140a006c90c5136e7be660"
  },
  "nombre": "Estufa",
  "categoria_id": {
    "$oid": "6713f1bb6c90c5136e7be651"
  },
  "precio": 120,
  "descripcion": "Lorem Ipsum is simply dummy text of the printing and typesetting industry. ",
  "imagen": "https://www.elgallomasgallo.com.hn/media/catalog/product/e/s/estufa-de-gas-mabe-20-pulgadas-ema5105sn0-negro-173128.jpg?optimize=medium&bg-color=255,255,255&fit=bounds&height=700&width=700&canvas=700:700",
  "fecha_creacion": {
    "$date": "2024-10-19T19:35:28.866Z"
  },
  "stock": 50,
  "activo": true
},
{
  "_id": {
    "$oid": "67140a006c90c5136e7be661"
  },
  "nombre": "Lavadora",
  "categoria_id": {
    "$oid": "6713f1bb6c90c5136e7be651"
  },
  "precio": 120,
  "descripcion": "Lorem Ipsum is simply dummy text of the printing and typesetting industry.",
  "imagen": "https://www.elgallomasgallo.com.hn/media/catalog/product/l/a/lavadora-automatica-lg-23kg-wt23wt6ha-blanco-173880-1-frontal.jpg?width=265&height=265&canvas=265,265&optimize=medium&bg-color=255,255,255&fit=bounds",
  "fecha_creacion": {
    "$date": "2024-10-19T19:35:28.866Z"
  },
  "stock": 50,
  "activo": true
},
{
  "_id": {
    "$oid": "6714b8898af2cadb027e2af5"
  },
  "nombre": "Muebles",
  "categoria_id": {
    "$oid": "6713f1bb6c90c5136e7be64f"
  },
  "precio": 120,
  "descripcion": "Lorem Ipsum is simply dummy text of the printing and typesetting industry.",
  "imagen": "https://www.elgallomasgallo.com.hn/media/catalog/product/j/u/juego-de-sala-diesa-germany-321-194711_1_.png?optimize=medium&bg-color=255,255,255&fit=bounds&height=700&width=700&canvas=700:700&format=jpeg",
  "fecha_creacion": {
    "$date": "2024-10-19T00:00:00.000Z"
  },
  "stock": 50,
  "__v": 0,
  "activo": true
},
{
  "_id": {
    "$oid": "67172a60af370535e5fc9ce5"
  },
  "nombre": "Muebles",
  "categoria_id": {
    "$oid": "6713f1bb6c90c5136e7be64f"
  },
  "precio": 120,
  "descripcion": "Lorem Ipsum is simply dummy text of the printing and typesetting industry.",
  "imagen": "https://www.elgallomasgallo.com.hn/media/catalog/product/1/6/161461_1.jpg?optimize=medium&bg-color=255,255,255&fit=bounds&height=700&width=700&canvas=700:700",
  "fecha_creacion": {
    "$date": "2024-10-19T00:00:00.000Z"
  },
  "stock": 50,
  "__v": 0,
  "activo": true
},
{
  "_id": {
    "$oid": "67172a64af370535e5fc9ce7"
  },
  "nombre": "Muebles",
  "categoria_id": {
    "$oid": "6713f1bb6c90c5136e7be64f"
  },
  "precio": 120,
  "descripcion": "Lorem Ipsum is simply dummy text of the printing and typesetting industry.",
  "imagen": "https://www.elgallomasgallo.com.hn/media/catalog/product/1/6/161461_1.jpg?optimize=medium&bg-color=255,255,255&fit=bounds&height=700&width=700&canvas=700:700",
  "fecha_creacion": {
    "$date": "2024-10-19T00:00:00.000Z"
  },
  "stock": 50,
  "__v": 0,
  "activo": true
},
{
  "_id": {
    "$oid": "67172a66af370535e5fc9ce9"
  },
  "nombre": "Muebles",
  "categoria_id": {
    "$oid": "6713f1bb6c90c5136e7be64f"
  },
  "precio": 120,
  "descripcion": "Lorem Ipsum is simply dummy text of the printing and typesetting industry.",
  "imagen": "https://www.elgallomasgallo.com.hn/media/catalog/product/1/6/161461_1.jpg?optimize=medium&bg-color=255,255,255&fit=bounds&height=700&width=700&canvas=700:700",
  "fecha_creacion": {
    "$date": "2024-10-19T00:00:00.000Z"
  },
  "stock": 50,
  "__v": 0,
  "activo": true
},
{
  "_id": {
    "$oid": "67172a67af370535e5fc9ceb"
  },
  "nombre": "Muebles",
  "categoria_id": {
    "$oid": "6713f1bb6c90c5136e7be64f"
  },
  "precio": 120,
  "descripcion": "Lorem Ipsum is simply dummy text of the printing and typesetting industry.",
  "imagen": "https://www.elgallomasgallo.com.hn/media/catalog/product/1/6/161461_1.jpg?optimize=medium&bg-color=255,255,255&fit=bounds&height=700&width=700&canvas=700:700",
  "fecha_creacion": {
    "$date": "2024-10-19T00:00:00.000Z"
  },
  "stock": 50,
  "__v": 0,
  "activo": true
},
{
  "_id": {
    "$oid": "67172a68af370535e5fc9ced"
  },
  "nombre": "Muebles",
  "categoria_id": {
    "$oid": "6713f1bb6c90c5136e7be64f"
  },
  "precio": 120,
  "descripcion": "Lorem Ipsum is simply dummy text of the printing and typesetting industry.",
  "imagen": "https://www.elgallomasgallo.com.hn/media/catalog/product/1/6/161461_1.jpg?optimize=medium&bg-color=255,255,255&fit=bounds&height=700&width=700&canvas=700:700",
  "fecha_creacion": {
    "$date": "2024-10-19T00:00:00.000Z"
  },
  "stock": 50,
  "__v": 0,
  "activo": true
},
{
  "_id": {
    "$oid": "67172a68af370535e5fc9cef"
  },
  "nombre": "Muebles",
  "categoria_id": {
    "$oid": "6713f1bb6c90c5136e7be64f"
  },
  "precio": 120,
  "descripcion": "Lorem Ipsum is simply dummy text of the printing and typesetting industry.",
  "imagen": "https://www.elgallomasgallo.com.hn/media/catalog/product/1/6/161461_1.jpg?optimize=medium&bg-color=255,255,255&fit=bounds&height=700&width=700&canvas=700:700",
  "fecha_creacion": {
    "$date": "2024-10-19T00:00:00.000Z"
  },
  "stock": 50,
  "__v": 0,
  "activo": true
},
{
  "_id": {
    "$oid": "67172a69af370535e5fc9cf1"
  },
  "nombre": "Muebles",
  "categoria_id": {
    "$oid": "6713f1bb6c90c5136e7be64f"
  },
  "precio": 120,
  "descripcion": "Lorem Ipsum is simply dummy text of the printing and typesetting industry.",
  "imagen": "https://www.elgallomasgallo.com.hn/media/catalog/product/1/6/161461_1.jpg?optimize=medium&bg-color=255,255,255&fit=bounds&height=700&width=700&canvas=700:700",
  "fecha_creacion": {
    "$date": "2024-10-19T00:00:00.000Z"
  },
  "stock": 50,
  "__v": 0,
  "activo": true
},
{
  "_id": {
    "$oid": "67172a6aaf370535e5fc9cf3"
  },
  "nombre": "Muebles",
  "categoria_id": {
    "$oid": "6713f1bb6c90c5136e7be64f"
  },
  "precio": 120,
  "descripcion": "Lorem Ipsum is simply dummy text of the printing and typesetting industry.",
  "imagen": "https://www.elgallomasgallo.com.hn/media/catalog/product/1/6/161461_1.jpg?optimize=medium&bg-color=255,255,255&fit=bounds&height=700&width=700&canvas=700:700",
  "fecha_creacion": {
    "$date": "2024-10-19T00:00:00.000Z"
  },
  "stock": 50,
  "__v": 0,
  "activo": true
},
{
  "_id": {
    "$oid": "67172a6baf370535e5fc9cf5"
  },
  "nombre": "Muebles",
  "categoria_id": {
    "$oid": "6713f1bb6c90c5136e7be64f"
  },
  "precio": 120,
  "descripcion": "Lorem Ipsum is simply dummy text of the printing and typesetting industry.",
  "imagen": "https://www.elgallomasgallo.com.hn/media/catalog/product/1/6/161461_1.jpg?optimize=medium&bg-color=255,255,255&fit=bounds&height=700&width=700&canvas=700:700",
  "fecha_creacion": {
    "$date": "2024-10-19T00:00:00.000Z"
  },
  "stock": 50,
  "__v": 0,
  "activo": true
},
{
  "_id": {
    "$oid": "67172a6caf370535e5fc9cf7"
  },
  "nombre": "Muebles",
  "categoria_id": {
    "$oid": "6713f1bb6c90c5136e7be64f"
  },
  "precio": 120,
  "descripcion": "Lorem Ipsum is simply dummy text of the printing and typesetting industry.",
  "imagen": "https://www.elgallomasgallo.com.hn/media/catalog/product/1/6/161461_1.jpg?optimize=medium&bg-color=255,255,255&fit=bounds&height=700&width=700&canvas=700:700",
  "fecha_creacion": {
    "$date": "2024-10-19T00:00:00.000Z"
  },
  "stock": 50,
  "__v": 0,
  "activo": true
},
{
  "_id": {
    "$oid": "67182c262eae8238f3970501"
  },
  "nombre": "Muebles",
  "categoria_id": {
    "$oid": "6713f1bb6c90c5136e7be64f"
  },
  "precio": 120,
  "descripcion": "Lorem Ipsum is simply dummy text of the printing and typesetting industry.",
  "imagen": "https://www.elgallomasgallo.com.hn/media/catalog/product/1/6/161461_1.jpg?optimize=medium&bg-color=255,255,255&fit=bounds&height=700&width=700&canvas=700:700",
  "fecha_creacion": {
    "$date": "2024-10-22T22:50:14.679Z"
  },
  "stock": 50,
  "__v": 0,
  "activo": true
},
{
  "_id": {
    "$oid": "671836abbf9a9856bb14a806"
  },
  "nombre": "Televisor",
  "categoria_id": {
    "$oid": "6713f1bb6c90c5136e7be651"
  },
  "precio": 120,
  "descripcion": "Smart TV LED de 43\". \r\n\r\nPantallaFull HD.\r\n\r\nPantallaProcesador α5.",
  "imagen": "http://localhost:8888/uploads/f7e324215748392f90ed82f649d1375d",
  "fecha_creacion": {
    "$date": "2024-10-22T23:35:07.316Z"
  },
  "stock": 25,
  "__v": 0,
  "activo": false
},
{
  "_id": {
    "$oid": "671858f1db1241e1fcd0b929"
  },
  "nombre": "Televisor",
  "categoria_id": {
    "$oid": "6713f1bb6c90c5136e7be651"
  },
  "precio": 120,
  "descripcion": "Lorem Ipsum is simply dummy text of the printing and typesetting industry. ",
  "imagen": "http://localhost:8888/uploads/6bd6e6755a1da3fae1fe2b2353fd258f",
  "fecha_creacion": {
    "$date": "2024-10-23T06:50:42.532Z"
  },
  "stock": 5,
  "activo": false,
  "__v": 0
}]);

// Crear una colección llamada ordenes
db.createCollection("ordenes")

//Datos de Ordenes
db.ordenes.insertMany([{
  "_id": {
    "$oid": "6718e084db624f0506f89e0b"
  },
  "fecha_creacion": {
    "$date": "2024-10-23T11:39:48.358Z"
  },
  "cliente_id": {
    "$oid": "671553364c33138a472436fc"
  },
  "total": 600,
  "productos": [
    {
      "producto_id": "67140a006c90c5136e7be660",
      "cantidad": 5
    }
  ],
  "status": "Pendiente",
  "items": 1,
  "__v": 0
},
{
  "_id": {
    "$oid": "6718e0fbdb624f0506f89e0d"
  },
  "fecha_creacion": {
    "$date": "2024-10-23T11:41:47.865Z"
  },
  "cliente_id": {
    "$oid": "671553364c33138a472436fc"
  },
  "total": 720,
  "productos": [
    {
      "producto_id": "67140a006c90c5136e7be660",
      "cantidad": 6
    }
  ],
  "status": "Pendiente",
  "items": 1,
  "__v": 0
},
{
  "_id": {
    "$oid": "6718ece988562ccb2c0fea32"
  },
  "fecha_creacion": {
    "$date": "2024-10-23T12:32:41.687Z"
  },
  "cliente_id": {
    "$oid": "6718e65edb624f0506f89e16"
  },
  "total": 720,
  "productos": [
    {
      "producto_id": "67140a006c90c5136e7be660",
      "cantidad": 3
    },
    {
      "producto_id": "67140a006c90c5136e7be660",
      "cantidad": 3
    }
  ],
  "status": "Pendiente",
  "items": 2,
  "__v": 0
},
{
  "_id": {
    "$oid": "6718ecee88562ccb2c0fea34"
  },
  "fecha_creacion": {
    "$date": "2024-10-23T12:32:46.197Z"
  },
  "cliente_id": {
    "$oid": "6718e65edb624f0506f89e16"
  },
  "total": 720,
  "productos": [
    {
      "producto_id": "67140a006c90c5136e7be660",
      "cantidad": 3
    },
    {
      "producto_id": "67140a006c90c5136e7be660",
      "cantidad": 3
    }
  ],
  "status": "Pendiente",
  "items": 2,
  "__v": 0
},
{
  "_id": {
    "$oid": "6718ecef88562ccb2c0fea36"
  },
  "fecha_creacion": {
    "$date": "2024-10-23T12:32:47.100Z"
  },
  "cliente_id": {
    "$oid": "6718e65edb624f0506f89e16"
  },
  "total": 720,
  "productos": [
    {
      "producto_id": "67140a006c90c5136e7be660",
      "cantidad": 3
    },
    {
      "producto_id": "67140a006c90c5136e7be660",
      "cantidad": 3
    }
  ],
  "status": "Pendiente",
  "items": 2,
  "__v": 0
},
{
  "_id": {
    "$oid": "6718ecef88562ccb2c0fea38"
  },
  "fecha_creacion": {
    "$date": "2024-10-23T12:32:47.921Z"
  },
  "cliente_id": {
    "$oid": "6718e65edb624f0506f89e16"
  },
  "total": 720,
  "productos": [
    {
      "producto_id": "67140a006c90c5136e7be660",
      "cantidad": 3
    },
    {
      "producto_id": "67140a006c90c5136e7be660",
      "cantidad": 3
    }
  ],
  "status": "Pendiente",
  "items": 2,
  "__v": 0
},
{
  "_id": {
    "$oid": "6718ecf088562ccb2c0fea3a"
  },
  "fecha_creacion": {
    "$date": "2024-10-23T12:32:48.797Z"
  },
  "cliente_id": {
    "$oid": "6718e65edb624f0506f89e16"
  },
  "total": 720,
  "productos": [
    {
      "producto_id": "67140a006c90c5136e7be660",
      "cantidad": 3
    },
    {
      "producto_id": "67140a006c90c5136e7be660",
      "cantidad": 3
    }
  ],
  "status": "Pendiente",
  "items": 2,
  "__v": 0
},
{
  "_id": {
    "$oid": "6718ecf188562ccb2c0fea3c"
  },
  "fecha_creacion": {
    "$date": "2024-10-23T12:32:49.480Z"
  },
  "cliente_id": {
    "$oid": "6718e65edb624f0506f89e16"
  },
  "total": 720,
  "productos": [
    {
      "producto_id": "67140a006c90c5136e7be660",
      "cantidad": 3
    },
    {
      "producto_id": "67140a006c90c5136e7be660",
      "cantidad": 3
    }
  ],
  "status": "Pendiente",
  "items": 2,
  "__v": 0
},
{
  "_id": {
    "$oid": "6718ecf288562ccb2c0fea3e"
  },
  "fecha_creacion": {
    "$date": "2024-10-23T12:32:50.296Z"
  },
  "cliente_id": {
    "$oid": "6718e65edb624f0506f89e16"
  },
  "total": 720,
  "productos": [
    {
      "producto_id": "67140a006c90c5136e7be660",
      "cantidad": 3
    },
    {
      "producto_id": "67140a006c90c5136e7be660",
      "cantidad": 3
    }
  ],
  "status": "Pendiente",
  "items": 2,
  "__v": 0
},
{
  "_id": {
    "$oid": "6718ecf388562ccb2c0fea40"
  },
  "fecha_creacion": {
    "$date": "2024-10-23T12:32:51.149Z"
  },
  "cliente_id": {
    "$oid": "6718e65edb624f0506f89e16"
  },
  "total": 720,
  "productos": [
    {
      "producto_id": "67140a006c90c5136e7be660",
      "cantidad": 3
    },
    {
      "producto_id": "67140a006c90c5136e7be660",
      "cantidad": 3
    }
  ],
  "status": "Pendiente",
  "items": 2,
  "__v": 0
},
{
  "_id": {
    "$oid": "6718ecf388562ccb2c0fea42"
  },
  "fecha_creacion": {
    "$date": "2024-10-23T12:32:51.930Z"
  },
  "cliente_id": {
    "$oid": "6718e65edb624f0506f89e16"
  },
  "total": 720,
  "productos": [
    {
      "producto_id": "67140a006c90c5136e7be660",
      "cantidad": 3
    },
    {
      "producto_id": "67140a006c90c5136e7be660",
      "cantidad": 3
    }
  ],
  "status": "Pendiente",
  "items": 2,
  "__v": 0
},
{
  "_id": {
    "$oid": "6718ecf488562ccb2c0fea44"
  },
  "fecha_creacion": {
    "$date": "2024-10-23T12:32:52.937Z"
  },
  "cliente_id": {
    "$oid": "6718e65edb624f0506f89e16"
  },
  "total": 720,
  "productos": [
    {
      "producto_id": "67140a006c90c5136e7be660",
      "cantidad": 3
    },
    {
      "producto_id": "67140a006c90c5136e7be660",
      "cantidad": 3
    }
  ],
  "status": "Pendiente",
  "items": 2,
  "__v": 0
},
{
  "_id": {
    "$oid": "6718ecf588562ccb2c0fea46"
  },
  "fecha_creacion": {
    "$date": "2024-10-23T12:32:53.794Z"
  },
  "cliente_id": {
    "$oid": "6718e65edb624f0506f89e16"
  },
  "total": 720,
  "productos": [
    {
      "producto_id": "67140a006c90c5136e7be660",
      "cantidad": 3
    },
    {
      "producto_id": "67140a006c90c5136e7be660",
      "cantidad": 3
    }
  ],
  "status": "Pendiente",
  "items": 2,
  "__v": 0
},
{
  "_id": {
    "$oid": "6718ecfc88562ccb2c0fea48"
  },
  "fecha_creacion": {
    "$date": "2024-10-23T12:33:00.209Z"
  },
  "cliente_id": {
    "$oid": "6718e65edb624f0506f89e16"
  },
  "total": 720,
  "productos": [
    {
      "producto_id": "67140a006c90c5136e7be660",
      "cantidad": 3
    },
    {
      "producto_id": "67140a006c90c5136e7be660",
      "cantidad": 3
    }
  ],
  "status": "Pendiente",
  "items": 2,
  "__v": 0
},
{
  "_id": {
    "$oid": "6718ed2588562ccb2c0fea4a"
  },
  "fecha_creacion": {
    "$date": "2024-10-23T12:33:41.567Z"
  },
  "cliente_id": {
    "$oid": "6718e65edb624f0506f89e16"
  },
  "total": 720,
  "productos": [
    {
      "producto_id": "67140a006c90c5136e7be660",
      "cantidad": 2
    },
    {
      "producto_id": "67140a006c90c5136e7be660",
      "cantidad": 2
    },
    {
      "producto_id": "67140a006c90c5136e7be660",
      "cantidad": 2
    }
  ],
  "status": "Pendiente",
  "items": 3,
  "__v": 0
},
{
  "_id": {
    "$oid": "6718ed2788562ccb2c0fea4c"
  },
  "fecha_creacion": {
    "$date": "2024-10-23T12:33:43.484Z"
  },
  "cliente_id": {
    "$oid": "6718e65edb624f0506f89e16"
  },
  "total": 720,
  "productos": [
    {
      "producto_id": "67140a006c90c5136e7be660",
      "cantidad": 2
    },
    {
      "producto_id": "67140a006c90c5136e7be660",
      "cantidad": 2
    },
    {
      "producto_id": "67140a006c90c5136e7be660",
      "cantidad": 2
    }
  ],
  "status": "Pendiente",
  "items": 3,
  "__v": 0
},
{
  "_id": {
    "$oid": "6718ed2888562ccb2c0fea4e"
  },
  "fecha_creacion": {
    "$date": "2024-10-23T12:33:44.823Z"
  },
  "cliente_id": {
    "$oid": "6718e65edb624f0506f89e16"
  },
  "total": 720,
  "productos": [
    {
      "producto_id": "67140a006c90c5136e7be660",
      "cantidad": 2
    },
    {
      "producto_id": "67140a006c90c5136e7be660",
      "cantidad": 2
    },
    {
      "producto_id": "67140a006c90c5136e7be660",
      "cantidad": 2
    }
  ],
  "status": "Pendiente",
  "items": 3,
  "__v": 0
},
{
  "_id": {
    "$oid": "6718ed2988562ccb2c0fea50"
  },
  "fecha_creacion": {
    "$date": "2024-10-23T12:33:45.928Z"
  },
  "cliente_id": {
    "$oid": "6718e65edb624f0506f89e16"
  },
  "total": 720,
  "productos": [
    {
      "producto_id": "67140a006c90c5136e7be660",
      "cantidad": 2
    },
    {
      "producto_id": "67140a006c90c5136e7be660",
      "cantidad": 2
    },
    {
      "producto_id": "67140a006c90c5136e7be660",
      "cantidad": 2
    }
  ],
  "status": "Pendiente",
  "items": 3,
  "__v": 0
},
{
  "_id": {
    "$oid": "6718ed2c88562ccb2c0fea52"
  },
  "fecha_creacion": {
    "$date": "2024-10-23T12:33:48.048Z"
  },
  "cliente_id": {
    "$oid": "6718e65edb624f0506f89e16"
  },
  "total": 720,
  "productos": [
    {
      "producto_id": "67140a006c90c5136e7be660",
      "cantidad": 2
    },
    {
      "producto_id": "67140a006c90c5136e7be660",
      "cantidad": 2
    },
    {
      "producto_id": "67140a006c90c5136e7be660",
      "cantidad": 2
    }
  ],
  "status": "Pendiente",
  "items": 3,
  "__v": 0
}]);


