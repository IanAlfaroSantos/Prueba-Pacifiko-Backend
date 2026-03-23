import {
    findProductByIdQuery,
    findCartItemByProductIdQuery,
    insertCartItemQuery,
    updateCartItemQuantityQuery,
    getCartQuery,
    deleteCartItemQuery,
    clearCartQuery
} from './cart.model.js';

let pool;

export const setCartPool = (dbPool) => {
    pool = dbPool;
};

export const addToCart = async (req, res) => {
    try {
        const { productId, quantity = 1 } = req.body;

        if (!productId) {
            return res.status(400).json({
                success: false,
                message: 'El productId es obligatorio'
            });
        }

        if (Number(quantity) < 1) {
            return res.status(400).json({
                success: false,
                message: 'La cantidad debe ser mayor o igual a 1'
            });
        }

        const [productRows] = await pool.query(findProductByIdQuery, [productId]);

        if (productRows.length === 0) {
            return res.status(404).json({
                success: false,
                message: 'El producto no existe'
            });
        }

        const [cartRows] = await pool.query(findCartItemByProductIdQuery, [productId]);

        if (cartRows.length > 0) {
            await pool.query(updateCartItemQuantityQuery, [Number(quantity), productId]);

            return res.status(200).json({
                success: true,
                message: '¡Cantidad actualizada en el carrito!'
            });
        }

        await pool.query(insertCartItemQuery, [productId, Number(quantity)]);

        return res.status(201).json({
            success: true,
            message: '¡Producto agregado al carrito!'
        });

    } catch (error) {
        return res.status(500).json({
            success: false,
            message: 'Error al agregar al carrito',
            error: error.message
        });
    }
};

export const getCart = async (req, res) => {
    try {
        const [cartItems] = await pool.query(getCartQuery);

        const total = cartItems.reduce((acc, item) => acc + Number(item.subtotal), 0);

        return res.status(200).json({
            success: true,
            message: '¡Carrito obtenido exitosamente!',
            totalItems: cartItems.length,
            totalAmount: Number(total.toFixed(2)),
            cart: cartItems
        });

    } catch (error) {
        return res.status(500).json({
            success: false,
            message: 'Error al obtener el carrito',
            error: error.message
        });
    }
};

export const deleteCartItem = async (req, res) => {
    try {
        const { id } = req.params;

        const [result] = await pool.query(deleteCartItemQuery, [id]);

        if (result.affectedRows === 0) {
            return res.status(404).json({
                success: false,
                message: 'Item del carrito no encontrado'
            });
        }

        return res.status(200).json({
            success: true,
            message: '¡Item eliminado del carrito!'
        });

    } catch (error) {
        return res.status(500).json({
            success: false,
            message: 'Error al eliminar item del carrito',
            error: error.message
        });
    }
};

export const clearCart = async (req, res) => {
    try {
        await pool.query(clearCartQuery);

        return res.status(200).json({
            success: true,
            message: '¡Carrito vaciado exitosamente!'
        });

    } catch (error) {
        return res.status(500).json({
            success: false,
            message: 'Error al vaciar el carrito',
            error: error.message
        });
    }
};