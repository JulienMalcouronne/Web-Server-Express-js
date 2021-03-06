console.log('Client side Javascript file is loaded connect')

// fetch('http://puzzle.mead.io/puzzle').then ((response) => {
//   response.json().then((data) => {
//     console.log(data)
//   })
// })

// targeting the form

const weatherForm = document.querySelector('form');
const search = document.querySelector('input');

// targeting the message to show to the users
const messageOne = document.querySelector('#message-1')
const messageTwo = document.querySelector('#message-2')


weatherForm.addEventListener('submit', (e) => {
  e.preventDefault()
  const location = search.value

  messageOne.textContent = 'Loading...'
  messageTwo.textContent = ''

  fetch(`https://julien-weather-application.herokuapp.com/weather?address=${location}`).then ((response) => {
    response.json().then((data) => {
      if (data.error) {
        messageOne.textContent = data.error
      } else {
        messageOne.textContent = data.location
        messageTwo.textContent = data.forecast
      }
    })
  })
})
