const { apiUrl } = require('../config')

// require getFormFields function to get data from forms
const getFormFields = require('../../lib/get-form-fields')

// require our api auth functions
const api = require('./api')
// require our ui functions to update page
const ui = require('./ui')

const onSignUp = function (event) {
  event.preventDefault()
  const form = event.target
  const formData = getFormFields(form)
  api.signUp(formData).then(ui.signUpSuccess).catch(ui.signUpFailure)   
}


module.exports = {
  onSignUp
}