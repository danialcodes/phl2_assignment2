import { Schema, model } from 'mongoose';
import { IProduct } from './product.interface';

const ProductSchema = new Schema<IProduct>(
    {
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
    },
    { timestamps: true, versionKey: false },
);

export const Product = model<IProduct>('Product', ProductSchema);
