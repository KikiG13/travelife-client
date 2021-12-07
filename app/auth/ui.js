const store = require('../store')

const signUpSuccess = function (responseData) {
  $('#fail-message').hide()
  $('#display-message').text('Sign up successful!')
  $('#display-message').removeClass()
  $('#display-message').addClass('text-success')
  $('form').trigger('reset')
  console.log('responseData is', responseData)

  setTimeout(() => {
    $('#display-message').html('')
    $('#display-message').removeClass('text-success')
  }, 5000)
}

const signUpFailure = function (error) {
  $('#fail-message').show()
  $('#fail-message').text('Sign up failure')
  $('#fail-message').removeClass()
  $('#fail-message').addClass('text-danger')
  console.error('error is', error)

  setTimeout(() => {
    $('#fail-message').html('')
    $('#fail-message').removeClass('text-success')
  }, 5000)
}


const signInSuccess = function (responseData) {
  store.user = responseData.user
  $('fail-message').hide()
  $('#display-message').text('Sign in successful!')
  $('#display-message').removeClass()
  $('#display-message').addClass('text-success')
  $('#fail-message').addClass('text-danger')
  $('#after-sign-in').show()
  $('#sign-up-in').hide()
  $('form').trigger('reset')
  console.log('responseData is', responseData)

  setTimeout(() => {
    $('#display-message').html('')
    $('#display-message').removeClass('text-success')
  }, 5000)
}

const signInFailure = function (error) {
  $('#fail-message').show()
  $('#fail-message').text('Sign in failure')
  $('#fail-message').removeClass()
  $('#fail-message').addClass('text-danger')
  console.error('error is', error)

  setTimeout(() => {
    $('#fail-message').html('')
    $('#fail-message').removeClass('text-success')
  }, 5000)
}

const changePasswordSuccess = function (responseData) {
  $('#display-message').text('Change password success!')
  $('#display-message').removeClass()
  $('#display-message').addClass('text-success')
  $('form').trigger('reset')
  console.log('responseData is', responseData)

  setTimeout(() => {
    $('#display-message').html('')
    $('#display-message').removeClass('text-success')
  }, 5000)
}

const changePasswordFailure = function (error) {
  $('#fail-message').text('Change password failure!')
  $('#fail-message').removeClass()
  $('#fail-message').addClass('text-danger')
  console.error('error is', error)

  setTimeout(() => {
    $('#fail-message').html('')
    $('#fail-message').removeClass('text-success')
  }, 5000)
}

const signOutSuccess = function (responseData) {
  $('#display-message').text('Sign out successful!')
  $('#display-message').removeClass()
  $('#display-message').addClass('text-success')
  $('#sign-up-in').show()
  $('#after-sign-in').hide()
  $('#show-destinations').html('')
  console.log('responseData is', responseData)

  setTimeout(() => {
    $('#display-message').html('')
    $('#display-message').removeClass('text-success')
  }, 5000)
}

const signOutFailure = function (error) {
  $('#fail-message').text('Sign out failure!')
  $('#fail-message').removeClass()
  $('#fail-message').addClass('text-danger')
  console.error('error is', error)

  setTimeout(() => {
    $('#fail-message').html('')
    $('#fail-message').removeClass('text-success')
  }, 5000)
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
