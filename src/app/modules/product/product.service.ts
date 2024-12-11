import { Product } from './product.model';
import { IProduct } from './product.interface';

const createProductIntoDB = async (productData: IProduct) => {
    const newProduct = new Product(productData);
    const result = await newProduct.save();
    return result;
};

const getAllProductsFromDB = async (searchTerm: string | undefined) => {
    if (searchTerm) {
        return await Product.find({
            $or: [
                { title: { $regex: searchTerm, $options: 'i' } },
                { author: { $regex: searchTerm, $options: 'i' } },
                { category: { $regex: searchTerm, $options: 'i' } },
            ],
        });
    }
    return await Product.find();
};

const getSingleProductsFromDB = async (id: string) => {
    const result = await Product.findOne({ _id: id });
    return result;
};

const deleteSingleProductFromDB = async (id: string) => {
    const result = await Product.deleteOne({ _id: id });

    if (!result.deletedCount) {
        throw new Error('Book not found');
    }

    return result;
};

const updateSingleProductIntoDB = async (id: string, productData: IProduct) => {
    const result = await Product.findOneAndUpdate({ _id: id }, productData, {
        new: true,
    });
    return result;
};

const productUpdateWhileOrder = async (
    productId: string,
    quantity: number,
    totalPrice: number,
) => {
    const product = await getSingleProductsFromDB(productId);

    if (!product) {
        throw new Error('Product not found');
    } else if (!product.inStock || product.quantity < quantity) {
        throw new Error('Insufficient product stock');
    } else if (product.price * quantity > totalPrice) {
        throw new Error('Not enough balance to buy the product');
    } else {
        const productUpdateInfo: { quantity: number; inStock?: boolean } = {
            quantity: product.quantity - quantity,
        };

        if (product.quantity === quantity) {
            productUpdateInfo.inStock = false;
        }

        const result = await Product.findOneAndUpdate(
            { _id: productId },
            productUpdateInfo,
            { new: true },
        );

        return result;
    }
};

export const ProductServices = {
    createProductIntoDB,
    getAllProductsFromDB,
    getSingleProductsFromDB,
    updateSingleProductIntoDB,
    deleteSingleProductFromDB,
    productUpdateWhileOrder,
};
