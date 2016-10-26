/**
 * @see https://developer.chrome.com/extensions/tts
 */

var chrome = require('./chrome')
var noop = require('./__noop')

module.exports = chrome.tts = {
  getVoices: noop
}
