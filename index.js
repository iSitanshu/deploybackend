require('dotenv').config()
const express = require('express') // comman js
// import express from 'express' //module js
const app = express()
const port = 4000
const github = {
    "login": "iSitanshu",
    "id": 111778981,
    "node_id": "U_kgDOBqmcpQ",
    "avatar_url": "https://avatars.githubusercontent.com/u/111778981?v=4",
    "gravatar_id": "",
    "url": "https://api.github.com/users/iSitanshu",
    "html_url": "https://github.com/iSitanshu",
    "followers_url": "https://api.github.com/users/iSitanshu/followers",
    "following_url": "https://api.github.com/users/iSitanshu/following{/other_user}",
    "gists_url": "https://api.github.com/users/iSitanshu/gists{/gist_id}",
    "starred_url": "https://api.github.com/users/iSitanshu/starred{/owner}{/repo}",
    "subscriptions_url": "https://api.github.com/users/iSitanshu/subscriptions",
    "organizations_url": "https://api.github.com/users/iSitanshu/orgs",
    "repos_url": "https://api.github.com/users/iSitanshu/repos",
    "events_url": "https://api.github.com/users/iSitanshu/events{/privacy}",
    "received_events_url": "https://api.github.com/users/iSitanshu/received_events",
    "type": "User",
    "site_admin": false,
    "name": "Sitanshu Mishra",
    "company": null,
    "blog": "",
    "location": null,
    "email": null,
    "hireable": null,
    "bio": null,
    "twitter_username": null,
    "public_repos": 24,
    "public_gists": 0,
    "followers": 1,
    "following": 5,
    "created_at": "2022-08-22T16:37:09Z",
    "updated_at": "2024-07-31T12:11:28Z"
}


app.get('/', (req, res) => {
    res.send('Hello World!')
})

app.get('/twitter', (req, res) => {
    res.send('isitanshutwitter')
})

app.get('/login', (req, res) => {
    res.send('<h1>Please login at chaiaurbackend</h1>')
})

app.get('/youtube', (req, res) => {
    res.send('<h2>chai aur backend</h2>')
})

app.get('/github', (req, res) => {
    res.json(github)
})

app.get('/display', (req, res) => {
    res.send(`mere hero ki following - ${github.followers} \n and the user name for the above server is ${github.login}`)
})

app.listen(process.env.PORT, () => {
    console.log(`Example app listening on port ${process.env.PORT}`)
})

