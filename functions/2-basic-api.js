// domain/.netlify/functions/2-basic-api
// https://developer.mozilla.org/en-US/docs/Web/HTTP/Status

const items = require("../assets/data")

exports.handler = async (event, context, cb) => {
    
    return {
        headers:{
           'Access-Control-Allow-Origin':'*'
        },
        statusCode:200,
        // body must be a string, can stringify not strings to meet this requirement
        body:JSON.stringify(items),
    }
}