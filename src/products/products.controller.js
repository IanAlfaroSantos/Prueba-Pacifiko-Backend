import axios from 'axios';
import {
    syncProductsQuery,
    getProductsQuery,
    countProductsQuery,
    getProductByIdQuery
} from './products.model.js';

let pool;

export const setPool = (dbPool) => {
    pool = dbPool;
}

export const syncProducts = async (req, res) => {
    try {
        const { data: products } = await axios.get('https://fakestoreapi.com/products');

        for (const product of products) {
            await pool.query(syncProductsQuery, [
                product.id,
                product.title,
                product.price,
                product.category,
                'fakestore'
            ]);
        }

        return res.status(200).json({
            success: true,
            message: '¡Productos sincronizados exitosamente!'
        });

    } catch (error) {
        return res.status(500).json({
            success: false,
            message: 'Error al sincronizar productos',
            error: error.message
        });
    }
}

export const getProducts = async (req, res) => {
    try {
        const { limite = 10, desde = 0 } = req.query;

        const [totalResult] = await pool.query(countProductsQuery);
        const [products] = await pool.query(getProductsQuery, [
            Number(limite),
            Number(desde)
        ]);

        return res.status(200).json({
            success: true,
            total: totalResult[0].total,
            message: '¡Productos obtenidos exitosamente!',
            products
        });

    } catch (error) {
        return res.status(500).json({
            success: false,
            message: 'Error al obtener productos',
            error: error.message
        });
    }
}

export const getProductById = async (req, res) => {
    try {
        const { id } = req.params;

        const [product] = await pool.query(getProductByIdQuery, [id]);

        if (product.length === 0) {
            return res.status(404).json({
                success: false,
                msg: '¡Producto no encontrado!'
            });
        }

        return res.status(200).json({
            success: true,
            msg: '¡Producto obtenido exitosamente!',
            product: product[0]
        });

    } catch (error) {
        return res.status(500).json({
            success: false,
            msg: 'Error al obtener producto',
            error: error.message
        });
    }
}