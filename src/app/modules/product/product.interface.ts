import { z } from 'zod';
import ProductValidationSchema from './product.validation';

// Product type derived from zod validation schema
export type IProduct = z.infer<typeof ProductValidationSchema>;
