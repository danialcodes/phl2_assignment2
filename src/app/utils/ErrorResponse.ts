import { z } from "zod";

const ErrorResponse = (error:any,message:string="Something went wrong") => {

    return {
            message : error instanceof z.ZodError ? "Validation Error" : error.message || message,
            success: false,
            error: {
                name: error.name,
                errors: error.errors,
            },
            stack: error.stack,
    }
}
export default ErrorResponse;
