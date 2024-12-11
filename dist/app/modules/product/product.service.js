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
exports.ProductServices = void 0;
const product_model_1 = require("./product.model");
const createProductIntoDB = (productData) => __awaiter(void 0, void 0, void 0, function* () {
    const newProduct = new product_model_1.Product(productData);
    const result = yield newProduct.save();
    return result;
});
const getAllProductsFromDB = (searchTerm) => __awaiter(void 0, void 0, void 0, function* () {
    if (searchTerm) {
        return yield product_model_1.Product.find({
            $or: [
                { title: { $regex: searchTerm, $options: 'i' } },
                { author: { $regex: searchTerm, $options: 'i' } },
                { category: { $regex: searchTerm, $options: 'i' } },
            ],
        });
    }
    return yield product_model_1.Product.find();
});
const getSingleProductsFromDB = (id) => __awaiter(void 0, void 0, void 0, function* () {
    const result = yield product_model_1.Product.findOne({ _id: id });
    return result;
});
const deleteSingleProductFromDB = (id) => __awaiter(void 0, void 0, void 0, function* () {
    const result = yield product_model_1.Product.deleteOne({ _id: id });
    if (!result.deletedCount) {
        throw new Error('Book not found');
    }
    return result;
});
const updateSingleProductIntoDB = (id, productData) => __awaiter(void 0, void 0, void 0, function* () {
    const result = yield product_model_1.Product.findOneAndUpdate({ _id: id }, productData, {
        new: true,
    });
    return result;
});
const productUpdateWhileOrder = (productId, quantity, totalPrice) => __awaiter(void 0, void 0, void 0, function* () {
    const product = yield getSingleProductsFromDB(productId);
    if (!product) {
        throw new Error('Product not found');
    }
    else if (!product.inStock || product.quantity < quantity) {
        throw new Error('Insufficient product stock');
    }
    else if (product.price * quantity > totalPrice) {
        throw new Error('Not enough balance to buy the product');
    }
    else {
        const productUpdateInfo = {
            quantity: product.quantity - quantity,
        };
        if (product.quantity === quantity) {
            productUpdateInfo.inStock = false;
        }
        const result = yield product_model_1.Product.findOneAndUpdate({ _id: productId }, productUpdateInfo, { new: true });
        return result;
    }
});
exports.ProductServices = {
    createProductIntoDB,
    getAllProductsFromDB,
    getSingleProductsFromDB,
    updateSingleProductIntoDB,
    deleteSingleProductFromDB,
    productUpdateWhileOrder,
};
