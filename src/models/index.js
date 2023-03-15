// @ts-check
import { initSchema } from '@aws-amplify/datastore';
import { schema } from './schema';



const { Cart, Cartitem, Category, Product } = initSchema(schema);

export  {
  Cart,
  Cartitem,
  Category,
  Product
};
