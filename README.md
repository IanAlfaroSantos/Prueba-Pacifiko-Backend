# Prueba Pacifiko Backend
Utlización de APIs, catalogo de productos mini.

Mini API desarrollada con **Node.js**, **Express**, **MySQL** y **Axios** para sincronizar productos desde **FakeStoreAPI** y almacenarlos en una base de datos SQL local.

## Objetivo

Construir una mini app backend que:

- consuma una API pública de productos,
- almacene los productos en MySQL,
- permita sincronizar información sin duplicados,
- liste productos con paginación,
- muestre el detalle de un producto por id.
- implemente una funcionalidad básica de carrito (add to cart, listar, eliminar y vaciar carrito).

## Tecnologías utilizadas

- Node.js
- Express
- MySQL
- mysql2
- Axios
- Dotenv
- Nodemon
- Cors
- Helmet
- Morgan

## Ejecución del proyecto
    ·Instalar dependencias:
        ·npm install
    ·Ejecutar schema.sql
    ·Revisar credenciales de MySQL (se cambian en connection.js si fuera necesario)
    ·Copilar Backend
        ·npm run dev
    ·Probar ENDPOINTS: abrir Postman e importar collects de la carpeta postman/ o bien hacerlo manual con los siguientes pasos.

El servidor se ejecuta por defecto desde: http://localhost:3000

## ENDPOINTS PRODUCTS
## Sincronizar productos desde FakeStoreAPI
GET /catalog/v1/products/sync

Ejemplo: http://localhost:3000/catalog/v1/products/sync

## Listar productos con paginación
GET /catalog/v1/products?limite=10&desde=0

Ejemplo: http://localhost:3000/catalog/v1/products?limite=10&desde=0

Parámetros:
    ·limite: cantidad de registros a mostrar
    ·desde: desplazamiento inicial

## Obtener detalle de un producto por id
GET /catalog/v1/products/:id

Ejemplo: http://localhost:3000/catalog/v1/products/4


## ENDPOINTS CART
## Agregar producto al carrito
POST /catalog/v1/cart

RAW-JSON ejemplo:
{
  "productId": 2,
  "quantity": 4
}

Ejemplo: http://localhost:3000/catalog/v1/cart

## Obtener carrito
GET /catalog/v1/cart

Ejemplo: http://localhost:3000/catalog/v1/cart

## Eliminar item del carrito
DELETE /catalog/v1/cart/:id

Ejemplo: http://localhost:3000/catalog/v1/cart/3

## Vaciar carrito
DELETE /catalog/v1/cart

Ejemplo: http://localhost:3000/catalog/v1/cart


## Estructura del proyecto

```bash
prueba-pacifiko-backend/
│
├── sql/
│   ├── schema.sql
│   ├── q1.sql
│   └── q2.sql
│
├── src/
│   ├── config/
│   │   └── server.js
│   ├── db/
│   │   └── connection.js
│   ├── products/
│   │   ├── products.controller.js
│   │   ├── products.model.js
│   │   └── products.routes.js
│   └── cart/
│       ├── cart.controller.js
│       ├── cart.model.js
│       └── cart.routes.js
│
├── postman/
│   ├── Cart.postman_collection.json
│   └── Products.postman_collection.json
│
├── .gitignore
├── index.js
├── package.json
├── prompt.md
├── prompt_notes.md
└── README.md
```

## Validaciones realizadas
    ·Se verificó la sincronización de productos desde FakeStoreAPI.
    ·Se ejecutó varias veces el endpoint /sync y no se generaron duplicados.
    ·Se probó el listado con paginación.
    ·Se probó el detalle por id.
    ·Se ejecutaron correctamente schema.sql, q1.sql, q2.sql en MySQL.
    ·Se validó el módulo de carrito agregando productos, consultando el carrito y eliminando items.

## Colección de Postman
Se incluyen colecciones de Postman en la carpeta postman/ con los endpoints principales del proyecto.

## Observación final
El proyecto implementa la Parte A solicitada en la prueba técnica y cubre la Parte B mediante una solución backend funcional con endpoints de carrito y persistencia en MySQL.