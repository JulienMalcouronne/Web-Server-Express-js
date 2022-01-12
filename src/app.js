const path = require('path')
const express = require('express')
// console.log(__dirname)
// // console.log(__filename)
// console.log(path.join(__dirname, '../public'))

// Define paths for Express config
const app = express()
const publicDirectoryPath = path.join(__dirname, '../public')
const viewsPath = path.join(__dirname, '../templates')

// Setup handlebars engine and views location
app.set("view engine", "hbs")
app.set('views', viewsPath)

// Setup static directory to serve
app.use(express.static(publicDirectoryPath))

app.get('', (req, res) => {
  res.render('index', {
    title: 'Weather App',
    name: 'Julien Malcouronne'
  })
})

app.get('/help', (req, res) => {
  res.render('help', {
    helpText: 'This is some helpful text.'
  })
})

app.get('/about', (req, res) => {
  res.render('about', {
    title: "About Me",
    name: 'Julien Malcouronne'
  })
})

app.get('/weather', (req, res) => {
  res.send({
    forecast: 'It is snowing',
    location: 'Philadelphia'
  })
})

app.listen(3000, () => {
  console.log('Server is up on port 3000.')
})
