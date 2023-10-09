const express = require('express')
const cors = require('cors')
const app = express()
const port = 5000


app.use(express.json())
app.use(express.urlencoded({ extended: true }))
app.use(cors())

app.get('/hello', (req, res) => {
    console.log("This endpoint called")
    res.json({
        msg: "Boilerplate"
    })
})
app.get('/', (req, res) => {
    res.json({
        "msg": 'Hello World!'
    })
})
app.get((err, req, res) => {
    res.status(404)
    res.json({
        err: "Not Found"
    })
})
app.use((err, req, res) => {
    res.status(500)
    res.render('error', { error: err })
})

app.listen(port, () => {
    console.log(`Example app listening on port ${port}`)
})