
import { Request, Response } from "express";
import { OrderValidationSchema } from "./order.validation";
import { OrderServices } from "./order.service";
import ErrorResponse from "../../utils/ErrorResponse";



const createOrder = async (req: Request, res: Response) => {
   try{
    const orderData = req.body;

    const zodParsedData = OrderValidationSchema.parse(orderData); 
    

    const result = await OrderServices.createOrderIntoDB(zodParsedData as any);

    res.status(200).json({
        message: "Order created successfully",
        status: true,
        data: result
    });
   } catch(err){
    
       res.status(500).json(ErrorResponse(err));
   }
};

const calculateRevenue = async (req: Request, res: Response) => {
    try{
        const result = await OrderServices.calculateRevenueFromOrders();
        res.status(200).json({
            message: "Revenue calculated successfully",
            status: true,
            data: result
        });
    } catch(err){
        res.status(500).json(ErrorResponse(err));
    }
}

export const OrderControllers = {
    createOrder,
    calculateRevenue
};