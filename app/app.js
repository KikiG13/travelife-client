// use require with a reference to bundle the file and use it in this file
// const example = require('./example')

// use require without a reference to ensure a file is bundled
// require('./example')

const store = require('./store')
const authEvents = require('./auth/events')
const destinationEvents = require('./destinations/events')



$(() => {
  $('#after-sign-in').hide()
  $('#sign-up').on('submit', authEvents.onSignUp)
  $('#sign-in').on('submit', authEvents.onSignIn)
  $('#change-password').on('submit', authEvents.onChangePassword)
  $('#sign-out').on('click', authEvents.onSignOut)
  $('#post').on('submit', destinationEvents.onCreateDestination)
  $('#destinations-index').on('click', destinationEvents.onIndexDestinations)
  $('#destinations-destroy').on('submit', destinationEvents.onDestroyDestination)
  $('#destinations-update').on('submit', destinationEvents.onUpdateDestination)
  $('#on-change-password').on('click', () => $('#password-modal').show())
  $('#on-post').on('click', () => $('#post-modal').show())
  $('#on-update').on('click', () => $('#update-modal').show())
  $('#on-delete').on('click', () => $('#delete-modal').show())
  // $('#signout').on('click', () => $('#my-sign-out').show())
  $('.close').on('click', () => $('.modal').hide())
})


