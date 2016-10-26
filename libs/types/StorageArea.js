/**
 * @see https://developer.chrome.com/extensions/storage#type-StorageArea
 */
var types = require('../__types')
var noop = require('../__noop')

module.exports = types.StorageArea = StorageArea

function StorageArea () {}
StorageArea.prototype.get = noop
StorageArea.prototype.getBytesInUse = noop
StorageArea.prototype.set = noop
StorageArea.prototype.remove = noop
StorageArea.prototype.clear = noop
