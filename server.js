var express = require('express')
var bodyParyer = require('body-parser')
var states_api = require('./rootes/states.js')
var path = require('path')

var app = express()

 //server the vue app
 app.use(express.static(path.join(__dirname, 'client', 'dist')))

app.use(bodyParyer. json())

app.use('/api', states_api)

// Error
app.use(function(req, res, next){
    res.status(404).send('Not found')
})

app.use(function(req, res, next){
    res.status(500).send('Server error')
})

var server = app.listen(process.env.PORT || 3000, function() {
    console.log('app running on port', server.address().port)
})