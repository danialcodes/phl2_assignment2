import mongoose from 'mongoose';
import { z } from 'zod';

// zod validation schema for order
export const OrderValidationSchema = z.object({
    email: z.string().email(),
    product: z
        .string()
        .refine((value) => mongoose.isValidObjectId(value), {
            message: 'Invalid ObjectId',
        }),
    quantity: z.number().int().positive(),
    totalPrice: z.number().positive(),
});

export default OrderValidationSchema;
