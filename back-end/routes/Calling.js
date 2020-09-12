const express=require('express')
var bodyParser = require('body-parser')
const path=require('path')
const app=express()
const fetch=require('axios')
var cors = require('cors')


app.use(cors())

app.use(bodyParser.json())

app.post('/submit', function(req,res){
    
    console.log(req.body);
    console.log(req.body.firstName);
    console.log(req.body.email);
    console.log(req.body.phoneNumber);
    res.send(req.body)
    
})

app.listen(4000, () => {
    console.log('Server runnig succesfully');
})