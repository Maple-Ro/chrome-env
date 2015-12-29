/**
 * @see https://developer.chrome.com/extensions/runtime#type-Port
 */
import ChromeEvent from '../Event';

export default class {
  constructor() {
    this.name = 'xxx';
    this.onDisconnect = new ChromeEvent();
    this.onMessage = new ChromeEvent();
  }

  postMessage() {}

  disconnect() {}
};
