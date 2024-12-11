
import { Request, Response } from "express";
import { ProductServices } from "./product.service";
import ProductValidationSchema from "./product.validation";
import ErrorResponse from "../../utils/ErrorResponse";


// product controller functions

const createProduct = async (req: Request, res: Response) => {
    try {
        const productData = req.body;

        const zodParsedData = ProductValidationSchema.parse(productData);

        const result = await ProductServices.createProductIntoDB(zodParsedData);

        res.status(200).json({
            message: "Book created successfully",
            success: true,
            data: result
        });
    } catch (err) {
        res.status(500).json(ErrorResponse(err));
    }
};



const getAllProducts = async (req: Request, res: Response) => {
    try{

        const {searchTerm} = req.query;
        
        const result = await ProductServices.getAllProductsFromDB(searchTerm as string);

        res.status(200).json({
            message: "Books retrieved successfully",
            status: true,
            data: result
        });
    } catch(err){
        res.status(500).json(ErrorResponse(err));

    }
}

const getSingleProduct = async (req: Request, res: Response) => {
    try{
        const {productId} = req.params;
        
        const result = await ProductServices.getSingleProductsFromDB(productId);

        res.status(200).json({
            message: "Book retrieved successfully",
            status: true,
            data: result
        });
    } catch(err){
        res.status(500).json(ErrorResponse(err));
    }
}

const deleteSingleProduct = async (req: Request, res: Response) => {
    try{
        const {productId} = req.params;
        await ProductServices.deleteSingleProductFromDB(productId);

        res.status(200).json({
            message: "Book deleted successfully",
            status: true,
            data: {}
        });
        
    } catch(err){
        res.status(404).json(ErrorResponse(err));
    }
};

const updateSingleProduct = async (req: Request, res: Response) => {
    try{
        const {productId} = req.params;
        const productData = req.body;

        const result = await ProductServices.updateSingleProductIntoDB(productId, productData);
        res.status(200).json({
            message: "Book updated successfully",
            status: true,
            data: result
        });
    } catch(err){
        res.status(500).json(ErrorResponse(err));
    }
};

export const ProductsControllers = {
    createProduct,
    getAllProducts,
    getSingleProduct,
    updateSingleProduct,
    deleteSingleProduct
};