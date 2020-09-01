const express = require('express')

const app = express()

app.get('/', (req, res) => {
  res.send('Hello 🍪')
})

app.get('/set-cookie', (req, res) => {})

app.get('/get-cookie', (req, res) => {})

app.get('/del-cookie', (req, res) => {})

app.listen(3000, () => console.log('🍪 server on port 3000'))
