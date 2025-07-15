require('dotenv').config() // Load environment variables from .env file 

const express = require('express') // require module syntax
// import express from 'express' : import module syntax
// Note: You can use either require or import, but not both in the same file without additional configuration.


const app = express()
// app is an instance of express
// It is used to configure the server and define routes. like MATH module


const port = 3000
// Define the port on which the server will listen


app.get('/', (req, res) => {
    res.send('Hello World!')
})
// app.get() is used to define a route for GET requests
// The first argument is the path, and the second is a callback function that handles the request
// req is the request object, and res is the response object

// more example:
app.get('/twitter', (req,res) => {
    res.send('kanishka')
})

app.get('/instagram', (req,res) => {
    res.send('<h1>kanishka_123</h1>') // HTML content can be sent as a response
})


app.listen(process.env.PORT, () => {
    console.log(`Example app listening on port ${port}`)
})
// app.listen() is used to start the server
// The first argument is the port number, and the second is a callback function that runs when the server starts
// It logs a message to the console indicating that the server is running
// You can access the server by navigating to http://localhost:${port} in your web browser
