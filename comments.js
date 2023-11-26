// Create Web server
const express = require('express')
const app = express()
const port = 3000

// Enable json body parsing of application/json
app.use(express.json())

// Create a GET handler
app.get('/', (req, res) => {
    res.send('Hello World!')
})

// Create a POST handler
app.post('/', (req, res) => {
    console.log(req.body)
    res.send(req.body)
})

// Start the Web server
app.listen(port, () => {
    console.log(`Example app listening at http://localhost:${port}`)
})
