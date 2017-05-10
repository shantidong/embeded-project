
const express = require('express')
const app = express()

app.use(express.static('view'))

app.post('/event/fire', (req, res) => {
  console.log('fire!!')
  res.send('ok')
})

app.listen(17919, () => {
  console.log('http://localhost:17919')
})
