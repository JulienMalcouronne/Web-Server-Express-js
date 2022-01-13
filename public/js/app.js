console.log('Client side Javascript file is loaded connect')

fetch('http://puzzle.mead.io/puzzle').then ((response) => {
  response.json().then((data) => {
    console.log(data)
  })
})

fetch('http://localhost:3000/weather?address=paris').then ((response) => {
  response.json().then((data) => {
    if (data.error) {
      console.log(data.error)
    } else {
      console.log(data.location)
      console.log(data.forecast)
    }
  })
})

const weatherForm = document.querySelector('form')
