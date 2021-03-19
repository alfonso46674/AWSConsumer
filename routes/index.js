const router = require('express').Router()

//Poner la vista de home por defecto al iniciar el servidor
router.get('/',(req,res)=>{
    res.render('home',{
        title:'AWS Consumer',
        condition:false
    })
})

module.exports = router