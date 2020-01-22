const path = require('path')
const express = require('express')
const hbs = require("hbs")
const request = require('request')
const geocode = require("./utils/geocode.js")
const forecast = require ("./utils/forecast")


const app = express()
const publicDirectoryPath = path.join(__dirname, '../public')
const viewsPath = path.join(__dirname, "../templates/views")
const partialPath = path.join(__dirname, "../templates/partials")

app.set('view engine', 'hbs')
app.use(express.static(publicDirectoryPath))
app.set("views", viewsPath)
hbs.registerPartials(partialPath)


app.get('',(req,res)=> {
    res.render("index",{
        title: "this is the home page dynamic title",
        name: "Homie's name"
    })
})


app.get("/about",(req,res) => {
    res.render("about", {
        title: "This is a dynamic title",
        name: "Ankit Bagga"
    })
})



app.get('/weather', (req, res) => {
    if (!req.query.address){
        return res.send({error: "This is not a valid address"})
    }
    console.log(geocode(req.query.address), (error, {longtitude, latitude}) = {


    })

    // res.send({
    //     forecast: forecast(geocode(req.query.address)),
    //     location: 'Philadelphia',
    //     address: req.query.address
    // })
})

app.listen(3000, () => {
    console.log('Server is up on port 3000.')
})