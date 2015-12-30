/**
 * @see https://developer.chrome.com/extensions/runtime
 */

import chrome from './chrome';
import Port from './types/Port';
import ChromeEvent from './Event';

export default chrome.runtime = {
  id : 'chrome-env' ,
  lastError : null , // or {message:'error message'}

  getManifest() {} ,
  requestUpdateCheck() {} ,
  connect() {
    return new Port();
  } ,

  onConnect : new ChromeEvent() ,
  onConnectExternal : new ChromeEvent() ,
  onInstalled : new ChromeEvent()
};
