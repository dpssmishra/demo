"use strict";
Object.defineProperty(exports, "__esModule", { value: true });
exports.HelloObserver = void 0;
const tslib_1 = require("tslib");
const core_1 = require("@loopback/core");
/**
 * This class will be bound to the application as a `LifeCycleObserver` during
 * `boot`
 */
let HelloObserver = class HelloObserver {
    constructor() {
        this.events = [];
    }
    /*
    constructor(
      @inject(CoreBindings.APPLICATION_INSTANCE) private app: Application,
    ) {}
    */
    /**
     * This method will be invoked when the application starts
     */
    async start() {
        this.events.push(`${new Date()}: hello-start`);
    }
    /**
     * This method will be invoked when the application stops
     */
    async stop() {
        this.events.push(`${new Date()}: hello-stop`);
    }
};
HelloObserver = tslib_1.__decorate([
    (0, core_1.lifeCycleObserver)()
], HelloObserver);
exports.HelloObserver = HelloObserver;
//# sourceMappingURL=hello.observer.js.map