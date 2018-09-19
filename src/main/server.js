const express = require('express')
module.exports = function (nr) {
  let ons = express()
  ons.get(/([123456789ABCDEFGHJKLMNPQRSTUVWXYZabcdefghijkmnopqrstuvwxyz]+)\/([123456789ABCDEFGHJKLMNPQRSTUVWXYZabcdefghijkmnopqrstuvwxyz]+O)\/{0,1}([^ !$`&*()+]*|\\[ !$`&*()+]*)*/,
    (req, res) => { // Reqest for a Record
      let key = req.params[20]
    })
  ons.get(/([123456789ABCDEFGHJKLMNPQRSTUVWXYZabcdefghijkmnopqrstuvwxyz]+)\/([123456789ABCDEFGHJKLMNPQRSTUVWXYZabcdefghijkmnopqrstuvwxyz]+I)\/{0,1}([^ !$`&*()+]*|\\[ !$`&*()+]*)*/,
    (req, res) => {// Request  for a Mutable
      let key = req.params[20]
    })
  ons.get(/([\da-zA-Z]+)\/{0,1}([^ !$`&*()+]*|\\[ !$`&*()+]*)*/,
    (req, res) => { // Request for and Address
      let address = req.params[20]
    })
  ons.put('/', (req, res) => {

  })
}