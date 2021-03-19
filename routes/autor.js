const router = require('express').Router()

router.get('/',(req,res)=>{
    res.json({
        alumno : "Alfonso Ramirez Castro",
        servicio: "ECS en AWS"
    })
})

module.exports = router