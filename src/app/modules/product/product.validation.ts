import { z } from 'zod';

// zod validation schema for product
const ProductValidationSchema = z.object({
  title: z.string({message: "Product title is required"}),
  author: z.string({message: "Author name is required"}),
  price: z.number({message:"Price needs to be a number"}).positive("Price needs to be a positive number"),
  category: z.enum(["Fiction", "Science", "SelfDevelopment", "Poetry", "Religious"],{message: "Product category is not valid"}),
  description: z.string({message: "Product descreption is required"}),
  quantity: z.number({message:"Quantity needs to be a number"}).int("Quantity can't be fraction amount").positive("Quantity needs to be a positive number"),
  inStock: z.boolean({message: "Product availability is required"}),
});

export default ProductValidationSchema;
