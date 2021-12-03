// require the config file, so we have access to our API's url
const config = require('../config')
const store = require('../store')

// this function will make a POST request to create a single destination
const create = function (formData) {
  console.log('formData is', formData)
  return $.ajax({
    // use the POST method to create a destination
    method: 'POST',
    // the same url as show & destroy
    url: `${config.apiUrl}/destinations`,
    // when making our $.ajax request, include the formData
    // so it has new details
    data: formData,
    headers: {
      Authorization: 'Bearer ' + store.user.token
    }
  })
}

// this function, will make a request to GET /destinations (all the destinations)
const index = function () {
  // make sure to `return` the promise from $.ajax
  return $.ajax({
    // optional: because the default is 'GET'
    method: 'GET',
    // the url to our api + the url path (/destinations)
    url: config.apiUrl + '/destinations',
    headers: {
      Authorization: 'Bearer ' + store.user.token
    }

    // Bad practice: We are hard coding the url to our API below.
    // This is bad, because in future units, we will have multiple APIS
    // (a local and deployed API.)
    // url: 'https://library-express-api.herokuapp.com/destinations'
  })
}

// this function will make a DELETE request, for a single destination
// id - of the destination we want to destroy
const destroy = function (id) {
  return $.ajax({
    // use the delete http method
    method: 'DELETE',
    // this is the same url as SHOW
    url: config.apiUrl + '/destinations/' + id,
    headers: {
      Authorization: 'Bearer ' + store.user.token
    }
  })
}





module.exports = {
  create,
  index,
  destroy
}