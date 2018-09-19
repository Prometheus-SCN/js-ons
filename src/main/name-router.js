const MutableCache = require('./mutable-cache')
const RecordCache = require('./record-cache')
const AddressCache = require('./address-cache')
let _mutableCache = new WeakMap()
let _recordCache = new WeakMap()
let _addressCache = new WeakMap()
module.exports = class NameRouter {
  constructor (path) {
    _mutableCache.set(this, new MutableCache(path))
    _recordCache.set(this, new RecordCache(path))
    _addressCache.set(this, new AddressCache(path))
  }
  get mutlableCache () {
    return _mutableCache.get(this)
  }
  get recordCache () {
    return _recordCache.get(this)
  }
  get addressCache () {
    return _addressCache.get(this)
  }
}
