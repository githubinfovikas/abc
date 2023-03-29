const express = require('express')
 const bodyParser = require('body-parser')

const app = express()

var items = ['Buy Food', 'Cook Food', 'Eat Food']

app.set('view engine', 'ejs')
app.use(bodyParser.urlencoded({extends:true}))
app.use(express.static('views'))

app.get('/',function(req,res){
    var today = new Date()
    var currentDay = today.getDay()
    var day = ""
    

    var options = {
        weekday: 'long',
        day: 'numeric',
        month:'long'
    }

    var day = today.toLocaleDateString('en-us', options)

    res.render('list' ,{KindOfDay: day, newListItem:items} )
})

app.post('/' , function(req, res){
    var item = req.body.newItem
    items.push(item) 
    res.redirect('/')
})

app.listen(3000,function(){
    console.log('server started on part 3000');
})