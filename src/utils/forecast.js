const request = require('request')


const forecast = (latitude, longitude, callback) => {
  const url = 'http://api.weatherstack.com/current?access_key=4d126ad5c1a186bf6e5841ba892f60dd&query=' + latitude + ','+ longitude

  request({url, json: true}, (error, { body }) => {
    if (error) {
        callback('Unable to connect to weather service!', undefined);
    } else if (body.error) {
        callback('Unable to find location', undefined);
    } else {
        callback(undefined, body.current.weather_descriptions[0] + ' it is ' + body.current.temperature + ' degree, it feels like ' + body.current.feelslike + ' degree')
    }
  })
}
module.exports = forecast
