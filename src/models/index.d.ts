import { ModelInit, MutableModel, __modelMeta__, ManagedIdentifier } from "@aws-amplify/datastore";
// @ts-ignore
import { LazyLoading, LazyLoadingDisabled } from "@aws-amplify/datastore";





type EagerDog = {
  readonly [__modelMeta__]: {
    identifier: ManagedIdentifier<Dog, 'id'>;
    readOnlyFields: 'createdAt' | 'updatedAt';
  };
  readonly id: string;
  readonly name?: string | null;
  readonly createdAt?: string | null;
  readonly updatedAt?: string | null;
}

type LazyDog = {
  readonly [__modelMeta__]: {
    identifier: ManagedIdentifier<Dog, 'id'>;
    readOnlyFields: 'createdAt' | 'updatedAt';
  };
  readonly id: string;
  readonly name?: string | null;
  readonly createdAt?: string | null;
  readonly updatedAt?: string | null;
}

export declare type Dog = LazyLoading extends LazyLoadingDisabled ? EagerDog : LazyDog

export declare const Dog: (new (init: ModelInit<Dog>) => Dog) & {
  copyOf(source: Dog, mutator: (draft: MutableModel<Dog>) => MutableModel<Dog> | void): Dog;
}

type EagerCat = {
  readonly [__modelMeta__]: {
    identifier: ManagedIdentifier<Cat, 'id'>;
    readOnlyFields: 'createdAt' | 'updatedAt';
  };
  readonly id: string;
  readonly name?: string | null;
  readonly createdAt?: string | null;
  readonly updatedAt?: string | null;
}

type LazyCat = {
  readonly [__modelMeta__]: {
    identifier: ManagedIdentifier<Cat, 'id'>;
    readOnlyFields: 'createdAt' | 'updatedAt';
  };
  readonly id: string;
  readonly name?: string | null;
  readonly createdAt?: string | null;
  readonly updatedAt?: string | null;
}

export declare type Cat = LazyLoading extends LazyLoadingDisabled ? EagerCat : LazyCat

export declare const Cat: (new (init: ModelInit<Cat>) => Cat) & {
  copyOf(source: Cat, mutator: (draft: MutableModel<Cat>) => MutableModel<Cat> | void): Cat;
}