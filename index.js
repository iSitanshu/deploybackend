require('dotenv').config()
const express = require('express') // comman js
// import express from 'express' //module js
const app = express()
const port = 4000

app.get('/', (req, res) => {
    res.send('Hello World!')
})

app.get('/twitter',(req,res) => {
    res.send('isitanshutwitter')
})

app.get('/login',(req,res) => {
    res.send('<h1>Please login at chaiaurbackend</h1>')
})

app.get('/youtube',(req,res) => {
    res.send('<h2>chai aur backend</h2>')
})

app.listen(process.env.PORT, () => {
    console.log(`Example app listening on port ${port}`)
})

