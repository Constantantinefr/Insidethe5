const express = require('express')
const app = new express()
const {CosmosClient} = require('@azure/cosmos')
const dbUrl = "https://insidethefive-db.documents.azure.com:443/"
const dbKey = "0UZvDXov2db2fWh4aDUr9CHKfW9jlRLQAitFqIJRms1qDUlRAJbeZqRYmr3M4jy0u9Glua2EoKhnyjqmRd7ztA=="
//const db = require('better-sqlite3')('InsidetheFive.db')
const conString = "AccountEndpoint=https://insidethefive-db.documents.azure.com:443/;AccountKey=0UZvDXov2db2fWh4aDUr9CHKfW9jlRLQAitFqIJRms1qDUlRAJbeZqRYmr3M4jy0u9Glua2EoKhnyjqmRd7ztA==;"
const port = process.env.port || 8080
const path = require('path')
const client = new CosmosClient(conString)
const db = client.database("insidethefive-db")
const container = db.container("test")

app.use(express.json())
app.use(express.static(path.join(__dirname, "/client/build")))

app.get("/hello",async (req,res) => {
    const data = {
        id: Date.now().toLocaleString,
        score: Math.random() * 100,
        name:req.params.name
    }
    container.items.create(data)
    .catch((err) => {console.error(err)})
    const {resources: hellos} =  await container.items.query("SELECT * FROM c")
.fetchAll()
    res.send(JSON.stringify(hellos))
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