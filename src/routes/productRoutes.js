import express from 'express';
import { ProductController } from '../controllers/productController.js';

const router = express.Router();
const productController = new ProductController();

router.get('/products', productController.List);
router.post('/products', productController.create);
router.put('/products/:id', productController.update);
router.delete('/products/:id', productController.delete);

export default router;

