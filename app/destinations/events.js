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

// this function is called whenever the `destinations-index` button is clicked
const onIndexDestinations = (event) => {
  event.preventDefault()
  // make our index request GET /destinations
  api
    .index()
    // if our HTTP request to get the destinations was successful, *then*
    // update our page to show all of the destinations
    .then(ui.onIndexDestinationsSuccess)
    // otherwise, if an error occurred, log it as a red error message
    .catch(ui.onError)
}

const onDestroyDestination = (event) => {
  // prevent the default action of the form refreshing the page
  // when it is submitted.
  event.preventDefault()

  // event.target is whatever submitted the event, we are
  // storing it in the user friendly variable `form`
  const form = event.target
  // Get the data out of our `form`
  const formData = getFormFields(form)
  console.log(formData)

  // extract the id from our form's data
  const id = formData.destination.id

  // make an HTTP request, to destroy a single destination based on its id
  api.destroy(id)
    // if destroying a single destination was successful, show it on the page
    .then(ui.onDestroyDestinationSuccess)
    // otherwise, show an error message
    .catch(ui.onError)
}

const onUpdateDestination = (event) => {
  // prevent the default action of the form refreshing the page
  // when it is submitted.
  event.preventDefault()

  // event.target is whatever submitted the event, we are
  // storing it in the user friendly variable `form`
  const form = event.target
  // Get the data out of our `form`
  const formData = getFormFields(form)
  console.log(formData)

  // extract the id from our form's data
  const id = formData.destination.id

  // make an HTTP request, to update a single destination based on its id
  // pass `formData` to update the destination with a new title & author
  api
    .update(id, formData)
  // if getting a single destination was successful, update it on the page
    .then(ui.onUpdateDestinationSuccess)
  // otherwise, show an error message
    .catch(ui.onError)
}



module.exports = {
  onCreateDestination,
  onIndexDestinations,
  onDestroyDestination,
  onUpdateDestination
}