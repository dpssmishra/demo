"use strict";
Object.defineProperty(exports, "__esModule", { value: true });
exports.Transactions = void 0;
const tslib_1 = require("tslib");
const repository_1 = require("@loopback/repository");
let Transactions = class Transactions extends repository_1.Entity {
    constructor(data) {
        super(data);
    }
};
tslib_1.__decorate([
    (0, repository_1.property)({
        type: 'number',
        precision: 10,
        scale: 0,
        generated: 1,
        id: 1,
        mysql: { columnName: 'transactionID', dataType: 'int', dataLength: null, dataPrecision: 10, dataScale: 0, nullable: 'N', generated: 1 },
    }),
    tslib_1.__metadata("design:type", Number)
], Transactions.prototype, "transactionId", void 0);
tslib_1.__decorate([
    (0, repository_1.property)({
        type: 'string',
        required: true,
        length: 3,
        generated: 0,
        mysql: { columnName: 'productCode', dataType: 'char', dataLength: 3, dataPrecision: null, dataScale: null, nullable: 'N', generated: 0 },
    }),
    tslib_1.__metadata("design:type", String)
], Transactions.prototype, "productCode", void 0);
tslib_1.__decorate([
    (0, repository_1.property)({
        type: 'string',
        required: true,
        length: 30,
        generated: 0,
        mysql: { columnName: 'name', dataType: 'varchar', dataLength: 30, dataPrecision: null, dataScale: null, nullable: 'N', generated: 0 },
    }),
    tslib_1.__metadata("design:type", String)
], Transactions.prototype, "name", void 0);
tslib_1.__decorate([
    (0, repository_1.property)({
        type: 'number',
        required: true,
        precision: 10,
        scale: 0,
        generated: 0,
        mysql: { columnName: 'quantity', dataType: 'int', dataLength: null, dataPrecision: 10, dataScale: 0, nullable: 'N', generated: 0 },
    }),
    tslib_1.__metadata("design:type", Number)
], Transactions.prototype, "quantity", void 0);
tslib_1.__decorate([
    (0, repository_1.property)({
        type: 'number',
        required: true,
        precision: 7,
        scale: 2,
        generated: 0,
        mysql: { columnName: 'price', dataType: 'decimal', dataLength: null, dataPrecision: 7, dataScale: 2, nullable: 'N', generated: 0 },
    }),
    tslib_1.__metadata("design:type", Number)
], Transactions.prototype, "price", void 0);
tslib_1.__decorate([
    (0, repository_1.property)({
        type: 'number',
        required: true,
        precision: 7,
        scale: 2,
        generated: 0,
        mysql: { columnName: 'totalPrice', dataType: 'decimal', dataLength: null, dataPrecision: 7, dataScale: 2, nullable: 'N', generated: 0 },
    }),
    tslib_1.__metadata("design:type", Number)
], Transactions.prototype, "totalPrice", void 0);
tslib_1.__decorate([
    (0, repository_1.property)({
        type: 'date',
        required: true,
        precision: 7,
        scale: 2,
        generated: 0,
        mysql: { columnName: 'createdDate', dataType: 'date', dataLength: null, dataPrecision: 7, dataScale: 2, nullable: 'N', generated: 0 },
    }),
    tslib_1.__metadata("design:type", Number)
], Transactions.prototype, "createdDate", void 0);
Transactions = tslib_1.__decorate([
    (0, repository_1.model)({ settings: { idInjection: false, mysql: { schema: 'demo', table: 'transactions' } } }),
    tslib_1.__metadata("design:paramtypes", [Object])
], Transactions);
exports.Transactions = Transactions;
//# sourceMappingURL=transactions.model.js.map