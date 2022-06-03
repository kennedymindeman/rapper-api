const express = require('express')
const app = express()
const PORT = 8000

const rappers = {
  '21 savage': {
    'age': 29,
    'birthName': 'Sheyaa Bin Abraham-Joseph',
    'birthLocation': 'London, England',
  },
  'chance the rapper': {
    'age': 29,
    'birthName': 'Chancelor Benette',
    'birthLocation': 'Chicago, Illinois',
  },
  'unknown': {
    'age': 0,
    'birthName': 'unknown',
    'birthLocation': 'Chicago, Illinois',
  },

}

// this is a network request
app.get('/', (request, response) => {
  // stuff that happens after someone connects to the server

  // __dirname indicates the current directory in express
  response.sendFile(__dirname + '/index.html')
})

app.get('/api/:name', (request, response) => {
  requestedRapper = request.params.name.toLowerCase()
  if (rappers[requestedRapper] != null) {
    response.json(rappers[requestedRapper])
  }
  response.json(rappers['unknown'])
})

// looks for a web request
app.listen(PORT, () => {
  console.log(`The server is now running on ${PORT}`)
})