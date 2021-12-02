

// just tell the user you created the destination
// const onCreateDestinationSuccess = function () {
//   $('#destinations-display').text('Destination was created successfully')
// }

// show the destination after it is created
const onCreateDestinationSuccess = function (responseData) {
  // extract the destination object from our response's data
  const destination = responseData.destination
  console.log(responseData)

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
    // remove the message from books-display
    $('#error-message').html('')
    // remove the red color caused by `text-danger`
    $('#error-message').removeClass('text-danger')
  }, 5000)

  $('form').trigger('reset')
}


module.exports = {
  onCreateDestinationSuccess,
  onError
}