const express = require('express')
const app = new express()
//const db = require('better-sqlite3')('InsidetheFive.db')
const port = process.env.port || 8080
const path = require('path')
app.use(express.json())
app.use(express.static(path.join(__dirname, "/client/build")))

app.get("/hello", (req,res) => {
    res.send("hello world")
})

app.get('/users', (req, res) => {
    const query = db.prepare("SELECT * FROM users")
    const events = query.all()
    res.json({
        events
    })
})

app.listen(8080, () => {
    console.log("hi")
})