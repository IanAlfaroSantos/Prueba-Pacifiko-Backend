import { Router } from 'express';
import {
    syncProducts,
    getProducts,
    getProductById
} from './products.controller.js';

const router = Router();

router.get('/sync', syncProducts);
router.get('/', getProducts);
router.get('/:id', getProductById);

export default router;