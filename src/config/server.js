import express from 'express';
import cors from 'cors';
import helmet from 'helmet';
import morgan from 'morgan';
import productRoutes from '../products/products.routes.js';
import cartRoutes from '../cart/cart.routes.js';
import { dbConnection } from '../db/connection.js';
import { setPool } from '../products/products.controller.js';
import { setCartPool } from '../cart/cart.controller.js';

const middlewares = (app) => {
    app.use(express.urlencoded({ extended: false }));
    app.use(cors());
    app.use(express.json());
    app.use(helmet());
    app.use(morgan('dev'));
};

const routes = (app) => {
    app.use('/catalog/v1/products', productRoutes);
    app.use('/catalog/v1/cart', cartRoutes);
};

const conectarDB = async () => {
    try {
        const pool = await dbConnection();
        setPool(pool);
        setCartPool(pool);
    } catch (error) {
        console.error('Error al conectar a la base de datos:', error);
        process.exit(1);
    }
};

export const initServer = async () => {
    const app = express();
    const port = process.env.PORT || 3000;

    try {
        middlewares(app);
        await conectarDB();
        routes(app);
        app.listen(port);
        console.log(`Server running on port ${port}`);
    } catch (error) {
        console.log(`Server init failed: ${error}`);
    }
};