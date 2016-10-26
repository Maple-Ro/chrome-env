/**
 * @see https://developer.chrome.com/extensions/browserAction
 */

var chrome = require('./chrome')
var ChromeEvent = require('./Event')

module.exports = chrome.commands = {
  onCommand: new ChromeEvent()
}

