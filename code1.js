const express = require('express')
const app = express()

var contactList = [
  {
      name: "SSS",
      phone: "1212121"
  },
  {
      name: "AAA",
      phone: "9999"  
  },
  {
      name: "BBB",
      phone: "8888" 
  }
]


// Start serv & listen on port 3000.
app.listen(3000, function () {
  console.log('Node listening on port 3000')
})

//Listen for get request on root url. eg. http://localhost:3000
app.get('/', function (req, res) {
  res.render('index',  {welcomeMessage: "Welcome to my app."})
})

app.set('view engine', 'ejs')


