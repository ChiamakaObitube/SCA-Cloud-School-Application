const express = require('express')
const app = express()
const port = 3000

app.get('/', (req, res) => {
  res.send('Welcome to SCA Cloud School Application')
})

app.listen(port, () => {
  console.log(`SCA app listening at http://localhost:${port}`)
})