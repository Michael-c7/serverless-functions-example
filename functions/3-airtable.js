// domain/.netlify/functions/3-airtable
// https://developer.mozilla.org/en-US/docs/Web/HTTP/Status
require("dotenv").config

const Airtable = require('airtable-node');
 
const airtable = new Airtable({ apiKey: process.env.AIRTABLE_API_KEY })
  .base('apphyUUe28w9woNTI')
  .table('products')
 



exports.handler = async (event, context, cb) => {
    try {
        const { records } = await airtable.list()
        const products = records.map((product) => {
            const { id } = product;
            const { name, image, price } = product.fields
            const url = image[0].url
            return { id, name, url, price }
        })
        return {
            // if you want this api accessible w/ different apps include this header
            headers: {
                'Access-Control-Allow-Origin': '*',
              },
            statusCode:200,
            // body must be a string, can stringify not strings to meet this requirement
            body:JSON.stringify(products),
        }
    } catch(error) {
        console.log(error)
        return {
            headers: {
                'Access-Control-Allow-Origin': '*',
            },
            statusCode:500,
            // body must be a string, can stringify not strings to meet this requirement
            body:"server error",
        }
    }
    
    
}