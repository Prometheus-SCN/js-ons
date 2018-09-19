'use strict'
const crypto = require('crypto')

let util = {}

util.hash = (data) => {
  let hash = crypto.createHash('sha256', { digestLength: 34 })
  hash.update(data)
  return hash.digest()
}
util.encrypt = (data, encKey) => {
  let cipher = crypto.createCipher('aes192', encKey)
  cipher.update(data)
  return cipher.final()
}
util.decrypt = (data, decKey) => {
  let decipher = crypto.createDecipher('aes192', decKey)
  decipher.update(data)
  return decipher.final()
}
util.generateKeys = () => {
  let curve = crypto.createECDH('prime256v1')
  return curve.generateKeys()
}
util.privateEncrypt = (data, privKey) => {
  return crypto.privateEncrypt(privKey, data)
}
util.publicDecrypt = (data, pubKey) => {
  return crypto.publicDecrypt(pubKey, data)
}
util.isKeyPair = (pubKey, privKey) => {
  let curve = crypto.createECDH('prime256v1')
  curve.setPrivateKey(privKey)
  let key = curve.getPublicKey()
  return key.equals(pubKey)
}
util.isMutable = (text) => {
  return /([123456789ABCDEFGHJKLMNPQRSTUVWXYZabcdefghijkmnopqrstuvwxyz]+)\/([123456789ABCDEFGHJKLMNPQRSTUVWXYZabcdefghijkmnopqrstuvwxyz]+I)\/{0,1}([^ !$`&*()+]*|\\[ !$`&*()+]*)*/.test(text)
}
util.isRecord = (text) => {
  return /([123456789ABCDEFGHJKLMNPQRSTUVWXYZabcdefghijkmnopqrstuvwxyz]+)\/([123456789ABCDEFGHJKLMNPQRSTUVWXYZabcdefghijkmnopqrstuvwxyz]+O)\/{0,1}([^ !$`&*()+]*|\\[ !$`&*()+]*)*/.test(text)
}
util.isAddress = (text) => {
  return /([\da-zA-Z]+)/.test(text)
}
module.exports = util
