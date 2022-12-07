import { ModelInit, MutableModel, __modelMeta__, ManagedIdentifier } from "@aws-amplify/datastore";





export declare class Dog {
  readonly [__modelMeta__]: {
    identifier: ManagedIdentifier<Dog, 'id'>;
    readOnlyFields: 'createdAt' | 'updatedAt';
  };
  readonly id: string;
  readonly name?: string | null;
  readonly createdAt?: string | null;
  readonly updatedAt?: string | null;
  constructor(init: ModelInit<Dog>);
  static copyOf(source: Dog, mutator: (draft: MutableModel<Dog>) => MutableModel<Dog> | void): Dog;
}