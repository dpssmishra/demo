import { Entity } from '@loopback/repository';
export declare class Transactions extends Entity {
    transactionId?: number;
    productCode: string;
    name: string;
    quantity: number;
    price: number;
    totalPrice: number;
    createdDate: number;
    [prop: string]: any;
    constructor(data?: Partial<Transactions>);
}
export interface TransactionsRelations {
}
export type TransactionsWithRelations = Transactions & TransactionsRelations;
