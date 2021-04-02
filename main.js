const express = require('express')
const app = express()
const path = require('path')

app.listen(3001, () => {
  console.log('listening');
})

app.use(express.static('public'))

app.get('/', (req, res) => {
  res.sendFile(path.join(__dirname, 'views/index.html'))
})
app.get('/solutions', (req, res) => {
  res.sendFile(path.join(__dirname, 'views/solutions.html'))
})
app.get('/community', (req, res) => {
  res.sendFile(path.join(__dirname, 'views/community.html'))
})
app.use('/', (req, res) => {
  res.sendFile(path.join(__dirname, 'views/404.html'))
})
