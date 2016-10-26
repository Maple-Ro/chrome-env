/**
 * @see https://developer.chrome.com/extensions/runtime
 */

var chrome = require('./chrome')
var Port = require('./types/Port')
var ChromeEvent = require('./Event')
var noop = require('./__noop')

module.exports = chrome.runtime = {
  id: 'chrome-env',
  lastError: null, // or { message: 'error message' }

  getManifest: noop,
  requestUpdateCheck: noop,
  connect: function () {
    return new Port()
  },

  onConnect: new ChromeEvent(),
  onConnectExternal: new ChromeEvent(),
  onInstalled: new ChromeEvent()
}
