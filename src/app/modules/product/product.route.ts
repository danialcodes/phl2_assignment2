import express from 'express';
import { ProductsControllers } from './product.controller';

const router = express.Router();

// api endpoint for products [api/products/]

router.get('/', ProductsControllers.getAllProducts);
router.post('/', ProductsControllers.createProduct);

router.get('/:productId', ProductsControllers.getSingleProduct);
router.put('/:productId', ProductsControllers.updateSingleProduct);
router.delete('/:productId', ProductsControllers.deleteSingleProduct);

export const ProductRoutes = router;
