const express = require('express')
const format = require('date-format')
const app = express()


const PORT = 4000 || process.env.PORT

const dateFormat = format.asString("dd[MM] - hh:mm:ss", new Date())

app.get("/", (req, res) => {
    res.status(200).send("<h1>Hello World! from Sanjay");
})

app.get("/api/v1/instagram", (req, res) => {
    const instaSocial = {
        "username" : "itssanjaybhatt",
        "followers" : 140,
        "follows" : 320,
        "date" : dateFormat
    }

    res.status(200).json(instaSocial);
})

app.get("/api/v1/facebook", (req, res) => {
    const facebookSocial = {
        "username" : "sanjaybhatt",
        "followers" : "240",
        "follows" : "234",
        "date" : dateFormat
    }

    res.status(200).json(facebookSocial);
})

app.get("/api/v1/linkedin", (req, res) => {
    const linkedinSocial = {
        "username" : "sanjaybhatt", 
        "followers" : "800",
        "follows" : "200", 
        "date" : dateFormat
    }
    
    res.status(200).json(linkedinSocial);
})

app.get("/api/v1/:token", (req, res) => {
    res.status(200).json({param : req.params.token})
})

app.listen(PORT, () => {
    console.log(`server is running at ${PORT}`);
})