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
var __importDefault = (this && this.__importDefault) || function (mod) {
    return (mod && mod.__esModule) ? mod : { "default": mod };
};
Object.defineProperty(exports, "__esModule", { value: true });
exports.OrderControllers = void 0;
const order_validation_1 = require("./order.validation");
const order_service_1 = require("./order.service");
const ErrorResponse_1 = __importDefault(require("../../utils/ErrorResponse"));
const createOrder = (req, res) => __awaiter(void 0, void 0, void 0, function* () {
    try {
        const orderData = req.body;
        const zodParsedData = order_validation_1.OrderValidationSchema.parse(orderData);
        const result = yield order_service_1.OrderServices.createOrderIntoDB(zodParsedData);
        res.status(200).json({
            message: 'Order created successfully',
            status: true,
            data: result,
        });
    }
    catch (err) {
        res.status(500).json((0, ErrorResponse_1.default)(err));
    }
});
const calculateRevenue = (req, res) => __awaiter(void 0, void 0, void 0, function* () {
    try {
        const result = yield order_service_1.OrderServices.calculateRevenueFromOrders();
        res.status(200).json({
            message: 'Revenue calculated successfully',
            status: true,
            data: result,
        });
    }
    catch (err) {
        res.status(500).json((0, ErrorResponse_1.default)(err));
    }
});
exports.OrderControllers = {
    createOrder,
    calculateRevenue,
};
