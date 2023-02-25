

import {lifeCycleObserver, LifeCycleObserver} from '@loopback/core';

/**
 * This class will be bound to the application as a `LifeCycleObserver` during
 * `boot`
 */
@lifeCycleObserver()
export class HelloObserver implements LifeCycleObserver {
  events: string[] = [];
  /*
  constructor(
    @inject(CoreBindings.APPLICATION_INSTANCE) private app: Application,
  ) {}
  */

  /**
   * This method will be invoked when the application starts
   */
  async start(): Promise<void> {
    this.events.push(`${new Date()}: hello-start`);
  }

  /**
   * This method will be invoked when the application stops
   */
  async stop(): Promise<void> {
    this.events.push(`${new Date()}: hello-stop`);
  }
}
