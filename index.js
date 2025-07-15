require('dotenv').config() // Load environment variables from .env file 

const express = require('express') // require module syntax
// import express from 'express' : import module syntax
// Note: You can use either require or import, but not both in the same file without additional configuration.


const app = express()
// app is an instance of express
// It is used to configure the server and define routes. like MATH module


const port = 3000
// Define the port on which the server will listen

const githubData = {
  "login": "kanishkaanarang",
  "id": 172388433,
  "node_id": "U_kgDOCkZwUQ",
  "avatar_url": "https://avatars.githubusercontent.com/u/172388433?v=4",
  "gravatar_id": "",
  "url": "https://api.github.com/users/kanishkaanarang",
  "html_url": "https://github.com/kanishkaanarang",
  "followers_url": "https://api.github.com/users/kanishkaanarang/followers",
  "following_url": "https://api.github.com/users/kanishkaanarang/following{/other_user}",
  "gists_url": "https://api.github.com/users/kanishkaanarang/gists{/gist_id}",
  "starred_url": "https://api.github.com/users/kanishkaanarang/starred{/owner}{/repo}",
  "subscriptions_url": "https://api.github.com/users/kanishkaanarang/subscriptions",
  "organizations_url": "https://api.github.com/users/kanishkaanarang/orgs",
  "repos_url": "https://api.github.com/users/kanishkaanarang/repos",
  "events_url": "https://api.github.com/users/kanishkaanarang/events{/privacy}",
  "received_events_url": "https://api.github.com/users/kanishkaanarang/received_events",
  "type": "User",
  "user_view_type": "public",
  "site_admin": false,
  "name": "Kanishka Narang",
  "company": null,
  "blog": "",
  "location": null,
  "email": null,
  "hireable": null,
  "bio": "First year student at Maharaja Agrasen Institute of Technology.\r\nPursuing BTech AIML\r\n",
  "twitter_username": null,
  "public_repos": 11,
  "public_gists": 0,
  "followers": 4,
  "following": 4,
  "created_at": "2024-06-11T11:28:25Z",
  "updated_at": "2025-06-27T11:53:56Z"
}


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

app.get('/github', (req, res) => {
    res.json(githubData) // Send JSON data as a response
})

app.listen(process.env.PORT, () => {
    console.log(`Example app listening on port ${port}`)
})
// app.listen() is used to start the server
// The first argument is the port number, and the second is a callback function that runs when the server starts
// It logs a message to the console indicating that the server is running
// You can access the server by navigating to http://localhost:${port} in your web browser
