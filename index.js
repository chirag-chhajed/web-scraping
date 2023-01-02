const axios = require('axios')
const chherio = require('cheerio')
const express = require('express')
const app = express()
const port = 3000

const url = 'https://crework.in/'

axios(url)
    .then(response => {
        const html = response.data 
        console.log(html)
        
    }).catch(err => console.log(err))


app.get('/', (req, res) => res.send('Hello World!'))
app.listen(port, () => console.log(`Example app listening on port ${port}!`))