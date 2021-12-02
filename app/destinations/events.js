// import the api functions from `api.js`
const api = require('./api')
// console.log('the api object is', api)
// import the ui success and failure handler functions
const ui = require('./ui')

// import the getFormFields function, to get data out of our form
const getFormFields = require('../../lib/get-form-fields')


const onCreateDestination = (event) => {
  // prevent the default action of the form refreshing the page
  // when it is submitted.
  event.preventDefault()

  // event.target is whatever submitted the event, we are
  // storing it in the user friendly variable `form`
  const form = event.target
  // Get the data out of our `form`
  const formData = getFormFields(form)
  console.log(formData)

  // make an HTTP request, to create a single destination
  // pass `formData` to update the destination with a new title & author
  api
    .create(formData)
  // if creating a single destination was successful, update it on the page
    .then(ui.onCreateDestinationSuccess)
  // otherwise, show an error message
    .catch(ui.onError)
}



module.exports = {
  onCreateDestination
}