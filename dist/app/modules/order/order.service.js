"use strict";
var __awaiter = (this && this.__awaiter) || function (thisArg, _arguments, P, generator) {
    function adopt(value) { return value instanceof P ? value : new P(function (resolve) { resolve(value); }); }
    return new (P || (P = Promise))(function (resolve, reject) {
        function fulfilled(value) { try { step(generator.next(value)); } catch (e) { reject(e); } }
        function rejected(value) { try { step(generator["throw"](value)); } catch (e) { reject(e); } }
        function step(result) { result.done ? resolve(result.value) : adopt(result.value).then(fulfilled, rejected); }
        step((generator = generator.apply(thisArg, _arguments || [])).next());
    });
};
Object.defineProperty(exports, "__esModule", { value: true });
exports.OrderServices = void 0;
const product_service_1 = require("./../product/product.service");
const order_model_1 = require("./order.model");
const createOrderIntoDB = (orderData) => __awaiter(void 0, void 0, void 0, function* () {
    const { product: productId, quantity, totalPrice } = orderData;
    yield product_service_1.ProductServices.productUpdateWhileOrder(String(productId), quantity, totalPrice);
    const result = yield order_model_1.Order.create(orderData);
    return result;
});
const calculateRevenueFromOrders = () => __awaiter(void 0, void 0, void 0, function* () {
    const orders = yield order_model_1.Order.aggregate([
        {
            $lookup: {
                from: 'products',
                localField: 'product',
                foreignField: '_id',
                as: 'productDetails',
            },
        },
        {
            $unwind: '$productDetails',
        },
        {
            $group: {
                _id: null,
                totalRevenue: {
                    $sum: { $multiply: ['$quantity', '$productDetails.price'] },
                },
            },
        },
        {
            $project: {
                _id: 0,
                totalRevenue: 1,
            },
        },
    ]);
    return orders;
});
exports.OrderServices = {
    createOrderIntoDB,
    calculateRevenueFromOrders,
};
