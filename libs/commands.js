/**
 * @see https://developer.chrome.com/extensions/browserAction
 */

import chrome from './chrome';
import ChromeEvent from './Event';

export default chrome.commands = {
  onCommand : new ChromeEvent()
};

