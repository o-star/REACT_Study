const express = require('express')
const app = express()
const port = 8080

let orgCount = 0

app.get('/', (req, res) => {
  res.send('Hello World!')
})

app.get('/get-count', (req, res) => {
  console.log("getCount API Request")
  res.send({
    count: orgCount
  })
})

app.post('/update-count', (req, res) => {
  count = req.body.count
  res.send("OK")
})

app.listen(port, () => {
  console.log(`Example app listening at http://localhost:${port}`)
})