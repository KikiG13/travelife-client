const store = require('../store')

const signUpSuccess = function (responseData) {
  $('#fail-message').hide()
  $('#display-message').text('Sign up successful!')
  $('#display-message').removeClass()
  $('#display-message').addClass('text-success')
  $('form').trigger('reset')
  console.log('responseData is', responseData)
}


module.exports = {
  signUpSuccess
}