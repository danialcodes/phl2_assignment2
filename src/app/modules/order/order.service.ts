import { ProductServices } from './../product/product.service';
import { IOrder } from "./order.interface";
import { Order } from './order.model';


const createOrderIntoDB = async (orderData: IOrder) => {


    const {product:productId, quantity, totalPrice} = orderData;

    await ProductServices.productUpdateWhileOrder(String(productId), quantity, totalPrice);

    const result = await Order.create(orderData);

    return result;
    
};

const calculateRevenueFromOrders = async () => {
    
    const orders = await Order.aggregate([
        {
            $lookup: {
              from: "products",       
              localField: "product", 
              foreignField: "_id",
              as: "productDetails"
            }
          },
        {
            $unwind: "$productDetails" 
        },
        {
            $group:{
                _id: null,
                totalRevenue: { $sum: { $multiply: [ '$quantity', '$productDetails.price' ] } }
            }
        },
        {
            $project : {
                _id:0,
                totalRevenue: 1
            }
        }
        
    ]);
    
    return orders;
}

export const OrderServices = {
    createOrderIntoDB,
    calculateRevenueFromOrders
}