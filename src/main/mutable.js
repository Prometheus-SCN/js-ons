const util = require('../utility')
const base58 = require('base58')
let _pubKey = new WeakMap()
let _privKey = new WeakMap()
let _key = new WeakMap()
let _contents = new WeakMap()
module.exports = class Mutable {
  constructor (options) {
    if (options) {
      if (!options.contents || !Buffer.isBuffer(options.contents)) {
        throw new TypeError('Invalid Content')
      }
      if (!options.pubKey || !Buffer.isBuffer(options.pubKey)) {
        throw new TypeError('Invalid PublicKey')
      }
      _contents.set(this, options.contents)
      _pubKey.set(this, options.pubKey)
    } else {
      let keys = util.generateKeys()
      _pubKey.set(this, keys.getPublicKey())
      _privKey.set(this, keys.getPrivateKey())
    }
  }
  get key () {
    let key = _key.get(this)
    if (key) {
      return key
    } else {
      let pubKey = _pubKey.get(this)
      key = base58.encode(pubKey)
      _key.set(this, key)
      return key
    }
  }
  set privKey (privKey) {
    if (!Buffer.isBuffer(privKey)) {
      throw new TypeError('Invalid Private Key')
    }
    let pubKey = _pubKey.get(this)
    if (!util.isKeyPair(pubKey, privKey)) {
      throw new TypeError('Invalid Private Key')
    }
    _privKey.set(this, privKey)
  }
  get privKey () {
    let privKey = _privKey.get(this)
    return privKey
  }
  get contents () {
    let contents = _contents.get(this)
    return contents
  }
  set contents (value) {
    let privKey = _privKey.get(this)
    if (privKey) {
      throw new TypeError('Invalid Private Key')
    }
    // TODO: Validation of contents
    _contents.set(this, util.privateEncrypt(contents, privKey))
  }
  toString () {
    let pubKey = _pubKey.get(this)
    let contents = _contents.get(this)
    return util.publicDecrypt(contents, pubKey)
  }
  get value () {
    let pubKey = _pubKey.get(this)
    let contents = _contents.get(this)
    return {contents, pubKey}
  }
}
