const express = require('express')
const path = require('path')
/* const joi = require('joi') */
const bodyParser = require('body-parser')
const app = express()
app.use('/public', express.static(path.join(__dirname, 'static3')))
app.use(bodyParser.urlencoded({extended: false}))
app.listen(3000)

app.get('/', (req, res)=>{
    res.sendFile(path.join(__dirname, 'static3', 'index.html'))
})

app.post('/', (req, res)=>{
    console.log(req.body)
    res.send("successfully posted data")
    /* const schema = joi.object().keys({
        email : joi.string().trim().email().required(),
        pwd : joi.string().min(5).max(10).required()
    })
    schema.validate(req.body) */
    
    
})


/* app.get('/example', (req,res)=>{
    res.send('you found the example route')
})

app.get('/example/:name/:age', (req, res)=> {
    console.log(req.params) // must have data
    console.log(req.query) // optional data
    res.send(req.params.name + " : " + req.params.age)
}) */