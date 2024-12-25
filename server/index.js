const express = require('express')
const app = express()
// const cors = require('cors')
// const mongoose = require('mongoose')
// const User = require('./models/user.model')
// const jwt = require('jsonwebtoken')
// const bcrypt = require('bcryptjs')

app.get('/hello' ,  (req,res)=>{
    res.send('hello');
}) 


app.listen(1337 , ()=>{
    console.log("server started on port no. :1337")
})