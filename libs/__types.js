/**
 * chrome API 中并没有这个对象，但是为了测试需要，所有的类型都会挂在这个对象里面
 */

var chrome = require('./chrome')

module.exports = chrome.__types = {}
