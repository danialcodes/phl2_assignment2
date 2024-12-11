import cors from 'cors';
import express, { Application, Request, Response } from 'express';

import { ProductRoutes } from './app/modules/product/product.route';
import { OrderRoutes } from './app/modules/order/order.route';

const app: Application = express();

// parsers
app.use(express.json());
app.use(cors());

// application routes
app.use('/api/products', ProductRoutes);
app.use('/api/orders', OrderRoutes);

// default route
app.get('/', (req: Request, res: Response) => {
    res.send(
        "<html><head><title>Bookshop API</title></head><body style='width:100vw;display:flex;justify-content:center;align-items:center'><h1 style='color:green'>Welcome to Bookshop Api</h1></body></html>",
    );
});

// invalid routes
app.get('*', (req: Request, res: Response) => {
    res.send(
        "<html><head><title>Bookshop API</title></head><body style='width:100vw;display:flex;justify-content:center;align-items:center'><h1 style='color:red'>Wrong Api Endpoint</h1></body></html>",
    );
});
export default app;
