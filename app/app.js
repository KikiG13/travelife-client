// use require with a reference to bundle the file and use it in this file
// const example = require('./example')

// use require without a reference to ensure a file is bundled
// require('./example')

const store = require('./store')
const authEvents = require('./auth/events')
const destinationEvents = require('./destinations/events')
// const modal = document.getElementById("password-Modal")
// const btn = document.getElementById("myBtn")
// const span = document.getElementsByClassName("close")[0]

// btn.onclick = function() {
//   modal.style.display = "block";
// }
// span.onclick = function() {
//   modal.style.display = "none";
// }
// window.onclick = function(event) {
//   if (event.target == modal) {
//     modal.style.display = "none";
//   }
// }


$(() => {
  $('#after-sign-in').hide()
  $('#sign-up').on('submit', authEvents.onSignUp)
  $('#sign-in').on('submit', authEvents.onSignIn)
  $('#change-password').on('submit', authEvents.onChangePassword)
  $('#sign-out').on('submit', authEvents.onSignOut)
  $('#post').on('submit', destinationEvents.onCreateDestination)
  $('#destinations-index').on('click', destinationEvents.onIndexDestinations)
  $('#destinations-destroy').on('submit', destinationEvents.onDestroyDestination)
  $('#destinations-update').on('submit', destinationEvents.onUpdateDestination)
  $('#on-change-password').on('click', () => $('#password-modal').show())
  $('.close').on('click', () => $('.modal').hide())
})


