const express = require('express')
const app = new express()
const db = require('better-sqlite3')('InsidetheFive.db')

app.use(express.json())

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