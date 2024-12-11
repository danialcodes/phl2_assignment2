"use strict";
var __importDefault = (this && this.__importDefault) || function (mod) {
    return (mod && mod.__esModule) ? mod : { "default": mod };
};
Object.defineProperty(exports, "__esModule", { value: true });
exports.OrderValidationSchema = void 0;
const mongoose_1 = __importDefault(require("mongoose"));
const zod_1 = require("zod");
// zod validation schema for order
exports.OrderValidationSchema = zod_1.z.object({
    email: zod_1.z.string().email(),
    product: zod_1.z
        .string()
        .refine((value) => mongoose_1.default.isValidObjectId(value), {
        message: 'Invalid ObjectId',
    }),
    quantity: zod_1.z.number().int().positive(),
    totalPrice: zod_1.z.number().positive(),
});
exports.default = exports.OrderValidationSchema;
