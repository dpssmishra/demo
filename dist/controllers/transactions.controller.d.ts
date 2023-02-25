import { Count, Filter, FilterExcludingWhere, Where } from '@loopback/repository';
import { Transactions } from '../models';
import { TransactionsRepository } from '../repositories';
export declare class TransactionsController {
    transactionsRepository: TransactionsRepository;
    constructor(transactionsRepository: TransactionsRepository);
    create(transactions: Omit<Transactions, 'id'>): Promise<Transactions>;
    count(where?: Where<Transactions>): Promise<Count>;
    find(filter?: Filter<Transactions>): Promise<Transactions[]>;
    updateAll(transactions: Transactions, where?: Where<Transactions>): Promise<Count>;
    findById(id: number, filter?: FilterExcludingWhere<Transactions>): Promise<Transactions>;
    updateById(id: number, transactions: Transactions): Promise<void>;
    replaceById(id: number, transactions: Transactions): Promise<void>;
    deleteById(id: number): Promise<void>;
}
