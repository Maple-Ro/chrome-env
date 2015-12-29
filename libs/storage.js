import chrome from './chrome';
import StorageArea from './types/StorageArea';
import ChromeEvent from './Event';

const sync = new StorageArea();

const local = new StorageArea();

const managed = new StorageArea();

export default chrome.storage = {
  sync ,
  local ,
  managed ,

  onChanged : new ChromeEvent()
};
