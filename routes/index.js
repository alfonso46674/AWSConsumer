const router = require('express').Router()

const autorRoute = require('./autor')
const toneAnalyzerRoute = require('./toneAnalyzer')

router.use('/autor',autorRoute)
router.use('/toneAnalyzer',toneAnalyzerRoute)

//Poner la vista de home por defecto al iniciar el servidor
router.get('/',(req,res)=>{
    res.render('home',{
        title:'AWS Consumer',
        condition:false
    })
})

module.exports = router