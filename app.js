const express = require('express')
const app = express()

// get the port from env variable
const PORT = process.env.PORT || 5001

app.use(express.static('dist'))

app.get('/health', (req, res) => {
  res.send('ok 200 test test new branch again 5')
})

app.listen(PORT, () => {
  console.log(`server started on port ${PORT}`)
})
