/* eslint-disable */
import { TypedDocumentNode as DocumentNode } from '@graphql-typed-document-node/core';
export type Maybe<T> = T | null;
export type InputMaybe<T> = Maybe<T>;
export type Exact<T extends { [key: string]: unknown }> = { [K in keyof T]: T[K] };
export type MakeOptional<T, K extends keyof T> = Omit<T, K> & { [SubKey in K]?: Maybe<T[SubKey]> };
export type MakeMaybe<T, K extends keyof T> = Omit<T, K> & { [SubKey in K]: Maybe<T[SubKey]> };
export type MakeEmpty<T extends { [key: string]: unknown }, K extends keyof T> = { [_ in K]?: never };
export type Incremental<T> = T | { [P in keyof T]?: P extends ' $fragmentName' | '__typename' ? T[P] : never };
/** All built-in and custom scalars, mapped to their actual values */
export type Scalars = {
  ID: { input: string; output: string; }
  String: { input: string; output: string; }
  Boolean: { input: boolean; output: boolean; }
  Int: { input: number; output: number; }
  Float: { input: number; output: number; }
  /** A date-time string at UTC, such as 2019-12-03T09:54:33Z, compliant with the date-time format. */
  DateTime: { input: any; output: any; }
};

export type AccesToken = {
  __typename?: 'AccesToken';
  token: Scalars['String']['output'];
};

export type AuthInput = {
  password: Scalars['String']['input'];
  userName: Scalars['String']['input'];
};

export type Mutation = {
  __typename?: 'Mutation';
  login: AccesToken;
  productCreate: ProductType;
  productDelete: Scalars['Boolean']['output'];
  productUpdate: ProductType;
  purchaseCreate: PurchaseType;
  purchaseDelete: Scalars['Boolean']['output'];
  purchaseUpdate: PurchaseType;
  roleCreate: RoleType;
  userCreate: UserType;
  userDelete: Scalars['Boolean']['output'];
  userUpdate: UserType;
};


export type MutationLoginArgs = {
  LoginData: AuthInput;
};


export type MutationProductCreateArgs = {
  productData: ProductInput;
};


export type MutationProductDeleteArgs = {
  id: Scalars['String']['input'];
};


export type MutationProductUpdateArgs = {
  id: Scalars['String']['input'];
  updatedData: UpdateProductInput;
};


export type MutationPurchaseCreateArgs = {
  purchaseData: PurchaseInput;
};


export type MutationPurchaseDeleteArgs = {
  id: Scalars['String']['input'];
};


export type MutationPurchaseUpdateArgs = {
  id: Scalars['String']['input'];
  updatedData: UpdatePurchaseInput;
};


export type MutationRoleCreateArgs = {
  roleData: RoleInput;
};


export type MutationUserCreateArgs = {
  userData: UserInput;
};


export type MutationUserDeleteArgs = {
  id: Scalars['String']['input'];
};


export type MutationUserUpdateArgs = {
  id: Scalars['String']['input'];
  updatedData: UpdateUserInput;
};

export type ProductInput = {
  description?: InputMaybe<Scalars['String']['input']>;
  name: Scalars['String']['input'];
  stock: Scalars['Float']['input'];
  unitOfMeasure: Scalars['String']['input'];
};

export type ProductType = {
  __typename?: 'ProductType';
  createdAt?: Maybe<Scalars['DateTime']['output']>;
  description?: Maybe<Scalars['String']['output']>;
  id: Scalars['ID']['output'];
  name: Scalars['String']['output'];
  stock: Scalars['Float']['output'];
  unitOfMeasure: Scalars['String']['output'];
  updatedAt?: Maybe<Scalars['DateTime']['output']>;
};

export type PurchaseInput = {
  items: Array<PurchaseItemInput>;
  observations?: InputMaybe<Scalars['String']['input']>;
};

export type PurchaseItemInput = {
  price: Scalars['Float']['input'];
  product: Scalars['String']['input'];
  quantity: Scalars['Float']['input'];
};

export type PurchaseItemType = {
  __typename?: 'PurchaseItemType';
  price: Scalars['Float']['output'];
  product: ProductType;
  quantity: Scalars['Float']['output'];
};

export type PurchaseType = {
  __typename?: 'PurchaseType';
  createdAt?: Maybe<Scalars['DateTime']['output']>;
  id: Scalars['ID']['output'];
  items: Array<PurchaseItemType>;
  observations?: Maybe<Scalars['String']['output']>;
  updatedAt?: Maybe<Scalars['DateTime']['output']>;
};

export type Query = {
  __typename?: 'Query';
  productFindAll: Array<ProductType>;
  productFindById: ProductType;
  purchaseFindAll: Array<PurchaseType>;
  purchaseFindById: PurchaseType;
  roleFindAll: Array<RoleType>;
  userFindAll: Array<UserType>;
  userFindById: UserType;
};


export type QueryProductFindByIdArgs = {
  id: Scalars['String']['input'];
};


export type QueryPurchaseFindByIdArgs = {
  id: Scalars['String']['input'];
};


export type QueryUserFindByIdArgs = {
  id: Scalars['String']['input'];
};

export type RoleInput = {
  name: Scalars['String']['input'];
};

export type RoleType = {
  __typename?: 'RoleType';
  createdAt?: Maybe<Scalars['DateTime']['output']>;
  id: Scalars['String']['output'];
  name: Scalars['String']['output'];
  updatedAt?: Maybe<Scalars['DateTime']['output']>;
};

export type UpdateProductInput = {
  description?: InputMaybe<Scalars['String']['input']>;
  name?: InputMaybe<Scalars['String']['input']>;
  stock?: InputMaybe<Scalars['Float']['input']>;
  unitOfMeasure?: InputMaybe<Scalars['String']['input']>;
};

export type UpdatePurchaseInput = {
  items?: InputMaybe<Array<PurchaseItemInput>>;
  observations?: InputMaybe<Scalars['String']['input']>;
};

export type UpdateUserInput = {
  email?: InputMaybe<Scalars['String']['input']>;
  firstName?: InputMaybe<Scalars['String']['input']>;
  lastName?: InputMaybe<Scalars['String']['input']>;
  password?: InputMaybe<Scalars['String']['input']>;
  roles?: InputMaybe<Array<Scalars['ID']['input']>>;
  userName?: InputMaybe<Scalars['String']['input']>;
};

export type UserInput = {
  email: Scalars['String']['input'];
  firstName: Scalars['String']['input'];
  lastName: Scalars['String']['input'];
  password: Scalars['String']['input'];
  roles: Array<Scalars['ID']['input']>;
  userName: Scalars['String']['input'];
};

export type UserType = {
  __typename?: 'UserType';
  createdAt?: Maybe<Scalars['DateTime']['output']>;
  email: Scalars['String']['output'];
  firstName?: Maybe<Scalars['String']['output']>;
  id: Scalars['String']['output'];
  lastName?: Maybe<Scalars['String']['output']>;
  password: Scalars['String']['output'];
  roles?: Maybe<Array<RoleType>>;
  updatedAt?: Maybe<Scalars['DateTime']['output']>;
  userName: Scalars['String']['output'];
};

export type UserFindAllQueryVariables = Exact<{ [key: string]: never; }>;


export type UserFindAllQuery = { __typename?: 'Query', userFindAll: Array<{ __typename?: 'UserType', id: string, userName: string, password: string, email: string, firstName?: string | null, lastName?: string | null, roles?: Array<{ __typename?: 'RoleType', id: string, name: string }> | null }> };


export const UserFindAllDocument = {"kind":"Document","definitions":[{"kind":"OperationDefinition","operation":"query","name":{"kind":"Name","value":"UserFindAll"},"selectionSet":{"kind":"SelectionSet","selections":[{"kind":"Field","name":{"kind":"Name","value":"userFindAll"},"selectionSet":{"kind":"SelectionSet","selections":[{"kind":"Field","name":{"kind":"Name","value":"id"}},{"kind":"Field","name":{"kind":"Name","value":"userName"}},{"kind":"Field","name":{"kind":"Name","value":"password"}},{"kind":"Field","name":{"kind":"Name","value":"email"}},{"kind":"Field","name":{"kind":"Name","value":"firstName"}},{"kind":"Field","name":{"kind":"Name","value":"lastName"}},{"kind":"Field","name":{"kind":"Name","value":"roles"},"selectionSet":{"kind":"SelectionSet","selections":[{"kind":"Field","name":{"kind":"Name","value":"id"}},{"kind":"Field","name":{"kind":"Name","value":"name"}}]}}]}}]}}]} as unknown as DocumentNode<UserFindAllQuery, UserFindAllQueryVariables>;