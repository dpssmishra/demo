"use strict";
Object.defineProperty(exports, "__esModule", { value: true });
exports.TransactionsController = void 0;
const tslib_1 = require("tslib");
const repository_1 = require("@loopback/repository");
const rest_1 = require("@loopback/rest");
const models_1 = require("../models");
const repositories_1 = require("../repositories");
let TransactionsController = class TransactionsController {
    constructor(transactionsRepository) {
        this.transactionsRepository = transactionsRepository;
    }
    async create(transactions) {
        return this.transactionsRepository.create(transactions);
    }
    async count(where) {
        return this.transactionsRepository.count(where);
    }
    async find(filter) {
        return this.transactionsRepository.find(filter);
    }
    async updateAll(transactions, where) {
        return this.transactionsRepository.updateAll(transactions, where);
    }
    async findById(id, filter) {
        return this.transactionsRepository.findById(id, filter);
    }
    async updateById(id, transactions) {
        await this.transactionsRepository.updateById(id, transactions);
    }
    async replaceById(id, transactions) {
        await this.transactionsRepository.replaceById(id, transactions);
    }
    async deleteById(id) {
        await this.transactionsRepository.deleteById(id);
    }
};
tslib_1.__decorate([
    (0, rest_1.post)('/transactions'),
    (0, rest_1.response)(200, {
        description: 'Transactions model instance',
        content: { 'application/json': { schema: (0, rest_1.getModelSchemaRef)(models_1.Transactions) } },
    }),
    tslib_1.__param(0, (0, rest_1.requestBody)({
        content: {
            'application/json': {
                schema: (0, rest_1.getModelSchemaRef)(models_1.Transactions, {
                    title: 'NewTransactions',
                    exclude: ['id'],
                }),
            },
        },
    })),
    tslib_1.__metadata("design:type", Function),
    tslib_1.__metadata("design:paramtypes", [Object]),
    tslib_1.__metadata("design:returntype", Promise)
], TransactionsController.prototype, "create", null);
tslib_1.__decorate([
    (0, rest_1.get)('/transactions/count'),
    (0, rest_1.response)(200, {
        description: 'Transactions model count',
        content: { 'application/json': { schema: repository_1.CountSchema } },
    }),
    tslib_1.__param(0, rest_1.param.where(models_1.Transactions)),
    tslib_1.__metadata("design:type", Function),
    tslib_1.__metadata("design:paramtypes", [Object]),
    tslib_1.__metadata("design:returntype", Promise)
], TransactionsController.prototype, "count", null);
tslib_1.__decorate([
    (0, rest_1.get)('/transactions'),
    (0, rest_1.response)(200, {
        description: 'Array of Transactions model instances',
        content: {
            'application/json': {
                schema: {
                    type: 'array',
                    items: (0, rest_1.getModelSchemaRef)(models_1.Transactions, { includeRelations: true }),
                },
            },
        },
    }),
    tslib_1.__param(0, rest_1.param.filter(models_1.Transactions)),
    tslib_1.__metadata("design:type", Function),
    tslib_1.__metadata("design:paramtypes", [Object]),
    tslib_1.__metadata("design:returntype", Promise)
], TransactionsController.prototype, "find", null);
tslib_1.__decorate([
    (0, rest_1.patch)('/transactions'),
    (0, rest_1.response)(200, {
        description: 'Transactions PATCH success count',
        content: { 'application/json': { schema: repository_1.CountSchema } },
    }),
    tslib_1.__param(0, (0, rest_1.requestBody)({
        content: {
            'application/json': {
                schema: (0, rest_1.getModelSchemaRef)(models_1.Transactions, { partial: true }),
            },
        },
    })),
    tslib_1.__param(1, rest_1.param.where(models_1.Transactions)),
    tslib_1.__metadata("design:type", Function),
    tslib_1.__metadata("design:paramtypes", [models_1.Transactions, Object]),
    tslib_1.__metadata("design:returntype", Promise)
], TransactionsController.prototype, "updateAll", null);
tslib_1.__decorate([
    (0, rest_1.get)('/transactions/{id}'),
    (0, rest_1.response)(200, {
        description: 'Transactions model instance',
        content: {
            'application/json': {
                schema: (0, rest_1.getModelSchemaRef)(models_1.Transactions, { includeRelations: true }),
            },
        },
    }),
    tslib_1.__param(0, rest_1.param.path.number('id')),
    tslib_1.__param(1, rest_1.param.filter(models_1.Transactions, { exclude: 'where' })),
    tslib_1.__metadata("design:type", Function),
    tslib_1.__metadata("design:paramtypes", [Number, Object]),
    tslib_1.__metadata("design:returntype", Promise)
], TransactionsController.prototype, "findById", null);
tslib_1.__decorate([
    (0, rest_1.patch)('/transactions/{id}'),
    (0, rest_1.response)(204, {
        description: 'Transactions PATCH success',
    }),
    tslib_1.__param(0, rest_1.param.path.number('id')),
    tslib_1.__param(1, (0, rest_1.requestBody)({
        content: {
            'application/json': {
                schema: (0, rest_1.getModelSchemaRef)(models_1.Transactions, { partial: true }),
            },
        },
    })),
    tslib_1.__metadata("design:type", Function),
    tslib_1.__metadata("design:paramtypes", [Number, models_1.Transactions]),
    tslib_1.__metadata("design:returntype", Promise)
], TransactionsController.prototype, "updateById", null);
tslib_1.__decorate([
    (0, rest_1.put)('/transactions/{id}'),
    (0, rest_1.response)(204, {
        description: 'Transactions PUT success',
    }),
    tslib_1.__param(0, rest_1.param.path.number('id')),
    tslib_1.__param(1, (0, rest_1.requestBody)()),
    tslib_1.__metadata("design:type", Function),
    tslib_1.__metadata("design:paramtypes", [Number, models_1.Transactions]),
    tslib_1.__metadata("design:returntype", Promise)
], TransactionsController.prototype, "replaceById", null);
tslib_1.__decorate([
    (0, rest_1.del)('/transactions/{id}'),
    (0, rest_1.response)(204, {
        description: 'Transactions DELETE success',
    }),
    tslib_1.__param(0, rest_1.param.path.number('id')),
    tslib_1.__metadata("design:type", Function),
    tslib_1.__metadata("design:paramtypes", [Number]),
    tslib_1.__metadata("design:returntype", Promise)
], TransactionsController.prototype, "deleteById", null);
TransactionsController = tslib_1.__decorate([
    tslib_1.__param(0, (0, repository_1.repository)(repositories_1.TransactionsRepository)),
    tslib_1.__metadata("design:paramtypes", [repositories_1.TransactionsRepository])
], TransactionsController);
exports.TransactionsController = TransactionsController;
//# sourceMappingURL=transactions.controller.js.map