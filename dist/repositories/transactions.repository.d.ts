import { DefaultCrudRepository } from '@loopback/repository';
import { DsDataSource } from '../datasources';
import { Transactions, TransactionsRelations } from '../models';
export declare class TransactionsRepository extends DefaultCrudRepository<Transactions, typeof Transactions.prototype.transactionId, TransactionsRelations> {
    constructor(dataSource: DsDataSource);
}
