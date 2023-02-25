import { DefaultCrudRepository } from '@loopback/repository';
import { DsDataSource } from '../datasources';
import { Products, ProductsRelations } from '../models';
export declare class ProductsRepository extends DefaultCrudRepository<Products, typeof Products.prototype.productId, ProductsRelations> {
    constructor(dataSource: DsDataSource);
}
