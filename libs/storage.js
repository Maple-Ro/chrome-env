var chrome = require('./chrome')
var StorageArea = require('./types/StorageArea')
var ChromeEvent = require('./Event')

module.exports = chrome.storage = {
  sync: new StorageArea(),
  local: new StorageArea(),
  managed: new StorageArea(),

  onChanged: new ChromeEvent()
}
