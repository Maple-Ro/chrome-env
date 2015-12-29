/**
 * @see https://developer.chrome.com/extensions/contextMenus
 */

import chrome from './chrome';
import ChromeEvent from './Event';

export default chrome.contextMenus = {
  onClicked : new ChromeEvent()
};


