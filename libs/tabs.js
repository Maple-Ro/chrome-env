/**
 * @see https://developer.chrome.com/extensions/tabs
 */

var chrome = require('./chrome')
var Port = require('./types/Port')
var ChromeEvent = require('./Event')
var noop = require('./__noop')

module.exports = chrome.tabs = {
  query: noop,
  sendMessage: noop,
  connect: function () {
    return new Port()
  },

  onUpdated: new ChromeEvent(),
  onActivated: new ChromeEvent()
}
