const path = require('path')
const express = require('express')
const hbs = require('hbs')
// console.log(__dirname)
// // console.log(__filename)
// console.log(path.join(__dirname, '../public'))

const app = express()

// Define paths for Express config

const publicDirectoryPath = path.join(__dirname, '../public')
const viewsPath = path.join(__dirname, '../templates/views')
const partialsPath = path.join(__dirname, '../templates/partials')

// Setup handlebars engine and views location
app.set("view engine", "hbs")
app.set('views', viewsPath)
hbs.registerPartials(partialsPath)

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
    helpText: 'This is some helpful text.',
    title: 'Help',
    name: 'Julien Malcouronne'
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

app.get('/products', (req, res) => {
  if (req.query.search)req.query
  res.send({
    error: 'you must provide a search term',
    products: []
  })
})

app.get('/help/*', (req, res) => {
  res.render('404',{
    errorMessage: "Help article not found.",
    name: 'Julien Malcouronne',
    title: '404'
  })
})

app.get('*', (req, res) => {
  res.render('404',{
    errorMessage: "Page not found",
    name: 'Julien Malcouronne',
    title: '404'
  })
})

app.listen(3000, () => {
  console.log('Server is up on port 3000.')
})
