/**
 * @see https://developer.chrome.com/extensions/contextMenus
 */

var chrome = require('./chrome')
var ChromeEvent = require('./Event')

module.exports = chrome.contextMenus = {
  onClicked: new ChromeEvent()
}
