const router = require('express').Router()
const fetch = require('node-fetch')

const toneAnalyzerURL = 'http://toneanalyzer-cloudfoundry.us-south.cf.appdomain.cloud/toneAnalyzer'

router.post('/',async (req,res)=>{
    //convert text to JSON string, then convert said JSON to an object
    inputObject = JSON.parse(JSON.stringify(req.body))

    //make the post request to the toneAnalyzerURL
    let response = await tone_request(toneAnalyzerURL, inputObject.textarea,
        {'Content-Type':'text/plain'}) 

    res.render('home',{
        title: 'AWS Consumer',
        condition: false,
        toneArray: response.tonesArray,
        previousText: inputObject.textarea,
        label1: "Text previously entered:",
        label2: "The previous text was shown to have the following tones:",
        label3: "Tone",
        label4: "Score %"
    })
})

//asynchronous function to handle the post request
async function tone_request(url,body,headers){
    const data = await fetch(url,{
        method: 'POST',
        body: body,
        headers: headers
    })
    return await data.json()
    
}

module.exports = router