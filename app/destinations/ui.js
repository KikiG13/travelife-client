
// just tell the user you created the destination
// const onCreateDestinationSuccess = function () {
//   $('#destinations-display').text('Destination was created successfully')
// }

// show the destination after it is created
const onCreateDestinationSuccess = function (responseData) {
  // extract the destination object from our response's data
  const destination = responseData.destination

  // create the html to display a single destination
  const destinationHtml = `
    <div>
      <h6>You successfully added a destination!</h6>
      <h4>Country: ${destination.country}</h4>
      <p>City: ${destination.city}</p>
      <p>Comment: ${destination.comment}</p>
      <p>Favorite Dish: ${destination.favoriteDish}</p>
      <p>Site1: ${destination.site1}</p>
      <p>Site2: ${destination.site2}</p>
      <p>Site3: ${destination.site3}</p>
      <p>Photo: ${destination.photo}</p>
      <p>Rating: ${destination.rating}</p>
      <p>ID: ${destination._id}</p>
    </div>
  `

  // for the div with the id destinations-display,
  // set its html to be our destination's html
  $('#show-destinations').html(destinationHtml)
  $('#post-modal').hide()
  $('form').trigger('reset')
}


// A function to run when we successfully get all of the destinations from the API
const onIndexDestinationsSuccess = function (responseData) {
  // extract the destinations from our response data into a variable to make it easier to use
  const destinations = responseData.destinations

  // create a string that will store all of our destinations as html
  // so we can use the `.html` method, to display the destinations on the page later
  let destinationsHtml = ''

   // loop over all of the destinations
   destinations.forEach(destination => {
    // add html for each destination, to the destinationsHtml variable
    destinationsHtml += `
    <div>
      <h4>Country: ${destination.country}</h4>
      <h6>${destination.country} is off your bucket list!</h6>
      <p>City: ${destination.city}</p>
      <p>Comment: ${destination.comment}</p>
      <p>Favorite Dish: ${destination.favoriteDish}</p>
      <p>Site1: ${destination.site1}</p>
      <p>Site2: ${destination.site2}</p>
      <p>Site3: ${destination.site3}</p>
      `
      if (destination.photo) {
        destinationsHtml += `
        <p>Photo: <img src=${destination.photo} height="200" width="300" alt:"Your destination photo"></a></p>
        `
      }
      destinationsHtml += `
      <p>Rating: ${destination.rating}</p>
      <p>ID: ${destination._id}</p>
      <h1>-------------------------------------------------</h1>

    </div>
  `
   })

    // select the div with id destinations-display ($('#destinations-display'))
  // and update its html, to be the html of all the destinations we want to show
  $('#show-destinations').html(destinationsHtml)
  $('#show-data').show()
}

// give the title parameter the default of 'Destination'
const onDestroyDestinationSuccess = function (title = 'Destination') {
  // showing the title of the destination that was destroyed
  $('#show-destinations').text(`${title} was destroyed successfully`)

  // $('#show-destinations').text('Destination was destroyed successfully')
  // select the div with the id `show-destinations` add the bootstrap
  // class of `text-success` to make the text green
  $('#show-destinations').addClass('text-success')

  // alternatively, we could add our own custom css class in index.scss
  // $('#show-destinations').addClass('success')

  // after 5 seconds (5000 milliseconds), run our callback function
  setTimeout(() => {
    // remove the message from show-destinations
    $('#show-destinations').html('')
    // remove the green color causes by `text-success`
    $('#show-destinations').removeClass('text-success')
  }, 5000)
  $('.modal').hide()

  $('form').trigger('reset')
}

const onUpdateDestinationSuccess = function () {
  $('#show-destinations').text('Destination was updated successfully. Click on "Get All Destinations" to get the updated destinations.')
  $('#show-destinations').addClass('text-success')

  // after 5 seconds (5000 milliseconds), run our callback function
  setTimeout(() => {
    // remove the message from show-destinations
    $('#show-destinations').html('')
    // remove the green color causes by `text-success`
    $('#show-destinations').removeClass('text-success')
  }, 5000)

  $('#update-modal').hide()
  $('form').trigger('reset')
}


// A function to run anytime any error occurs
const onError = function (err) {
  // if an error occurs, we will log the error (err)
  console.error(err)

  $('#error-message').text('Something went wrong, please try again')
  // make our error-message red, by adding the bootstrap text-danger class
  $('#error-message').addClass('text-danger')

  // after 5 seconds (5000 milliseconds), run our callback function
  setTimeout(() => {
    // remove the message from destinations-display
    $('#error-message').html('')
    // remove the red color caused by `text-danger`
    $('#error-message').removeClass('text-danger')
  }, 5000)

  $('form').trigger('reset')
}

module.exports = {
  onCreateDestinationSuccess,
  onIndexDestinationsSuccess,
  onDestroyDestinationSuccess,
  onUpdateDestinationSuccess,
  onError
} 