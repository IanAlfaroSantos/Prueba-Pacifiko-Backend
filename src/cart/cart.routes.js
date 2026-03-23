import { Router } from 'express';
import {
    addToCart,
    getCart,
    deleteCartItem,
    clearCart
} from './cart.controller.js';

const router = Router();

router.post('/', addToCart);
router.get('/', getCart);
router.delete('/:id', deleteCartItem);
router.delete('/', clearCart);

export default router;