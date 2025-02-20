import { Router } from 'express';
import { protect, adminOnly } from '../middleware/auth.middleware.js';
import {
  getAllProducts,
  createProduct,
  updateProduct,
  deleteProduct
} from '../controllers/shop/shop.controller.js';

const router = Router();

router.get('/products', getAllProducts);
router.post('/products', protect, adminOnly, createProduct);
router.put('/products/:id', protect, adminOnly, updateProduct);
router.delete('/products/:id', protect, adminOnly, deleteProduct);

export default router;
