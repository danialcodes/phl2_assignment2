import { z } from 'zod';

import OrderValidationSchema from './order.validation';
import { Schema } from 'mongoose';

// Order interface derived from zod validation schema
export type IOrder = Omit<z.infer<typeof OrderValidationSchema>, 'product'> & {
    product: typeof Schema.Types.ObjectId;
};
