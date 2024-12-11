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
exports.ProductsControllers = void 0;
const product_service_1 = require("./product.service");
const product_validation_1 = __importDefault(require("./product.validation"));
const ErrorResponse_1 = __importDefault(require("../../utils/ErrorResponse"));
// product controller functions
const createProduct = (req, res) => __awaiter(void 0, void 0, void 0, function* () {
    try {
        const productData = req.body;
        const zodParsedData = product_validation_1.default.parse(productData);
        const result = yield product_service_1.ProductServices.createProductIntoDB(zodParsedData);
        res.status(200).json({
            message: 'Book created successfully',
            success: true,
            data: result,
        });
    }
    catch (err) {
        res.status(500).json((0, ErrorResponse_1.default)(err));
    }
});
const getAllProducts = (req, res) => __awaiter(void 0, void 0, void 0, function* () {
    try {
        const { searchTerm } = req.query;
        const result = yield product_service_1.ProductServices.getAllProductsFromDB(searchTerm);
        res.status(200).json({
            message: 'Books retrieved successfully',
            status: true,
            data: result,
        });
    }
    catch (err) {
        res.status(500).json((0, ErrorResponse_1.default)(err));
    }
});
const getSingleProduct = (req, res) => __awaiter(void 0, void 0, void 0, function* () {
    try {
        const { productId } = req.params;
        const result = yield product_service_1.ProductServices.getSingleProductsFromDB(productId);
        res.status(200).json({
            message: 'Book retrieved successfully',
            status: true,
            data: result,
        });
    }
    catch (err) {
        res.status(500).json((0, ErrorResponse_1.default)(err));
    }
});
const deleteSingleProduct = (req, res) => __awaiter(void 0, void 0, void 0, function* () {
    try {
        const { productId } = req.params;
        yield product_service_1.ProductServices.deleteSingleProductFromDB(productId);
        res.status(200).json({
            message: 'Book deleted successfully',
            status: true,
            data: {},
        });
    }
    catch (err) {
        res.status(404).json((0, ErrorResponse_1.default)(err));
    }
});
const updateSingleProduct = (req, res) => __awaiter(void 0, void 0, void 0, function* () {
    try {
        const { productId } = req.params;
        const productData = req.body;
        const result = yield product_service_1.ProductServices.updateSingleProductIntoDB(productId, productData);
        res.status(200).json({
            message: 'Book updated successfully',
            status: true,
            data: result,
        });
    }
    catch (err) {
        res.status(500).json((0, ErrorResponse_1.default)(err));
    }
});
exports.ProductsControllers = {
    createProduct,
    getAllProducts,
    getSingleProduct,
    updateSingleProduct,
    deleteSingleProduct,
};
