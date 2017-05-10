
const request = require('request')
const url = require('url')

const { SERVER } = require('../config')

module.exports = function send(uri, params) {
  return new Promise((resolve, reject) => {
    const uriText = url.resolve(SERVER, uri)

    request.post(uriText, {form: params}, (err, res) => {
      if (err) reject(err)
      else resolve(res)
    })
  })
}
