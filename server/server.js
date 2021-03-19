const express = require('express')
const hbs = require('express-handlebars')
const path = require('path')

const app = express()

const PORT = 8080
const HOST = "0.0.0.0"

//importar rutas a usar
const router = require('../routes')


const { json, urlencoded } = express

//configuracion basica de parseo
app.use(json())
app.use(urlencoded({ extended: false }))

//setear el handlebars como engine por defecto
app.engine('hbs',hbs({
    extname:'hbs',
    defaultLayout:'layout',
    layoutsDir: path.join(__dirname, '../views/layouts/')
}));

app.set('view engine', 'hbs');

//mandar peticiones al router
app.use(router)

app.listen(PORT,HOST, () => {console.log(`Server on port: ${PORT} and host ${HOST}` );})