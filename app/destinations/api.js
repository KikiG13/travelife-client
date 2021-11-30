// require the config file, so we have access to our API's url
const config = require('../config')

// this function will make a POST request to create a single book
const create = function (formData) {
  console.log('formData is', formData)
  return $.ajax({
    // use the POST method to create a destination
    method: 'POST',
    // the same url as show & destroy
    url: `${config.apiUrl}/destinations`,
    // when making our $.ajax request, include the formData
    // so it has new details
    data: formData
  })
}







module.exports = {
  create
}