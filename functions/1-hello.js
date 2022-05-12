// domain/.netlify/functions/1-hello
// https://developer.mozilla.org/en-US/docs/Web/HTTP/Status

exports.handler = async (event, context, cb) => {
    
    return {
        statusCode:200,
        // body must be a string, can stringify not strings to meet this requirement
        body:'Our first netlify function example!!!',
    }
}