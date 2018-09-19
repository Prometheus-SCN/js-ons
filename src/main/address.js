const util = require('../utility')
let _key = new WeakMap()
let _value = new WeakMap()
module.exports = class Address {
  constructor (options) {
    if (options) {
      if (!options.key || typeof options.key !== 'string' || !util.isAddress(options.key)) {
        throw new TypeError('Invalid Key')
      } else {
        _key.set(this, options.key)
      }
      if (!options.value || typeof options.value !== 'string' || (!util.isMutable(options.value) && !util.isRecord(options.value))) {
        throw new TypeError('Invalid Value')
      } else {
        _value.set(this, options.value)
      }
    }
  }
  get key () {
    return _key.get(this)
  }
  set key (value) {
    if (typeof value !== 'string' || !util.isAddress(value)) {
      throw new TypeError('Invalid Key')
    }
    _key.set(this, value)
  }
  get value () {
    return _value.get(this)
  }
  set value (value) {
    if (typeof value !== 'string' || (!util.isMutable(value) && !util.isRecord(value))) {
      throw new TypeError('Invalid Value')
    }
    _value.set(this, value)
  }
  get isMutable () {
    return util.isMutable(this.value)
  }
  get isRecord () {
    return util.isRecord(this.value)
  }
}
