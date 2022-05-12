// domain/.netlify/functions/2-basic-api
// https://developer.mozilla.org/en-US/docs/Web/HTTP/Status

const items = require('../src/assets/data')

exports.handler = async (event, context, cb) => {
  return {
    headers: {
      'Access-Control-Allow-Origin': '*',
    },
    statusCode: 200,
    body: JSON.stringify(items),
  }
}