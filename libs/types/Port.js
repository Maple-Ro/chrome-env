/**
 * @see https://developer.chrome.com/extensions/runtime#type-Port
 */
var ChromeEvent = require('../Event')
var types = require('../__types')
var noop = require('../__noop')

module.exports = types.Port = Port

function Port () {
  this.name = 'xxx'
  this.onDisconnect = new ChromeEvent()
  this.onMessage = new ChromeEvent()
}

Port.prototype.postMessage = noop
Port.prototype.disconnect = noop
