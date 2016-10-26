/**
 * @see https://developer.chrome.com/extensions/browserAction
 */

var chrome = require('./chrome')
var noop = require('./__noop')

module.exports = chrome.browserAction = {
  setBadgeText: noop
}
