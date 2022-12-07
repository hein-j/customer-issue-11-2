// @ts-check
import { initSchema } from '@aws-amplify/datastore';
import { schema } from './schema';



const { Dog, Cat } = initSchema(schema);

export {
  Dog,
  Cat
};