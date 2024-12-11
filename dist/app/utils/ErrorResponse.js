"use strict";
Object.defineProperty(exports, "__esModule", { value: true });
const zod_1 = require("zod");
const ErrorResponse = (error, message = 'Something went wrong') => {
    return {
        message: error instanceof zod_1.z.ZodError
            ? 'Validation Error'
            : error.message || message,
        success: false,
        error: {
            name: error.name,
            errors: error.errors,
        },
        stack: error.stack,
    };
};
exports.default = ErrorResponse;
