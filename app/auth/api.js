// require the config file to use the API's url
const config = require('../config')
// require the store file so we have access to the store object
// so that we have the user's token when making authenticated requests
const store = require('../store')

const signUp = function (formData) {
  return $.ajax({
    url: `${config.apiUrl}/sign-up`,
    method: 'POST',
    data: formData
  })
}


module.exports = {
  signUp
}