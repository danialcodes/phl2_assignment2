import express from 'express';
import { OrderControllers } from './order.controller';

const router = express.Router();

// api endpoint for orders [api/orders/]

router.post('/', OrderControllers.createOrder);
router.get('/revenue', OrderControllers.calculateRevenue);

export const OrderRoutes = router;
