/**
 * @see https://developer.chrome.com/apps/events#type-Event
 */

var chrome = require('./chrome')
var noop = require('./__noop')

module.exports = chrome.Event = ChromeEvent

function ChromeEvent () {}
ChromeEvent.prototype.addListener = noop
