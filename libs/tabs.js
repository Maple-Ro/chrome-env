/**
 * @see https://developer.chrome.com/extensions/tabs
 */

import chrome from './chrome';
import Port from './types/Port';
import ChromeEvent from './Event';

export default chrome.tabs = {
  query () {} ,
  connect() {
    return new Port();
  } ,

  onUpdated : new ChromeEvent(),
  onActivated : new ChromeEvent()
};
