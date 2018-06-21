// use express by requiring it
const express = require('express')
const app = express()

// create server with 'listen' method
app.listen(8848, function() {
  console.log('listening on 8848')
})
// node server.js to start server

console.log('so much to dooo!')

// READ

app.get('/', (req, res) => {
  res.sendFile(__dirname + '/index.html')
})
