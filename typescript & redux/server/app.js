const express = require('express')
const app = express()
const port = 8080

let likeList = ['apple watch', 'samsung Z flip', 'Mac book']

app.get('/todos', (req, res) => {
  console.log('Request arrived')
  setTimeout(() => {
    res.send(likeList)
  }, 1000)
})

app.listen(port, () => {
  console.log(`Connected ${port} port!!!`)
})
