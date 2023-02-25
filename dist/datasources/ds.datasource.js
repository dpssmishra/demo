"use strict";
Object.defineProperty(exports, "__esModule", { value: true });
exports.DsDataSource = void 0;
const tslib_1 = require("tslib");
const core_1 = require("@loopback/core");
const repository_1 = require("@loopback/repository");
const config = {
    name: 'db',
    connector: 'mysql',
    url: '',
    host: 'localhost',
    port: 3306,
    user: 'dilip',
    password: 'dilipmishra@2023',
    database: 'demo'
};
let DsDataSource = class DsDataSource extends repository_1.juggler.DataSource {
    constructor(dsConfig = config) {
        super(dsConfig);
    }
};
DsDataSource.dataSourceName = 'ds';
DsDataSource.defaultConfig = config;
DsDataSource = tslib_1.__decorate([
    tslib_1.__param(0, (0, core_1.inject)('datasources.config.ds', { optional: true })),
    tslib_1.__metadata("design:paramtypes", [Object])
], DsDataSource);
exports.DsDataSource = DsDataSource;
//# sourceMappingURL=ds.datasource.js.map