const path = require('path')
const express = require('express')
// console.log(__dirname)
// // console.log(__filename)
// console.log(path.join(__dirname, '../public'))

const app = express()
const publicDirectoryPath = path.join(__dirname, '../public')

app.use(express.static(publicDirectoryPath))

// app.get('/help', (req, res) => {
//   res.send([{
//     name:'Andrew',
//     age:27
//   }, {
//     name:'Jules'
//   }])
// })

// app.get('/about', (req, res) => {
//   res.send('<h1>About</h1>')
// })

// app.get('/weather', (req, res) => {
//   res.send({
//     forecast: 'It is snowing',
//     location: 'Philadelphia'
//   })
// })

app.listen(3000, () => {
  console.log('Server is up on port 3000.')
})