const router = require('express').Router()
const fetch = require('node-fetch')

const toneAnalyzerURL = 'http://toneanalyzer-cloudfoundry.us-south.cf.appdomain.cloud/toneAnalyzer'

router.post('/',async (req,res)=>{
    //convert text to JSON string, then convert said JSON to an object
    inputObject = JSON.parse(JSON.stringify(req.body))

    //make the post request to the toneAnalyzerURL
    let response = await tone_request(toneAnalyzerURL, inputObject.textarea,
        {'Content-Type':'text/plain'}) 

    res.send("done")
})

//asynchronous function to handle the post request
async function tone_request(url,body,headers){
    const data = await fetch(url,{
        method: 'POST',
        body: body,
        headers: headers
    })
    return await data.json()
    // return response
}

module.exports = router