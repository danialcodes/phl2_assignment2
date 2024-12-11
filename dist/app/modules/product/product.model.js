"use strict";
Object.defineProperty(exports, "__esModule", { value: true });
exports.Product = void 0;
const mongoose_1 = require("mongoose");
const ProductSchema = new mongoose_1.Schema({
    title: {
        type: String,
        required: true,
        message: 'The title of the Book is required',
    },
    author: {
        type: String,
        required: true,
        message: 'The author name of the Book is required',
    },
    price: {
        type: Number,
        required: true,
        message: 'The price of the Book is required',
    },
    category: {
        type: String,
        enum: [
            'Fiction',
            'Science',
            'SelfDevelopment',
            'Poetry',
            'Religious',
        ],
        required: true,
        message: '{VALUE} is not a valid category',
    },
    description: {
        type: String,
        required: true,
        message: 'The description of the Book is required',
    },
    quantity: {
        type: Number,
        required: true,
        message: 'The quantity of the Book is required',
        min: [0, 'Quantity cannot be negative'],
    },
    inStock: {
        type: Boolean,
        required: true,
        message: 'The availability of the Book is required',
        default: true,
    },
}, { timestamps: true, versionKey: false });
exports.Product = (0, mongoose_1.model)('Product', ProductSchema);
