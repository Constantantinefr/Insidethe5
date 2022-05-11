const express = require('express')
const app = new express()
const {CosmosClient} = require ('@azure/cosmos')
const dbURL = "https://insidethefive2-db.documents.azure.com:443/"
const dbKey = "zpf8DkuA7D8rV77OqIIugWnbcXix7fVjRezTNLcAR9fEBN4s1hfCw0p9ArF66Bdl0v3r17grrc1xvivsaX1Blw=="
//const db = require('better-sqlite3')('InsidetheFive.db')
const conString = "AccountEndpoint=https://insidethefive2-db.documents.azure.com:443/;AccountKey=zpf8DkuA7D8rV77OqIIugWnbcXix7fVjRezTNLcAR9fEBN4s1hfCw0p9ArF66Bdl0v3r17grrc1xvivsaX1Blw==;"
const port = process.env.PORT || 8080
const path = require('path')
const client = new CosmosClient(conString)
const db = client.database("InsidetheFive-db")
const container = db.container("test")

app.use(express.json()) 
app.use(express.static(path.join(__dirname, "/client/build")))

app.get('/users', (req, res) => {
    const query = db.prepare("SELECT * FROM users")
    const events = query.all()
    res.json({
        events
    })
})

app.post('/register', (req, res) => {
    const {username, name, password, address} = req.body
    const data = {
        id: Date.now().toString(),
        username,
        name,
        password,
        address
    }
    container.items.create(data)
})

app.get("/hello/:name", async (req,res) => {
    const data = {
        id: Date.now().toLocaleString(),
        score: Math.random() * 100,
        name: req.params.name
    }
    container.items.create(data)
        .catch((err) => {console.error(err)})
    const {resources: hellos} = await container.items.query("SELECT * FROM c")
        .fetchAll()
    res.send(JSON.stringify(hellos))
})

app.listen(port, () => {
    console.log("hi")
})