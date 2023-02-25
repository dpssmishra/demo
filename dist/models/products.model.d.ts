import { Entity } from '@loopback/repository';
export declare class Products extends Entity {
    productId?: number;
    productCode: string;
    name: string;
    quantity: number;
    price: number;
    [prop: string]: any;
    constructor(data?: Partial<Products>);
}
export interface ProductsRelations {
}
export type ProductsWithRelations = Products & ProductsRelations;
