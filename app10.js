const express = require('express')
const path = require('path')

const app = express()
app.use('/public', express.static(path.join(__dirname, 'static4')))
app.listen(3000)
app.set('view engine', 'ejs')
app.get('/:userQuery', (req, res)=>{
    res.render('index', {data : {userQuery: req.params.userQuery, 
                                searchReshult : ['book1', 'book2', 'book3']}})
})


