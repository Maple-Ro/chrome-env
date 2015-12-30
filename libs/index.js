// 加载 chrome API
import './browserAction';
import './commands';
import './contextMenus';
import './Event';
import './runtime';
import './storage';
import './tabs';
import './tts';

// 加载类型
import './types/Port';
import './types/StorageArea';

export { default as default } from './chrome';
