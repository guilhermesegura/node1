const express = require('express')
const app = express()
app.use((req, res, next) => {
    console.log(req.url, req.method)
    next()
    })

app.use('/example', (req, res, next) => {
    req.banana = 'banana'
    next()
})

app.get('/',(req,res)=>{
    res.send('MiddleWare')
})

app.listen(3000)