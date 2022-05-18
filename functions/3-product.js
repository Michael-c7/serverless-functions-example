// domain/.netlify/functions/3-product
// https://developer.mozilla.org/en-US/docs/Web/HTTP/Status
require("dotenv").config

const Airtable = require('airtable-node');
 
const airtable = new Airtable({ apiKey: process.env.AIRTABLE_API_KEY })
  .base('apphyUUe28w9woNTI')
  .table('products')


exports.handler = async (event, context, cb) => {
    console.log(event)
        const { id } = event.queryStringParameters
        if(id) {
            try {
                const product = await airtable.retrieve(id)
                if(product.error) {
                    return {
                        statusCode:404,
                        // body must be a string, can stringify not strings to meet this requirement
                        body:`no product w/ id: ${id}`,
                    }
                }
                return {
                    statusCode:200,
                    // body must be a string, can stringify not strings to meet this requirement
                    body:JSON.stringify(product),
                }
            } catch(error) {
                return {
                    statusCode:500,
                    // body must be a string, can stringify not strings to meet this requirement
                    body:`Server Error`,
                }
            }

            
        }
        return {
            statusCode:400,
            // body must be a string, can stringify not strings to meet this requirement
            body:'Please provider a product id',
        }
}