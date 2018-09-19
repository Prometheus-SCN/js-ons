const express = require('express')
module.exports = function () {
  let ons = express()
  ons.get(/([123456789ABCDEFGHJKLMNPQRSTUVWXYZabcdefghijkmnopqrstuvwxyz]+)\/([123456789ABCDEFGHJKLMNPQRSTUVWXYZabcdefghijkmnopqrstuvwxyz]+)O\/{0,1}([^ !$`&*()+]*|\\[ !$`&*()+]*)*/,
    (req, res) => {

    })
  ons.get(/([123456789ABCDEFGHJKLMNPQRSTUVWXYZabcdefghijkmnopqrstuvwxyz]+)\/([123456789ABCDEFGHJKLMNPQRSTUVWXYZabcdefghijkmnopqrstuvwxyz]+)I\/{0,1}([^ !$`&*()+]*|\\[ !$`&*()+]*)*/,
    (req, res) => {

    })
  ons.get(/([\da-zA-Z]+)\/{0,1}([^ !$`&*()+]*|\\[ !$`&*()+]*)*/,
    (req, res) => {

    })
  ons.put('/', (req, res) => {

  })
}