"use strict";
Object.defineProperty(exports, "__esModule", { value: true });
const zod_1 = require("zod");
// zod validation schema for product
const ProductValidationSchema = zod_1.z.object({
    title: zod_1.z.string({ message: 'Product title is required' }),
    author: zod_1.z.string({ message: 'Author name is required' }),
    price: zod_1.z
        .number({ message: 'Price needs to be a number' })
        .positive('Price needs to be a positive number'),
    category: zod_1.z.enum(['Fiction', 'Science', 'SelfDevelopment', 'Poetry', 'Religious'], { message: 'Product category is not valid' }),
    description: zod_1.z.string({ message: 'Product descreption is required' }),
    quantity: zod_1.z
        .number({ message: 'Quantity needs to be a number' })
        .int("Quantity can't be fraction amount")
        .positive('Quantity needs to be a positive number'),
    inStock: zod_1.z.boolean({ message: 'Product availability is required' }),
});
exports.default = ProductValidationSchema;
