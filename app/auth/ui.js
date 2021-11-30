const store = require('../store')

const signUpSuccess = function (responseData) {
  $('#fail-message').hide()
  $('#display-message').text('Sign up successful!')
  $('#display-message').removeClass()
  $('#display-message').addClass('text-success')
  $('form').trigger('reset')
  console.log('responseData is', responseData)
}

const signUpFailure = function (error) {
  $('#fail-message').show()
  $('#fail-message').text('Sign up failure')
  $('#fail-message').removeClass()
  $('#fail-message').addClass('text-danger')
  console.error('error is', error)
}


const signInSuccess = function (responseData) {
  store.user = responseData.user
  $('fail-message').hide()
  $('#display-message').text('Sign in successful!')
  $('#display-message').removeClass()
  $('#display-message').addClass('text-success')
  $('#fail-message').addClass('text-danger')
  $('#after-sign-in').show()
  console.log('responseData is', responseData)
}

const signInFailure = function (error) {
  $('#fail-message').show()
  $('#fail-message').text('Sign in failure')
  $('#fail-message').removeClass()
  $('#fail-message').addClass('text-danger')
  console.error('error is', error)
}

const changePasswordSuccess = function (responseData) {
  $('#display-message').text('Change password success!')
  $('#display-message').removeClass()
  $('#display-message').addClass('text-success')
  $('form').trigger('reset')
  console.log('responseData is', responseData)
}

const changePasswordFailure = function (error) {
  $('#fail-message').text('Change password failure!')
  $('#fail-message').removeClass()
  $('#fail-message').addClass('text-danger')
  console.error('error is', error)
}

const signOutSuccess = function (responseData) {
  $('#display-message').text('Sign out successful!')
  $('#display-message').removeClass()
  $('#display-message').addClass('text-success')
  $('#sign-up-in').show()
  $('#after-sign-in').hide()
  console.log('responseData is', responseData)
}

const signOutFailure = function (error) {
  $('#fail-message').text('Sign out failure!')
  $('#fail-message').removeClass()
  $('#fail-message').addClass('text-danger')
  console.error('error is', error)
}

module.exports = {
  signUpSuccess,
  signUpFailure,
  signInSuccess,
  signInFailure,
  changePasswordSuccess,
  changePasswordFailure,
  signOutSuccess,
  signOutFailure
}