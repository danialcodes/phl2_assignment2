"use strict";
var __importDefault = (this && this.__importDefault) || function (mod) {
    return (mod && mod.__esModule) ? mod : { "default": mod };
};
Object.defineProperty(exports, "__esModule", { value: true });
const cors_1 = __importDefault(require("cors"));
const express_1 = __importDefault(require("express"));
const product_route_1 = require("./app/modules/product/product.route");
const order_route_1 = require("./app/modules/order/order.route");
const app = (0, express_1.default)();
// parsers
app.use(express_1.default.json());
app.use((0, cors_1.default)());
// application routes
app.use('/api/products', product_route_1.ProductRoutes);
app.use('/api/orders', order_route_1.OrderRoutes);
// default route
app.get('/', (req, res) => {
    res.send("<html><head><title>Bookshop API</title></head><body style='width:100vw;display:flex;justify-content:center;align-items:center'><h1 style='color:green'>Welcome to Bookshop Api</h1></body></html>");
});
// invalid routes
app.get('*', (req, res) => {
    res.send("<html><head><title>Bookshop API</title></head><body style='width:100vw;display:flex;justify-content:center;align-items:center'><h1 style='color:red'>Wrong Api Endpoint</h1></body></html>");
});
exports.default = app;
